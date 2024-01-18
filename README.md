## API Endpoints

### 1. Create a new user

#### `POST /api/users`

Creates a new user and adds them to the system. Requires a JSON payload with the following fields:

- `firstname` (string): First name of the user.
- `lastname` (string): Last name of the user.
- `email` (string): Email address of the user.
- `phone` (string): Phone number of the user.
- `plan` (string): Subscription plan for the user (e.g., "basic", "premium").

Example Request:

{ "firstname": "John",
"lastname": "Doe",
"email": "john.doe@example.com",
"phone": "123-456-7890",
"plan": "basic" } 

2. Get all users
GET /api/users

Retrieves a list of all users in the system.
GET /api/users Retrieves a list of all users in the system. 

4. Get a specific user GET /api/users/:userEmail
