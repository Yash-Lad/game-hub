# 🎮 GameHub

A modern, responsive game discovery platform built with React and TypeScript. Browse, search, and filter through thousands of games with detailed information including ratings, platforms, and genres.

![GameHub Screenshot](./GameHub%20Preview.png)

## ✨ Features

- **🔍 Advanced Search**: Search games by title with real-time results
- **🎯 Smart Filtering**: Filter games by genre and platform
- **📊 Multiple Sort Options**: Sort by relevance, date added, name, release date, popularity, or rating
- **🌓 Dark/Light Mode**: Toggle between dark and light themes
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Loading**: Skeleton loading states for better user experience
- **🎨 Rich UI**: Game cards with images, platform icons, critic scores, and emoji ratings
- **🖼️ Optimized Images**: Automatic image cropping and optimization

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Framework**: Chakra UI
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Animations**: Framer Motion
- **API**: RAWG Video Games Database

## 📦 Dependencies

### Core Dependencies

- `react` & `react-dom` - React framework
- `@chakra-ui/react` - UI component library
- `@emotion/react` & `@emotion/styled` - CSS-in-JS styling
- `axios` - HTTP client for API requests
- `framer-motion` - Animation library
- `react-icons` - Icon library
- `next-themes` - Theme management

### Development Dependencies

- `typescript` - Type checking
- `@vitejs/plugin-react` - Vite React plugin
- `@types/react` & `@types/react-dom` - React type definitions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/game-hub.git
   cd game-hub
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Setup & Installation Dependencies**
   ```bash
   npm install @chakra-ui/react@2.8.2 @emotion/react@11.11.3 @emotion/styled@11.11.0 framer-motion@10.16.5
   npx @chakra-ui/cli snippet add color-mode
   npm i axios
   npm i react-icons@4.7.1
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🏗️ Project Structure

```
game-hub/
├── public/vite.svg                 # Static assets
├── src/
│   ├── assets/            # Images
│   ├── components/        # Reusable React components
│   │   ├── ColorModeSwitch.tsx
│   │   ├── CriticScore.tsx
│   │   ├── Emoji.tsx
│   │   ├── GameCard.tsx
│   │   ├── GameCardContainer.tsx
│   │   ├── GameCardSkeleton.tsx
│   │   ├── GameGrid.tsx
│   │   ├── GameHeading.tsx
│   │   ├── GenreList.tsx
│   │   ├── NavBar.tsx
│   │   ├── PlatformiconList.tsx
│   │   ├── PlatformSelector.tsx
│   │   ├── SearchInput.tsx
│   │   └── SortSelector.tsx
│   ├── data/              # Static data and mock data
│   │   └── genres.ts
│   ├── hooks/             # Custom React hooks
│   │   ├── useData.ts
│   │   ├── useGames.ts
│   │   ├── useGenres.ts
│   │   └── usePlatforms.ts
│   ├── services/          # API and external services
│   │   ├── api-client.ts
│   │   └── image-url.ts
│   ├── App.css           # Main application Styles
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles
│   ├── main.tsx          # Application entry point
│   └── theme.ts          # Chakra UI theme configuration
├── GameHub Preview.png     # GameHub Preview
├── index.html              # HTML template
├── package-lock.json       # Project dependencies and scripts
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
├── tsconfig.json           # TypeScript Configuration
├── tsconfig.node.json      # Node TypeScript Config
└── vite.config.ts          # Vite Build Setup
```

## 🎯 Key Components

### GameGrid

Displays games in a responsive grid layout with loading states and error handling.

### GameCard

Individual game card showing:

- Game cover image
- Platform compatibility icons
- Metacritic critic score
- Game title with emoji rating

### GenreList

Sidebar component for filtering games by genre with visual genre icons.

### SearchInput

Real-time search functionality with debounced input.

### PlatformSelector & SortSelector

Dropdown menus for filtering and sorting games.

## 🔧 Custom Hooks

- **useData**: Generic hook for API data fetching with loading and error states
- **useGames**: Fetches games with filtering and search parameters
- **useGenres**: Provides genre data (uses static data for performance)
- **usePlatforms**: Fetches available gaming platforms

## 🎨 Theming

The application uses Chakra UI's theming system with:

- Custom color palette
- Dark mode support
- Responsive breakpoints
- Consistent spacing and typography

## 🌐 API Integration

GameHub integrates with the [RAWG Video Games Database API](https://rawg.io/apidocs) to provide:

- Comprehensive game database
- High-quality game images
- Detailed game information
- Platform and genre data

## 📱 Responsive Design

The application is fully responsive with:

- Mobile-first approach
- Flexible grid layouts
- Adaptive navigation
- Touch-friendly interactions

## 🚀 Performance Optimizations

- **Image Optimization**: Automatic image cropping and resizing
- **Loading States**: Skeleton components for better perceived performance
- **Request Cancellation**: Prevents memory leaks with AbortController
- **Static Data**: Genres are cached locally to reduce API calls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [RAWG.io](https://rawg.io/) for providing the comprehensive games database API
- [Chakra UI](https://chakra-ui.com/) for the excellent component library
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icon set

## 🚀 Ready to Dive In?

Clone the repo and start coding!
