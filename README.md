# ScribeX

ScribeX is a full-stack notes application built using the MERN stack. It allows users to create, edit, delete, and manage notes through a clean and responsive interface.

## Live Demo

[https://scirbex.onrender.com/](https://scirbex.onrender.com/)

## Features

* Create, update, and delete notes
* Responsive design for mobile and desktop
* RESTful API architecture
* Rate limiting using Upstash Redis (10 requests / 20 seconds)

## Tech Stack

### Frontend

* React.js
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Other Tools

* Upstash Redis (Rate Limiting)
* Render (Deployment)

## Backend Architecture

The backend follows a modular structure:

* **Routes**: Handle API endpoints
* **Controllers**: Contain business logic
* **Models**: Define MongoDB schemas
* **Middleware**: Handle rate limiting and errors

Flow:
Client → Routes → Controllers → Models → Database

## API Endpoints

| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| GET    | /notes     | Get all notes  |
| GET    | /notes/:id | Get note by ID |
| POST   | /notes     | Create a note  |
| PUT    | /notes/:id | Update a note  |
| DELETE | /notes/:id | Delete a note  |

## Installation

1. Clone the repository:

```
git clone <your-repo-link>
cd scribex
```

2. Install dependencies:

```
cd server
npm install
```

3. Create a `.env` file in the server folder and add:

```
MONGO_URI=your_mongodb_uri
UPSTASH_REDIS_REST_URL=your_url
UPSTASH_REDIS_REST_TOKEN=your_token
```

4. Run the backend:

```
npm run dev
```

5. Run the frontend:

```
cd frontend
npm install
npm run dev
```

## What I Learned

* Structuring backend using MVC pattern
* Building RESTful APIs
* Implementing rate limiting using Redis
* Connecting frontend with backend APIs
* Deploying full-stack applications

## Future Improvements

* Add authentication (JWT)
* Add user-specific notes
* Improve UI/UX

## Author

Built by Om
