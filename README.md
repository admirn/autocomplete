# Autocomplete with React and Vite

This project is bootstrapped with [Vite](https://vitejs.dev/).

# Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v16.0.0 or later)
- [NPM](https://www.npmjs.com/) (v7.0.0 or later)
- [React](https://reactjs.org/) (v17.0.0 or later)
- [TypeScript](https://www.typescriptlang.org/) (v4.1.0 or later)

## Installation

1. Clone the repository

   ```sh
   git clone
   ```

   or download the ZIP file.

2. Navigate to the project directory and install the dependencies
   ```sh
   cd autocomplete
   npm install
   ```
3. Start the development server
   ```sh
    npm run dev
   ```
4. Open the browser and navigate to `http://localhost:5173/`

# Features

## Folder Structure

The project has the following folder structure:

- `public`: Contains the public assets like images, icons, and fonts.
- `src`: Contains the source code of the application.
  - `components`: Contains the reusable components of the application.
  - `api`: Contains the api calls.
  - `pages`: Contains the pages of the application.
  - `styles`: Contains the global styles of the application.
  - `utils`: Contains the utility functions of the application.

### Components

The `components` folder contains the following component: Autocomplete, SearchInput and OptionsContainer. The Autocomplete component is a reusable component that can be used to create an autocomplete input field. For the purpose of this project, the Autocomplete component is used to create a search bar that fetches data from an API and displays the results in a dropdown. The Autocomplete component is a controlled component that takes the following props: value, onChange, listLabel, listValues and options. The value prop is the value of the input field. The onChange prop is the function that is called when the value of the input field changes. The listLabel prop is the label of the list of options. The listValues prop is the list of options. The options prop is the options that are displayed in the dropdown.
The simple api used in this project is `https://rickandmortyapi.com/api/character/?name=${input}`where input is the value of the input field. The Autocomplete component fetches the data from the API and displays the results in a dropdown.

### Layout

The layout folder is uses only one file (index.tsx) which is the main layout of the application. It contains the Autocomplete component and the styles for the layout.
