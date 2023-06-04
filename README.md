# FlavorQuest Backend

## API Reference

### User Management

#### (GET, POST)Retrieve a list of users or create a new user.

```http
  GET, POST /api/users
```

#### (GET, PUT, DELETE): Retrieve, update, or delete a specific user by ID.

```http
  GET, PUT, DELETE /api/users/:id
```

### Ingredient Management

#### (GET): Retrieve a list of available ingredients.

```http
  GET /api/ingredients
```

#### (GET): Retrieve a specific ingredient by ID.

```http
  GET /api/ingredients/:id
```

### Recipe Search:

#### (GET): Retrieve a list of recipes based on user-selected ingredients or keywords.

```http
  GET /api/recipes?ingredients=ingredient1,ingredient2,ingredient3
```

#### (GET): Retrieve a specific recipe by ID.

```http
  GET /api/recipes/:id
```

### Favorites and Collections::

#### (GET, POST): Retrieve a user's favorite recipes or add a recipe to favorites.

```http
   /api/users/:userId/favorites
```

#### (GET, POST): Retrieve a user's recipe collections or create a new collection.

```http
   /api/users/:userId/collections
```

#### (GET, PUT, DELETE): Retrieve, update, or delete a specific collection.

```http
   /api/users/:userId/collections/:collectionId
```

### Authentication and Authorization:

#### (POST): Register a new user.

```http
   /api/auth/register
```

#### (POST): Authenticate and generate an access token for a user.

```http
  /api/auth/login
```

#### (POST): Log out the current user.

```http
  /api/auth/logout
```
