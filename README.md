# Interactive Rating App

A responsive rating component built with React and Vite. Users can select a score from 1 to 5 and submit their rating, then view a confirmation screen with the selected value.

## Features

- Interactive rating selection using radio buttons
- Submit form handling with state-driven UI transitions
- Thank you confirmation screen after submission
- Accessible markup with proper labels and screen-reader support
- Styled with component-level CSS modules

## Tech Stack

- React 19
- Vite
- CSS Modules
- ESLint

## Project Structure

- `src/App.jsx` — top-level component managing app state
- `src/components/Rating.jsx` — rating form and selection UI
- `src/components/ThankYou.jsx` — confirmation screen after submission
- `src/components/Button.jsx` — reusable button component
- `src/components/Modal.jsx` — modal layout wrapper
- `src/index.css` — global styles

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or a compatible package manager

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal, usually `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — build the app for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint on the project files

## Notes

- The form prevents submission until a rating is selected.
- After submitting, users can reset the app and rate again.
- This project is a good example of a small React UI challenge with state and accessibility considerations.

## License

This project is open source and available for customization.
