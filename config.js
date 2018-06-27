let config = {}

config.host = process.env.HOST || "https://cosmosdbcm.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "qncHJhnkoDABuC9fxUMxrpESJVJyMofMjgLxqVKEILarjQTCo0Y6n4PxW4SSh5UExX7NKJmlGPYbEs7Ue8xwiA==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;

