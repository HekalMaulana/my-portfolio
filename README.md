# Portfolio Website - Muhammad Hekal Maulana

This project contains a personal portfolio website built with React.js and Tailwind CSS for the frontend, and Node.js with Express.js for the backend.

## Table of Contents

-   [Frontend](#frontend)
-   [Backend](#backend)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Frontend Development](#frontend-development)
    -   [Building the Frontend](#building-the-frontend)
    -   [Running the Backend Server](#running-the-backend-server)

## Frontend

-   Built with React.js and Tailwind CSS.
-   Single-page application with a minimalist, modern design and dark theme.
-   Implements smooth scrolling for navigation.
-   Responsive design for various screen sizes.

## Backend

-   Built with Node.js and Express.js.
-   Serves the static built files of the React frontend application.

## Installation

1.  **Clone the repository:**

    ```shell
    git clone <repository-url>
    cd portfolio-hekal
    ```

2.  **Install dependencies:**

    -   **Frontend (React):**

        ```shell
        cd frontend
        npm install
        ```

    -   **Backend (Node.js):**

        ```shell
        cd ../backend
        npm install express
        ```

## Usage

### Frontend Development

1.  **Navigate to the frontend directory:**

    ```shell
    cd frontend
    ```

2.  **Start the development server:**

    ```shell
    npm start
    ```

    This will open the React application in your default web browser.

### Building the Frontend

1.  **Navigate to the frontend directory:**

    ```shell
    cd frontend
    ```

2.  **Build the application:**

    ```shell
    npm run build
    ```

    This will create a `build` directory containing the optimized production build of the React application.

### Running the Backend Server

1.  **Navigate to the backend directory:**

    ```shell
    cd backend
    ```

2.  **Start the server:**

    ```shell
    node server.js
    ```

    This will start the Node.js server, which will serve the static files from the `build` directory (created in the previous step) of the React application.

    **Note:** You may need to configure the `server.js` file to point to the correct path of your `build` directory.  The provided `server.js` file in this project assumes the `build` folder is located in the parent directory of the `backend` folder.

