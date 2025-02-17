db = db.getSiblingDB("ms_dwh");

db.createCollection("movie_collection");
db.movie_collection.insertMany([
    {
        _id: "test-1",
        title: "test",
        release_date: "07-07-2020",
        description: "test",
        duration: 120,
        genres: ["Adventure", "Detective"],
        director: "Test Director",
        actors: ["Test Actor"]
    }
]);

db.createCollection("user_collection");
db.user_collection.insertMany([
    {
        _id: "test-1",
        name: "test",
        email: "test@gmail.com",
        subscription: "true",
        favourite_movies: ["test"]
    }
]);

db.createCollection("actor_collection");
db.actor_collection.insertMany([
    {
        _id: "test-1",
        name: "Test Actor",
        starred_movies: ["test"]
    }
]);

db.createCollection("director_collection");
db.director_collection.insertMany([
    {
        _id: "test-1",
        name: "Test Director",
        directed_movies: ["test"]
    }
]);