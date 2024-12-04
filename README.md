
# My Component Library

This is a reusable component library built with TypeScript, Vite, and Tailwind CSS. The library follows **Atomic Design** principles, organizing components into `atoms` and `molecules` to promote reusability, scalability, and maintainability.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
  - [Storybook](#storybook)
  - [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project is organized into multiple directories and files, each serving a specific purpose. Below is an overview of the project structure.

```plaintext
my-component-library/
│
├── Root Files
│   ├── README.md                 # Project documentation
│   ├── package.json              # Project dependencies and scripts
│   ├── package-lock.json         # Dependency tree lock file
│   ├── tsconfig.json             # Main TypeScript configuration
│   ├── tsconfig.node.json        # TypeScript configuration for Node environment
│   ├── vite.config.ts            # Vite configuration for bundling
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration for CSS processing
│   ├── prettier.config.cjs       # Prettier configuration for code formatting
│   ├── eslint.config.js          # ESLint configuration for linting
│   ├── .gitignore                # Git ignore file
│   ├── .prettierignore           # Prettier ignore file
│   ├── .eslintrc.json            # Additional ESLint rules
│   ├── api-extractor.json        # API extractor for managing TypeScript declarations
│
├── .storybook/                   # Storybook configuration for component documentation
│   ├── main.ts                   # Main Storybook configuration file
│   ├── preview.tsx               # Storybook preview setup
│   ├── FigmaLink.tsx             # Figma design integration
│   ├── Background.tsx            # Background setup for Storybook
│   ├── constants.ts              # Constants used in Storybook
│   ├── DocumentationContainer.tsx # Custom container for documentation
│   ├── Font.tsx                  # Font configurations
│   ├── main.css                  # CSS for Storybook themes
│   └── static/                   # Static assets for Storybook
│       ├── icons/                # SVG icons for Storybook
│       │   └── apps-figma.svg    # Figma app icon
│       ├── fonts/                # Custom fonts
│       │   ├── Geist-Regular.woff
│       │   ├── Geist-Regular.ttf
│       │   └── Geist-Regular.woff2
│       └── assets/               # Additional media assets
│           ├── avatar.jpg
│           ├── avatar2.jpg
│           ├── avatar3.jpg
│           ├── avatar4.jpg
│           └── test_img_card.jpg
│
├── .github/                      # GitHub workflows for CI/CD automation
│   └── workflows/
│       ├── deploy-storybook.yml  # Deploys Storybook to GitHub Pages
│       └── version-bump.yml      # Automates version bumping
│
├── scripts/                      # Utility scripts for project automation
│   ├── lint.mjs                  # Runs linting across the project
│   ├── update-with-parent-branch.sh # Syncs with the parent branch
│   └── listChangedFiles.mjs      # Lists changed files for conditional workflows
│
└── src/                          # Main source directory for the library
    ├── index.css                 # Global styles for the project
    ├── vite-env.d.ts             # Vite environment type definitions
    ├── utils/                    # Utility functions and types
    │   ├── index.tsx             # Export hub for utilities
    │   ├── helpers.tsx           # General helper functions
    │   └── types/                # Shared types
    │       └── index.ts          # Main types file
    │
    ├── shared/                   # Shared styles and Tailwind presets
    │   ├── styles.css            # Base styles for all components
    │   ├── tailwind.preset.d.ts  # Type definitions for Tailwind preset
    │   └── tailwind.preset.js    # Custom Tailwind preset configuration
    │
    ├── components/               # Main component directory
    │   ├── atoms/                # Basic building blocks
    │   │   ├── Button/           # Reusable button component
    │   │   ├── Card/             # Card layout component
    │   │   ├── ...               # Additional atomic components
    │   │   └── index.ts          # Central export file for atoms
    │   ├── molecules/            # Composite components (combination of atoms)
    │   │   ├── Accordion/        # Accordion component
    │   │   ├── DropdownMenu/     # Dropdown component for menus
    │   │   ├── ...               # Additional molecule components
    │   │   └── index.ts          # Central export file for molecules
    │   └── index.ts              # Main export file for all components
```

## Installation

To use this component library in your project, install it via npm:

```bash
npm install my-component-library
```

Or via yarn:

```bash
yarn add my-component-library
```

## Usage

After installation, you can import and use the components in your project:

```tsx
import { Button } from 'my-component-library';

const App = () => (
  <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
);
```

## Development

This project uses **Storybook** for component documentation and **Vite** for bundling and development. Ensure you have the necessary dependencies installed before starting.

### Running Storybook

To view the components in isolation and check documentation:

```bash
npm run storybook
```

### Testing

This project is configured with ESLint and Prettier for code quality. Use the following commands:

- **Linting**: `npm run lint`
- **Formatting**: `npm run format`

Additional tests can be written using your preferred testing library and included in the `tests/` directory.

## Contributing

We welcome contributions to improve this component library! Here are some guidelines:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

### Adding New Components

When adding new components, please follow the **Atomic Design** structure:

- **Atoms**: Basic elements like buttons, icons, inputs.
- **Molecules**: Composite components made of multiple atoms.

Be sure to document each new component in Storybook for easy discovery and testing.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
