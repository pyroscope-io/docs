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
            "integration-golang",
            "integration-golang-pull-mode",
            "integration-python",
            "integration-ebpf",
            "integration-java",
            "integration-ruby",
            "integration-php",
            "integration-dotnet",
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
              items: ["auth-google", "auth-github", "auth-gitlab"],
            },
            "data-retention",
            "metrics-export",
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
      ],
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
  ],
};
