require 'json'

JSON.parse(File.read("redirects.json")).each_pair do |from, to|
  next if to == ""

  # normalize it first
  from = from.sub(/^\//, "").sub(/\/$/, "")
  # add slash unless this is root
  from = "#{from}/" unless from == ""

  puts "Redirect 301 #{from} #{to}"
  system(
    "aws", "s3api", "put-object",
    "--bucket", "pyroscope.io",
    "--key", "#{from}index.html",
    "--body", "static/slack/index.html",
    "--website-redirect-location", to)
end
