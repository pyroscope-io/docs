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