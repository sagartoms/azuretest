let config = {}

config.host = process.env.HOST || "https://cosmosdbcm.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "KdfN8UjpGmmE7W2he25t1U8SvuxsZ1rvmDgLiRGEkwRavnBYEgcNkVi1x14W3tFjgfgWfnZrc84zz2BVeRlBUA==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;

