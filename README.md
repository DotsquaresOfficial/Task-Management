
# Task Management API

This is a RESTful API for managing tasks, built using Node.js, Express, and MySQL. The API supports operations such as creating, retrieving, updating, and deleting tasks. It follows a clean architecture and includes input validation, error handling, and rate limiting.

---

## Features

- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Task Data Structure**:
  - `task_id`: Auto-generated unique identifier.
  - `title`: String.
  - `description`: String.
  - `due_date`: Date/Time.
  - `status`: Enum (`pending`, `in-progress`, `completed`).
- **Validation**: Input validation using `Joi`.
- **Database**: MySQL for data persistence.
- **Rate Limiting**: Prevent abuse of API endpoints.
- **Clean Architecture**: Separation of concerns with controllers, services, repositories, and middlewares.

---

## Project Structure
