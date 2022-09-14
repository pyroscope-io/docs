export const examplePprof = `cat cpuprofile.pb.gz | \\
  curl "https://pyroscope.cloud/ingest?format=pprof&name=curl-test-app"
`

export const exampleJFR = `curl \\
  -F jfr=@profile.jfr \\
  "https://pyroscope.cloud/ingest?format=jfr&name=curl-test-app"
  `

export const exampleCollapsed = `printf "foo;bar 100\\n foo;baz 200" | \\
  curl \\
  --data-binary @- \\
  'http://localhost:4040/ingest?name=curl-test-app'
`

