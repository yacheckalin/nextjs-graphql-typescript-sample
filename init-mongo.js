db = db.getSiblingDB("sample-list");

db.createUser({
  user: "test",
  pwd: "test",
  roles: [
    {
      role: "readWrite",
      db: "sample-list",
    },
  ],
});
