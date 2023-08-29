require 'json'

JSON.parse(File.read("redirects.json")).each_pair do |from, to|
  from = from.sub(/^\//, "").sub(/\/$/, "")
  next if to == ""

  puts "Redirect 301 #{from} #{to}"
  system(
    "aws", "s3api", "put-object",
    "--bucket", "pyroscope.io",
    "--key", "#{from}/index.html",
    "--body", "static/slack/index.html",
    "--website-redirect-location", to)
end
