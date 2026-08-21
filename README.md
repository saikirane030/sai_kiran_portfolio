# SAI // AI LAB

A production-ready personal portfolio for E Sai Kiran, designed as an AI engineer's personal lab rather than a traditional student portfolio.

## Technologies

| Technology | Used for |
| --- | --- |
| HTML5 | Website structure and content |
| CSS3 | 2026-style UI, animations, and responsive design |
| JavaScript | Interactions, project modals, filters, and chatbot UI |
| Python | Planned backend for the real GenAI assistant |
| GenAI API | Planned assistant/model integration |
| Git + GitHub | Version control and hosting |
| GitHub Pages | Free frontend deployment |

The current version intentionally uses HTML5, CSS3, and vanilla JavaScript only. React is not required. Python will be added when the secure GenAI backend is implemented.

## Features

- Premium dark AI-student operating-system visual system
- Responsive navigation with mobile menu
- Project lab with honest experiment case studies and accessible modal
- Technology matrix that highlights related projects
- Interactive problem-solving flow
- Learning Now section and Experience / Journey timeline
- Local Ask SAI AI assistant with restricted portfolio knowledge, typing state, and clear chat
- Smooth scrolling, focus states, reduced-motion support, SEO metadata, and Open Graph metadata
- GitHub, LinkedIn, and email contact surfaces

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

## Planned Architecture

```text
HTML5
	↓
CSS3
	↓
JavaScript
	↓
Python backend
	↓
GenAI model/API
	↓
AI response
```

The browser currently stops at JavaScript and uses local fallback responses. A future implementation will send a question from the browser to a Python backend, let the backend call the GenAI provider with a restricted portfolio context, and return the response to the chat UI. API keys will remain in backend environment variables.

## Personalization Checklist

- The contact email is `saikirane030@gmail.com`.
- Project cards show the portfolio repository link and label unavailable live demos as Coming Soon.
