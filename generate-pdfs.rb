pages = %w(terms privacy subprocessors support-agreement support-policy security)

pages.each do |x|
  system "docker run -v \"$(pwd):/workspace\" pink33n/html-to-pdf --url https://pyroscope.io/#{x}/ --pdf build/#{x}.pdf"
end

all_pages = pages.map { |x| "#{x}.pdf" }.join(' ')
system "cd build && zip legal.zip #{all_pages}"
