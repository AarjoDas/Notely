# Notely

Notely is a MERN-stack application for tracking notes. It features a complete CRUD API, a modern frontend, and rate-limiting security.

## Features

* **Full CRUD**: The application allows users to create, read, update, and delete notes.
* **Rate Limiting**: Security middleware is powered by Upstash Redis to prevent API abuse.
* **Modern Frontend**: The interface is built with React 19, Vite, and Tailwind CSS for a responsive experience.
* **Production Ready**: The Express backend is configured to serve frontend static assets in a production environment.

## Tech Stack

* **Backend**: Uses Node.js, Express, MongoDB via Mongoose, and Upstash Redis.
* **Frontend**: Built using React 19, Vite, Tailwind CSS, DaisyUI, and Axios.

## API Endpoints

All endpoints are prefixed with `/api/notes`:

* **GET `/**`: Retrieves all notes from the database.
* **GET `/:id**`: Retrieves a single note by its unique identifier.
* **POST `/**`: Adds a new note to the tracking system.
* **PUT `/:id**`: Updates the content or details of an existing note.
* **DELETE `/:id**`: Permanently removes a note from the system.

## Setup and Installation

### Environment Variables

Create a `.env` file in the `back/` directory including `PORT`, `MONGO_URI`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, and `NODE_ENV`.

### Running Locally

1. **Install dependencies**: Execute `npm install` in both the `back/` and `front/` directories.
2. **Start Backend**: Use the `npm run dev` command within the `back/` folder.
3. **Start Frontend**: Use the `npm run dev` command within the `front/` folder.

Want to try it out for yourself? : [https://notely-nc44.onrender.com](https://notely-nc44.onrender.com)
