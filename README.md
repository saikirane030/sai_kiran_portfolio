# SAI // AI LAB

A production-ready personal portfolio for E Sai Kiran, designed as an AI engineer's personal lab rather than a traditional student portfolio.

## Technologies

- HTML5 semantic markup
- CSS3 with responsive layouts, motion, reduced-motion support, and custom properties
- Vanilla JavaScript
- Google Fonts (Manrope and DM Mono)
- No frameworks or build step

## Features

- Premium dark AI-product visual system
- Responsive navigation with mobile menu
- Project lab with accessible case-study modal
- Technology matrix that highlights related projects
- Interactive problem-solving flow
- Local Ask SAI AI assistant with suggested questions, typing state, and clear chat
- Smooth scrolling, focus states, reduced-motion support, SEO metadata, and Open Graph metadata
- GitHub, LinkedIn, email, and resume download surfaces

## Run Locally

Because this is a static site, open `index.html` directly in a browser, or serve the folder with any static file server. For example, with VS Code's Live Server extension, open `index.html` and choose **Open with Live Server**.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, open **Settings > Pages**.
3. Choose **Deploy from a branch**, select the main branch and the root folder, then save.
4. GitHub will publish the site at the generated Pages URL.

The portfolio is prepared for the repository: https://github.com/saikirane030/sai_kiran_portfolio

## AI Assistant

Ask SAI AI currently runs entirely in the browser using a small local fallback response system in `script.js`. It is intentionally a UI-first implementation: the chat form, message states, suggested questions, typing indicator, and clear action are ready for a future model connection.

To connect a real GenAI service later, replace the `answerFor` fallback inside `script.js` with a request to your own backend endpoint. Keep the browser talking to your server, and let the server call the model provider.

**Never expose API keys in frontend code or commit them to GitHub.** Store secrets in server-side environment variables and use a protected backend or serverless function.

## Personalization Checklist

- Compile `resume.tex` to `assets/E-Sai-Kiran-Resume.pdf` with a LaTeX distribution before deploying.
- The contact email is `saikirane030@gmail.com`.
- Replace any project placeholder links with the relevant repository or live demo URLs.
