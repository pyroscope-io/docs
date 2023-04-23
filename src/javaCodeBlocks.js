export const exampleGradle = `implementation("io.pyroscope:agent:\${pyroscope_version}")`

export const exampleMaven = `<dependency>
  <groupId>io.pyroscope</groupId>
  <artifactId>agent</artifactId>
  <version>pyroscope_version</version>
</dependency>`

export const examplePlainJava = `PyroscopeAgent.start(
    new Config.Builder()
      .setApplicationName("ride-sharing-app-java")
      .setProfilingEvent(EventType.ITIMER)
      .setFormat(Format.JFR)
      .setServerAddress("http://pyroscope-server:4040")
      // Optionally, if authentication is enabled, specify the API key.
      // .setAuthToken(System.getenv("PYROSCOPE_AUTH_TOKEN"))
      .build()
  );`

export const exampleSpringFramework = `import io.pyroscope.javaagent.PyroscopeAgent;
import io.pyroscope.javaagent.config.Config;
import io.pyroscope.javaagent.EventType;
import io.pyroscope.http.Format;

@PostConstruct
public void init() {

    PyroscopeAgent.start(
    new Config.Builder()
        .setApplicationName("ride-sharing-app-java")
        .setProfilingEvent(EventType.ITIMER)
        .setFormat(Format.JFR)
        .setServerAddress("http://pyroscope-server:4040")
        // Optionally, if authentication is enabled, specify the API key.
        // .setAuthToken(System.getenv("PYROSCOPE_AUTH_TOKEN"))
        // Optionally, if you'd like to sets allocation threshold to register events, in bytes. '0' registers all events
        // .setProfilingAlloc("0")
        .build()
    );
}`

export const examplePhlareJavaCode = `PyroscopeAgent.start(
  new Config.Builder()
    .setApplicationName("phlare.java.app")
    .setFormat(Format.JFR)
    .setServerAddress("<URL>")
    // Optional HTTP Basic authentication
    .setBasicAuthUser("<User>")
    .setBasicAuthPassword("<Password>")
    // Optional Phlare tenant ID
    .setScopeOrgID("<TenantID>")
    .build()
);
`

export const examplePhlareJavaagent = `export PYROSCOPE_APPLICATION_NAME=phlare.java.app
export PYROSCOPE_FORMAT=JFR
export PYROSCOPE_SERVER_ADDRESS=<URL>
# Optional HTTP Basic authentication
export PYROSCOPE_BASIC_AUTH_USER=<User>
export PYROSCOPE_BASIC_AUTH_PASSWORD=<Password>
# Optional Phlare tenant ID
export PYROSCOPE_SCOPE_ORGID=<TenantID>
java -javaagent:pyroscope.jar -jar app.jar
`