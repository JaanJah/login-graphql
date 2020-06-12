# Usage

This document lists out all requests and responses this API offers.

Some endpoints require Bearer token in HTTP Authorization header.

Example:
```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU5MTk1MTI3NywiZXhwIjoxNjIzNTA4ODc3LCJpc3MiOiJsb2dpbi1ncmFwaHFsIn0.qP4w3grCn_NiUQDIRO968GaQ7_qDHUTyVPDBOZ7cZdY"
}
```

## List of queries and mutations:

### Mutations
1. [`signup` mutation](#signup)
2. [`login` mutation](#login)
3. [`deleteUser` mutation](#delete-user)
4. [`updateUser` mutation](#update-user)

### Queries
1. [`getUser` query](#get-user-info)

## Signup

Create a new account with `signup` mutation.

Request:
```graphql
mutation {
  signup(input: {
    username: "JohnDoe18" # Must be between 4 to 18 characters long
    password: "MyVerySecurePassword" # Must be atleast 8 characters long
    email: "johndoe@mail.com"
  }) {
    status
  }
}
```

Response:
```json
{
  "data": {
    "signup": {
      "status": true
    }
  }
}
```

## Login

Login to your account with this mutation.
This endpoint returns a JWT token which is required for some endpoints.

Request:
```graphql
mutation {
  login(input: {
    username: "JohnDoe18",
    password: "MyVerySecurePassword"
  }) {
    status
    token
  }
}
```

Response:
```json
{
  "data": {
    "login": {
      "status": true,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU5MTk1MTI3NywiZXhwIjoxNjIzNTA4ODc3LCJpc3MiOiJsb2dpbi1ncmFwaHFsIn0.qP4w3grCn_NiUQDIRO968GaQ7_qDHUTyVPDBOZ7cZdY"
    }
  }
}
```

## Get user info

You can request your logged in user info from this query.

This endpoint requires Bearer token in HTTP Authorization header.

Request:
```graphql
query {
  getUser {
    username
    email
  }
}
```

Response:
```json
{
  "data": {
    "getUser": {
      "username": "JohnDoe18",
      "email": "johndoe@mail.com"
    }
  }
}
```

## Delete user

You can delete your logged in user with this mutation.

This endpoint requires Bearer token in HTTP Authorization header.

Request:
```graphql
mutation {
  deleteUser {
    status
  }
}
```

Response:
```
{
  "data": {
    "deleteUser": {
      "status": true
    }
  }
}
```

## Update user

You can update your account information using `updateUser` mutation.

This endpoint required Bearer token in HTTP Authorization header.

Request:
```graphql
mutation {
  updateUser(input: {
    username: "JaneDoe18",
    password: "SecurePassword",
    newPassword: "MoreSecurePassword",
    email: "mynewemail@yahoo.com"
  }) {
    status
  }
}
```

Response:
```json
{
  "data": {
    "updateUser": {
      "status": true
    }
  }
}
```