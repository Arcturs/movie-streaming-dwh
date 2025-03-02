db = db.getSiblingDB("ms_dwh");

db.createCollection("movie_collection");
db.movie_collection.insertMany([
    {
        _id: "test-1",
        title: "test",
        release_date: "2020-07-07",
        description: "test",
        duration: 120,
        genres: ["Adventure", "Detective"],
        director: "Test Director",
        actors: ["Test Actor"],
        country: "USA",
        subtitles: ["eng", "rus"],
        audio: ["rus", "eng"],
        nominations: ["Oscar Best Film 2021"],
        awards: ["Oscar Best Film 2021"],
        interesting_facts: ["fact 1", "fact 2"]
    }
]);

db.createCollection("user_collection");
db.user_collection.insertMany([
    {
        _id: "test-1",
        name: "test",
        email: "test@gmail.com",
        subscription: "true",
        favourite_movies: ["test"],
        surname: "test",
        birth_date: "2001-06-04",
        created_at: "2021-08-12 13:38:35.340",
        country: "India",
        phone: "+79207639738"
    }
]);

db.createCollection("actor_collection");
db.actor_collection.insertMany([
    {
        _id: "test-1",
        name: "Test Actor",
        starred_movies: ["test"],
        birth_date: "1998-09-12",
        country: "Russia"
    }
]);

db.createCollection("director_collection");
db.director_collection.insertMany([
    {
        _id: "test-1",
        name: "Test Director",
        directed_movies: ["test"],
        nominations: ["nomination1"],
        birth_date: "1998-09-12",
        country: "Russia"
    }
]);