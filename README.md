# Marvel Movie Data Explorer

## Overview
This is a full-stack application that fetches and processes data from the TMDB (The Movie Database) API to answer specific questions about Marvel movies, actors, and characters.

## Setup Instructions
1. Clone the repository
2. Install dependencies
3. Set up environment variables
4. Run the application

## Technology Stack
- Backend: Node.js, Express, MongoDB, Redis, TypeScript, Docker, Graphql
- Frontend: React, TypeScript, Axios, IndexedDB

## Features
- View Movies Per Actor
- View Actors with Multiple Characters
- View Characters with Multiple Actors

## Assumptions and Design Decisions
- Used MongoDB for data storage.
- Implemented Redis for caching.
- Implemented basic logging using Winston.
- Used Docker for containerization.

## API Endpoints

- `/api/movies-per-actor`
- `/api/actors-with-multiple-characters`
- `/api/characters-with-multiple-actors`
