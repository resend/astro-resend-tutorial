# Resend with Astro.

This example shows how to use Resend with Astro Actions and Node.js.

## Prerequisites

To get the most out of this guide, you’ll need to:

* [Create an API key](https://resend.com/api-keys)
* [Verify your domain](https://resend.com/domains)

## Instructions

1. Define environment variables in `.env` file.

```sh
cp .env.example .env
```

2. Install dependencies:

```sh
npm install
# or
yarn
  ```

3. Add your name/domain in Resend calls

- src/actions/index.ts
- src/pages/api/send.ts

4. Execute the following command:

```sh
npm run dev
```

## License

MIT License
