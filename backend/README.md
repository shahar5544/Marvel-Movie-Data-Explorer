# Marvel Movie Data Explorer - Backend

## Overview
This is the backend service for the Marvel Movie Data Explorer application. It provides APIs to fetch data related to Marvel movies, actors, and characters.

## Setup Instructions
1. Clone the repository.
2. Navigate to the `backend` directory.
3. Run `docker-compose up --build` to start the services.

## Technology Stack
- Node.js
- Express
- MongoDB
- Redis
- TypeScript
- Docker

## API Endpoints
- [GET] /api/moviesPerActor
- [GET] /api/actorsWithMultipleCharacters
- [GET] /api/charactersWithMultipleActors

## Assumptions and Design Decisions
- Used MongoDB for data storage.
- Implemented Redis for caching.
- Implemented basic logging using Winston.
- Used Docker for containerization.
