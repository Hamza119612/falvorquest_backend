# FlavorQuest
##User Management:

/api/users (GET, POST): Retrieve a list of users or create a new user.
/api/users/:id (GET, PUT, DELETE): Retrieve, update, or delete a specific user by ID.
##Ingredient Management:

/api/ingredients (GET): Retrieve a list of available ingredients.
/api/ingredients/:id (GET): Retrieve a specific ingredient by ID.
##Recipe Search:

/api/recipes (GET): Retrieve a list of recipes based on user-selected ingredients or keywords.
/api/recipes/:id (GET): Retrieve a specific recipe by ID.
##Favorites and Collections:

/api/users/:userId/favorites (GET, POST): Retrieve a user's favorite recipes or add a recipe to favorites.
/api/users/:userId/collections (GET, POST): Retrieve a user's recipe collections or create a new collection.
/api/users/:userId/collections/:collectionId (GET, PUT, DELETE): Retrieve, update, or delete a specific collection.
##Authentication and Authorization:

/api/auth/register (POST): Register a new user.
/api/auth/login (POST): Authenticate and generate an access token for a user.
/api/auth/logout (POST): Log out the current user.
