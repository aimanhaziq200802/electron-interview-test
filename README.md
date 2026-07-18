# Angular Dashboard Interview Test

![AEM Enersol](http://i0.wp.com/aemenersol.com/wp-content/uploads/2015/12/Logo-AEM-for-MegaProject-Final.png?fit=290%2C129)

A dashboard application built using Angular 14 as part of the AEM Enersol technical assessment.

The application consists of two main modules:

- Sign In
- Dashboard

The project consumes REST APIs for authentication and dashboard data retrieval.

---

## Tech Stack

- Angular 14
- Angular CLI 14
- TypeScript
- Tailwind CSS
- Chart.js
- RxJS
- NPM
- Git

---

## Features

### Authentication

- User login using username and password
- Reactive form validation
- Bearer token authentication
- Protected routes using Angular Route Guards
- Automatic redirect:
    - Unauthenticated users → Login page
    - Authenticated users → Dashboard page

### Dashboard

- Display dashboard overview data
- Doughnut chart visualization
- Bar chart visualization
- User table listing
- Responsive table with horizontal scrolling support
- Logout functionality

---

## Project Setup

### Requirements

Ensure the following are installed:

- Node.js (v14 recommended)
- Angular CLI v14

Check versions:

```bash
node -v
npm -v
ng version
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd interview-test
```

Install dependencies:

```bash
npm install
```

---

## Development Server

Run the application:

```bash
npm start
```

or

```bash
ng serve
```

Application will be available at:

```
http://localhost:4200
```

---

## Login Credentials

Use the following credentials:

```
Username:
user@aemenersol.com

Password:
Test@123
```

---

## API Configuration

API base URL is configured inside:

```
src/environments/environment.ts
```

Current API:

```
http://test-demo.aemenersol.com
```

---

## API Endpoints

### Login

```
POST /api/account/login
```

Request:

```json
{
    "username": "user@aemenersol.com",
    "password": "Test@123"
}
```

Response:

```
Bearer Token
```

The token is stored locally and attached to authenticated API requests.

---

### Dashboard

```
GET /api/dashboard
```

Response:

```json
{
    "chartDonut": [],
    "chartBar": [],
    "tableUsers": []
}
```

---

## Project Structure

```
src
├── app
│   ├── core
│   │   ├── guards
│   │   ├── interceptors
│   │   └── services
│   │
│   ├── layouts
│   │   ├── auth-layout
│   │   └── admin-layout
│   │
│   └── features
│       ├── authentication
│       └── dashboard
│
├── assets
└── environments
```

---

## Code Quality

Implemented:

- ESLint
- Prettier
- Angular recommended lint rules
- Consistent formatting
- Component-based architecture
- Service-based API communication

Run lint:

```bash
npm run lint
```

Fix lint issues:

```bash
npm run lint -- --fix
```

---

## Build

Generate production build:

```bash
npm run build
```

Output:

```
dist/
```

---

## Authentication Flow

```
User
 |
 v
Login Page
 |
 | Successful Login
 v
Store Bearer Token
 |
 v
Dashboard
 |
 | API Request
 v
Authorization Header
```

---

## Notes

- Dashboard routes are protected using Angular Route Guards.
- API calls requiring authentication automatically include the Bearer Token.
- Responsive UI is implemented for different screen sizes.
