# A3Media test

## Project Description

This APP is a React application built with TypeScript that allows users to select a dog breed from a dropdown menu and display a list of images of the selected breed. The app is responsive, using Redux for state management, and includes accessibility features. Users can navigate images using the tab key and enlarge the selected image by pressing the enter key.

## Features

- Fetch and display a list of dog breeds.
- Fetch and display images of the selected breed.
- Responsive design for mobile, tablet, and desktop.
- Accessible navigation and interaction.
- Keyboard navigation and interaction.
- State management using Redux.
- Integration testing with Cypress.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:joserealdev/A3Media-prueba.git
   cd A3Media-prueba
   ```

2. Install the dependencies:

   ```bash
   nvm use && npm i
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

4. Run integration tests:
   ```bash
   npm run test
   ```

## Build and deploy

1. Make a production build:

   ```bash
   npm run build
   ```

2. Deploy it with:
   ```bash
   npx serve dist/
   ```

## Usage

- Use the dropdown menu at the top of the screen to select a dog breed.
- The app will display a list of images for the selected breed.
- Use the tab key to navigate through the images or click on it.
- Press the enter key to enlarge the selected image.
- Press the backspace key to close the enlarged image modal.
