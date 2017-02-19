## About

This Project was inspired by [Slack clone built with Phoenix and React](https://medium.com/@benhansen/lets-build-a-slack-clone-with-elixir-phoenix-and-react-part-1-project-setup-3252ae780a1)

This Project is a Slack clone built with Phoenix and VueJS.

![slack clone preview](https://raw.githubusercontent.com/danieldocki/slack-clone-vuejs-elixir-phoenix/master/preview.png)

## Getting started

To run the project locally:

#### Running the Phoenix app

Install [Elixir](http://elixir-lang.org/install.html)

Create `api/config/dev.secret.exs` and add the database connection config
with your postgres user info.

Something like:
```
use Mix.Config

config :sling, Sling.Repo,
  username: "your_postgres_user",
  password: "your_postgres_password"
```

Download dependencies

```
cd api
mix deps.get
```

Create and migrate the database

```
mix ecto.create
mix ecto.migrate
```

Start the server

```
mix phoenix.server
```

#### Running the VueJS app

Install [Yarn](https://github.com/yarnpkg/yarn)

Install dependencies

*Note that this is /web, not /api/web*
```
cd web
yarn
```

Start the dev server

```
npm run dev
```
