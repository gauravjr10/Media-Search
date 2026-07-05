# Media Search

Media Search is a React + Vite web app that lets users search for photos, videos, and GIFs from multiple APIs and save favorites into a personal collection.

## Features

- Search media by keyword
- Browse results in tabs for photos, videos, and GIFs
- Save favorite items to a collection
- Navigate between home and collection pages
- Built with React, Redux Toolkit, and React Router

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Router
- Axios
- React Toastify

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/gauravjr10/Media-Search.git
   cd Media-Search
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_UNSPLASH_KEY=your_unsplash_key
   VITE_PEXELS_KEY=your_pexels_key
   VITE_GIPHY_KEY=your_giphy_key
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## Project Structure

- `src/components` – reusable UI components
- `src/pages` – main pages such as Home and Collections
- `src/redux` – Redux store and slices
- `src/api` – API requests for media sources

## License

This project is open source and available under the MIT License.