# Unicode Task Management Tool

A collaborative task management tool with Next.js to highlight the full-stack capabilities of Ilyas Assainov. The project is WIP (work in progress).

- **Demo Link**: [Demo](https://task-management-tool-nextjs-la7s7z3by-assainovs-projects.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Main Features

- **Next.js Framework**: Utilizing the latest App Router architecture.
- **Localization**: Implemented using `react-i18next`. Integrated with i18nexus translations management tool. Use the API key in the `.env.example` and the `translations` npm script to download new translations. Invitation to this platform has been sent to team@unicodesolutions.co.
- **Kanban Board**: Modified from an open-source project (`react-dnd-kit-tailwind-shadcn-ui`) to create a Kanban board similar to Jira, with keyboard control.
- **Component Library**: Leveraging Shadcn for quick component functionality.
- **State Management**: Using Redux with Redux Toolkit and AsyncThunk.
- **Code Design Patterns**: Thoughtfully structured project with tidy organization of pages, API routes, components, and services. Future plans include Clean Code architecture and DDD for server-side task logic.
- **Testing**: Unit tests with Jest and React Testing Library. Cypress is a work in progress.
- **CI/CD**: Foundation set for CI/CD with linter and test scripts running on every git commit and push. Future plans include incorporating these commands into a CI/CD pipeline using GitHub Actions.

## Work in Progress Features

- **Backend APIs**: Persist the data on the server with Next.js APIs and SQLite database.
- **Authentication & Profile**: Add Authentication and authorization using NextAuth.
- **Real-Time Collaboration**: For demo purposes make a notifications feature to showcase a notification when a user is assigned a task.
- **UI Task Management**: Adding a modal to edit the task.
- **Deployment on a Custom Docker Environment**: Following [this guide](https://nextjs.org/docs/app/building-your-application/deploying#docker-image) to finalize the integration.
