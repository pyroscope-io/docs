const from = Math.floor(+new Date() / 1000) - 10;
const until = from + 10;


export const examplePprof = `# First get API_TOKEN from https://pyroscope.cloud/settings/api-keys

# Ingest profiles in pprof format
curl \\
  -H "Authorization: Bearer $API_TOKEN" \\
  --data-binary @cpuprofile.pb.gz \\
  "https://pyroscope.cloud/ingest?format=pprof&from=${from}&until=${until}&name=my-app-name-pprof"
`

export const exampleJFR = `# First get API_TOKEN from https://pyroscope.cloud/settings/api-keys

# Ingest profiles in JFR format
curl \\
  -H "Authorization: Bearer $API_TOKEN" \\
  -F "jfr=@profile.jfr" \\
  "https://pyroscope.cloud/ingest?format=jfr&from=${from}&until=${until}&name=my-app-name-jfr&units=samples&aggregationType=sum&sampleRate=100"
`

export const exampleCollapsed = `# First get API_TOKEN from https://pyroscope.cloud/settings/api-keys

# Ingest profiles in collapsed format
printf "foo;bar 100\\nfoo;baz 200" | curl \\
  -H "Authorization: Bearer $API_TOKEN" \\
  --data-binary @- \\
  'https://pyroscope.cloud/ingest?name=my-app-name-collapsed&from=${from}&until=${until}&'
`

