<img align="right" src="https://app.riamoneytransfer.com/favicon-32x32.png?v=b5c554880e0b1566c54e5f8b0c9985b0">

# RIA Public Site (NextJs)

MAIN [![Netlify Status](https://api.netlify.com/api/v1/badges/20d11a7c-b8b6-4b9c-a3ff-723038935fc0/deploy-status)](https://app.netlify.com/sites/dandelion-preview/deploys)

👉 Developing ...

```bash
🔥 Site developed with Nextjs, Prismic.io and Hosted on Netlify Cloud
```

## 💻 Installation

1. Install the project dependencies by running `$ yarn install`.

2. Fetch submodules using `git submodule update --init --recursive`.

3. Get inside the virtual environment by running `$ yarn dev`

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Other functions

1. Run Tests: `yarn test` while the server is running in another terminal

2. Run Linter `yarn lint`.

3. Run Storybook `yarn storybook` this should be tun from the root of the folder

4. Run Slicemachine `yarn slicemachine` this should be tun from the root of the folder

5. Fetch submodules `git submodule update --init --recursive`

## Dependencies

- [Next](https://nextjs.org/docs/getting-started)
- [Prismic + Next Documentation](https://prismic.io/docs/technologies/nextjs)
- [styled-components](https://styled-components.com/)

## Useful commands

- if for some reason the port for slicemachine (9999) or for storybook (8888) or the development server (3000) are bloqued even if there are no console using it right now the following commands will work:
  - `sudo lsof -i PORT` this will give you the PID of the process that if poluting the port
  - `sudo kill -9 PID` this will kill the poluting process

## Configuration .gitmodules file

- Check configuration file content
  - Edit the file and check the content, for example:
    `nano .gitmodules`

```bash
[submodule "lib/RMT_Common_Components"]
        path = lib/RMT_Common_Components
        url = git@github.com:Euronet-Worldwide/RMT_Common_Components.git
```

- Execute command to update submodules

```bash
  git submodule update --remote
```
