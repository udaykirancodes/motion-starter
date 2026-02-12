# Motion Starter

A modern, opinionated React starter template designed for building and testing micro-interactions, animations, and UI components. Built with performance and developer experience in mind.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:**
  - [Tailwind CSS v4](https://tailwindcss.com/)
  - `tailwind-merge` & `clsx` for class utility management
  - `@tailwindcss/vite` plugin
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI + Tailwind)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Theming:** Dark/Light mode support (Custom ThemeProvider)

## 🛠️ Code Quality & Tooling

This project comes pre-configured with a robust suite of code quality tools:

- **Linting:** [ESLint](https://eslint.org/) (Flat config)
- **Formatting:** [Prettier](https://prettier.io/)
  - `@trivago/prettier-plugin-sort-imports`: Automatically sorts imports
  - `prettier-plugin-tailwindcss`: Automatically sorts Tailwind classes
- **Git Hooks:** [Husky](https://typicode.github.io/husky/) & [Lint Staged](https://github.com/okonet/lint-staged)
  - Pre-commit hook runs Prettier and ESLint on staged files to ensure clean code commits.

## 📂 Project Structure

```
├── .husky/              # Git hooks configuration
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets (images, fonts, etc.)
│   ├── components/      # UI components (shadcn generic + custom)
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles & Tailwind imports
├── .lintstagedrc.json   # Lint-staged configuration
├── .prettierrc.json     # Prettier configuration
├── components.json      # shadcn/ui configuration
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [pnpm](https://pnpm.io/) (Recommended package manager)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd motion-starter
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

### Development

Start the development server:

```bash
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build

Build the project for production:

```bash
pnpm run build
```

This will compile TypeScript and bundle the application using Vite.

### Linting & Formatting

- **Lint:** `pnpm run lint`
- **Format:** Prettier runs automatically on commit via Husky, or your IDE can handle it on save.

## 🎨 Features & Customization

### Adding Components

This project is set up with `shadcn/ui`. To add a new component, you can standard shadcn commands (if you have the CLI installed globally) or manually copy components.

### Micro-Interactions

Use `src/components/component.tsx` as a canvas for your micro-interactions. The `App.tsx` is configured to display this component within a container layout.

### Theming

The project uses a custom `ThemeProvider` located in `src/components/theme-provider.tsx`. It supports `light`, `dark`, and `system` preferences, persisting standard to `localStorage`.

## 📄 License

MIT
