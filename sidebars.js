module.exports = {
  someSidebar: [
    {
      type: "category",
      label: "About Pyroscope",
      collapsed: false,
      items: ["pyroscope-overview", "storage-design", "supported-integrations"],
    },
    {
      type: "category",
      label: "Installing Pyroscope",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "installing-pyroscope-overview",
        },
        {
          type: "doc",
          id: "docker-guide",
        },
        {
          type: "doc",
          id: "kubernetes-helm-chart",
        },
        {
          type: "category",
          label: "Quick Start",
          collapsed: false,
          items: [
            "server-install-macos",
            "server-install-linux",
            "agent-install-windows",
          ],
        },
        {
          type: "category",
          label: "Using Pyroscope",
          collapsed: false,
          items: [
            "agent-overview",
            "integration-ebpf",
            {
              type: "category",
              label: "Go",
              collapsed: false,
              items: [
                "integration-golang",
                "integration-golang-tracing",
                "integration-golang-pull-mode",
              ],
            },
            "integration-python",
            {
              type: "category",
              label: "Java",
              collapsed: false,
              items: ["integration-java", "integration-java-tracing"],
            },
            {
              type: "category",
              label: "Ruby",
              collapsed: false,
              items: ["integration-ruby", "integration-ruby-tracing"],
            },
            "integration-rust",
            "integration-php",
            {
              type: "category",
              label: ".NET",
              collapsed: false,
              items: ["integration-dotnet", "integration-dotnet-beta"],
            },
            "integration-nodejs",
            "integration-aws-lambda",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Configure Pyroscope",
      collapsed: true,
      items: [
        "server-api-reference",
        {
          type: "category",
          label: "Server Configuration",
          items: [
            "server-configuration",
            {
              type: "category",
              label: "Authentication",
              collapsed: true,
              items: [
                "auth-overview",
                "api-key-authentication",
                "auth-google",
                "auth-github",
                "auth-gitlab",
                "auth-internal",
              ],
            },
            "data-retention",
            "metrics-export",
            "remote-write",
          ],
        },
        {
          type: "category",
          label: "Agent Configuration",
          items: [
            "agent-configuration-overview",
            "agent-configuration-exec",
            "agent-configuration-connect",
            "agent-configuration-agent",
            "agent-configuration-adhoc",
          ],
        },
        {
          type: "category",
          label: "Admin Configuration",
          items: ["admin-server", "admin-server-delete-app"],
        },
        "troubleshooting-faq",
      ],
    },
    {
      type: "category",
      label: "Pyroscope Cloud ☁️",
      collapsed: false,
      items: [],
    },
    {
      type: "doc",
      id: "flameql",
    },
    {
      type: "doc",
      id: "deployment",
    },
    {
      type: "category",
      label: "Developers",
      items: ["new-integrations", "developer-guide", "style-guide"],
    },
    {
      type: "doc",
      id: "grafana-plugins",
    },
    {
      type: "doc",
      id: "flamegraph-com",
    },
    {
      type: "doc",
      id: "ci",
    },
  ],
};
