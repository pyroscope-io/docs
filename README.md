# pyroscope.io

This is source code for [pyroscope.io](https://pyroscope.io/) website. It's based on [docusaurus](https://docusaurus.io/).

### Installation

To install dependencies run this command. Make sure you have yarn installed before continuing.

```shell
yarn install
```

### Local development

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server:

```shell
yarn start
```

### Contributing

Feel free to contribute to the project by forking the repository and submitting pull requests.

### Changing Docusaurus Components

Sometimes you might want to change a docusaurus component (for example, `Footer`). To do that you'll need to copy the component from docusaurus. This process is callsed swizzling and here's the best way to do it:

```console
yarn run swizzle <theme name> [component name]
# for example:
yarn run swizzle @docusaurus/theme-classic Footer
```

You can learn more about swizzling in [docusaurus docs](https://docusaurus.io/docs/swizzling).

### Upgrading Docusaurus

The biggest thing you need to keep in mind is that all components that were updated manually (swizzled) have to be updated as well.

### Syncing videos (requires AWS permissions)

```
aws s3 sync s3://pyroscope.io/videos ./static/videos
```
