# ScribeX

ScribeX is a full-stack notes application built using the MERN stack. It allows users to create, edit, delete, and manage notes through a clean and responsive interface.

---

## Live Demo

[https://scirbex.onrender.com/](https://scirbex.onrender.com/)

## Why I Built This

I built ScribeX to move beyond basic CRUD applications and understand how to structure a scalable backend using controllers, routes, and middleware. The goal was to focus not just on features, but on clean architecture and real-world backend practices.

---

## Features

* Create, update, and delete notes
* View all notes sorted by latest
* Responsive design for mobile and desktop
* RESTful API architecture
* Rate limiting using Upstash Redis (10 requests / 20 seconds)

---

## Screenshots

### Home Page

<img width="1920" height="1020" alt="Screenshot 2026-04-16 095330" src="https://github.com/user-attachments/assets/24c66db8-8e09-4ebd-8bc4-8b7f574f13a0" />

### Create / Edit Note

<img width="1920" height="1020" alt="Screenshot 2026-04-16 095409" src="https://github.com/user-attachments/assets/5cdc7818-7038-4759-a315-4d571a7ca58e" />

### Backend Architecture

<img width="1536" height="1024" alt="scribeX" src="https://github.com/user-attachments/assets/95ebf908-80ee-4aa6-a1e2-78c5b1a210aa" />

---

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

---

## Backend Architecture

The backend follows a modular and scalable structure:

* **Routes** → Define API endpoints
* **Controllers** → Handle business logic
* **Models** → Define MongoDB schemas
* **Middleware** → Handle rate limiting and request flow

### Flow

Client → Routes → Controllers → Models → Database

---

## Project Structure

```
server/
 ├── src/
 │   ├── controllers/
 │   ├── models/
 │   ├── routes/
 │   ├── middleware/
 ├── server.js
 ├── package.json
```

---

## API Endpoints

| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| GET    | /notes     | Get all notes  |
| GET    | /notes/:id | Get note by ID |
| POST   | /notes     | Create a note  |
| PUT    | /notes/:id | Update a note  |
| DELETE | /notes/:id | Delete a note  |

---

## Installation

1. Clone the repository:

```
git clone <your-repo-link>
cd scribex
```

2. Install backend dependencies:

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

Make sure to add your own MongoDB and Upstash credentials before running the project.

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

---

## What I Learned

* Structuring backend using MVC pattern
* Writing clean and maintainable API logic
* Implementing rate limiting using Redis
* Connecting frontend with backend APIs
* Deploying full-stack applications

---

## Future Improvements

* Add authentication (JWT)
* User-specific notes
* Better UI/UX improvements

---

## Author

Built by Om
