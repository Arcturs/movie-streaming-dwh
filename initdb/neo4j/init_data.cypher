CREATE (:Movie {id: "test-1", title: "test"});

CREATE (:Actor {id: "test-1", name: "Test Actor"});

MATCH (a:Actor {id: "test-1"}), (m:Movie {id: "test-1"})
CREATE (a)-[:ACTED_IN]->(m);

CREATE (:Director {id: "test-1", name: "Test Director"});

MATCH (d:Director {id: "test-1"}), (m:Movie {id: "test-1"})
CREATE (d)-[:DIRECTED]->(m);

CREATE (:Genre {name: "Adventure"}), (:Genre {name: "Detective"});

MATCH (g:Genre {name: "Adventure"}), (m:Movie {id: "test-1"})
CREATE (m)-[:HAS_GENRE]->(g);
MATCH (g:Genre {name: "Detective"}), (m:Movie {id: "test-1"})
CREATE (m)-[:HAS_GENRE]->(g);

CREATE (:User {id: "test-1", name: "test"});

MATCH (u:User {id: "test-1"}), (m:Movie {id: "test-1"})
CREATE (u)-[:LIKED]->(m);