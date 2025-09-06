<a href="https://github.com/SujalXplores/v0.diy">
  <img alt="v0.diy" src="./public/og-image.png">
  <h1 align="center">v0.diy</h1>
</a>

<p align="center">
  An open source v0.dev alternative – generate small apps with one prompt. Build your ideas instantly with AI.
</p>

## Tech stack

- [Llama 3.1 405B](https://ai.meta.com/blog/meta-llama-3-1/) from Meta for the LLM
- [Together AI](https://togetherai.link/?utm_source=v0diy&utm_medium=referral&utm_campaign=example-app) for LLM inference
- [Sandpack](https://sandpack.codesandbox.io/) for the code sandbox
- Next.js app router with Tailwind
- Helicone for observability
- Plausible for website analytics

## Cloning & running

1. Clone the repo: `git clone https://github.com/SujalXplores/v0.diy`
2. Create a `.env` file and add your API keys:
   - **[Together AI API key](https://dub.sh/together-ai/?utm_source=example-app\&utm_medium=v0diy\&utm_campaign=v0diy-app-signup)**: `TOGETHER_API_KEY=<your_together_ai_api_key>`
   - **[CSB API key](https://codesandbox.io/signin)**: `CSB_API_KEY=<your_csb_api_key>`
   - **Database URL**: Use [Neon](https://neon.tech) to set up your PostgreSQL database and add the Prisma connection string: `DATABASE_URL=<your_database_url>`
3. Run `npm install` and `npm run dev` to install dependencies and run locally

## Contributing

For contributing to the repo, please see the [contributing guide](./CONTRIBUTING.md)
