# May the force be with you!


## Project Overview

This project is a React Native application called "Galaxy Navigator". It features a Star Wars-themed interface with custom components and screens.

## File Structure
Galaxy_Navigator/
├── assets/
│   ├── fonts/
│   │   ├── Starjedi.ttf
│   │   └── StarJhol.ttf
│   ├── empire_icon.png
│   ├── galaxy.jpg
│   ├── lightsaber.png
│   └── x-wing.png
├── src/
│   ├── components/
│   │   ├── CustomHeader.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── StarButton.tsx
│   │   ├── StarHeader.tsx
│   │   └── StarText.tsx
│   ├── constants/
│   │   └── colors.ts
│   ├── screens/
│   │   ├── SplashPage.tsx
│   │   └── StarshipsScreen.tsx
│   ├── services/
│   │   └── StarshipsService.ts
│   └── App.tsx
├── .gitignore
├── app.json
├── babel.config.js
├── package.json
├── tsconfig.json
└── README.md



## Components

- **starHeader.tsx**: A custom header component with Star Wars-themed styling.
- **LoadingScreen.tsx**: A loading screen compnent displayed while fonts are loading.
- **starButton.tsx**: A custom button component with Star Wars-themed styling.
- **StarHeader.tsx**: A header component with icons and a title.
- **StarText.tsx**: A custom text component with Star Wars-themed styling.

## Screens

- **SplashPage.tsx**: The splash screen displayed when the app starts.
- **StarshipsScreen.tsx**: The screen displaying a list of Star Wars starships.

## Services

- **StarshipsService.ts**: A service for fetching starships data from the Star Wars API.

## Constants

- **colors.ts**: A file containing color constants used throughout the app.

## Configuration Files

- **app.json**: Configuration file for the Expo project.
- **babel.config.js**: Babel configuration file.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Contains the dependencies and scripts for the project.
- **.gitignore**: Specifies files and directories to be ignored by Git.

## Assets

- **fonts/**: Contains custom fonts used in the app.
- **empire_icon.png**: Icon used in the header.
- **galaxy.jpg**: Background image for the splash screen.
- **lightsaber.png**: Divider image used in the header.
- **x-wing.png**: Image used in various components.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```sh
git clone <repository-url>
cd Galaxy_Navigator
npm install