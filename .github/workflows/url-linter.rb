#!/usr/bin/env ruby

require 'http'
require 'colorize'


def sitemap_to_urls(str)
  str.scan(/<loc>(.*?)<\/loc>/).map do |url|
    url[0].sub("https://pyroscope.io/", "")
  end
end

warnings = []
errors = []

# TODO: maybe get sitemap from main branch?
old_urls = sitemap_to_urls(HTTP.get("https://pyroscope.io/sitemap.xml").to_s)
new_urls = sitemap_to_urls(File.read("build/sitemap.xml"))

added_urls = new_urls - old_urls
removed_urls = old_urls - new_urls


puts "url changes"
puts "added urls:"
puts added_urls.map(&:green)
puts "removed urls:"
puts removed_urls.map(&:red)

if removed_urls
  errors << "Looks like you deleted some pages. This has negative SEO implications. Deleted pages: #{removed_urls.inspect}"
end

all_docs = Dir.glob("docs/**/*.mdx").map do |file|
  File.basename(file)
end

Dir.glob("docs/**/*.mdx").each do |file|
  filename = File.basename(file)
  slug = File.read(file)[/slug:\s*(.+)/, 1]
  if "/" + filename.sub(".mdx", "") != slug
    warnings << "consider renaming your file '#{filename}' to match its slug: '#{slug}'"
  end
end


puts "warnings:"
puts warnings.map(&:yellow)

exit 1 if errors.any?

puts "errors:"
puts errors.map(&:red)
