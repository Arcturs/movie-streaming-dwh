CREATE KEYSPACE IF NOT EXISTS ms_dwh WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

CREATE TABLE ms_dwh.viewing_events (
    user_id TEXT,
    movie_id TEXT,
    event_time TIMESTAMP,
    event_type TEXT,
    device_type TEXT,
    PRIMARY KEY ((user_id, movie_id), event_time)
) WITH CLUSTERING ORDER BY (event_time DESC);

INSERT INTO ms_dwh.viewing_events
(user_id, movie_id, event_time, event_type, device_type)
VALUES ('test-1', 'test-1', toTimeStamp(now()), 'start', 'web');