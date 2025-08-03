# Cricket App

This is a React application named "cricketapp" that showcases various components related to cricket players and their scores.

## Project Structure

The project consists of the following main directories and files:

- **src/**: Contains all the source code for the application.
  - **components/**: Contains the React components.
    - `ListofPlayers.jsx`: Displays a list of players with their scores.
    - `Scorebelow70.jsx`: Filters and displays players with scores below 70.
    - `OddPlayers.jsx`: Displays players at odd indices.
    - `EvenPlayers.jsx`: Displays players at even indices.
    - `ListofIndianPlayers.jsx`: Merges and displays two lists of Indian players.
  - `App.jsx`: The main application component that conditionally renders components.
  - `index.js`: The entry point of the application that renders the App component.

- **public/**: Contains the static files for the application.
  - `index.html`: The main HTML file that serves the React application.

- **package.json**: Configuration file for npm, listing dependencies and scripts.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate into the project directory:
   ```
   cd cricketapp
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Features

- Displays a list of cricket players and their scores.
- Filters players based on their scores.
- Displays players based on their index (odd/even).
- Merges and displays lists of Indian players.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.