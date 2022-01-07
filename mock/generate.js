const fs = require("fs");
const faker = require("faker");

const DATA_LIMIT = 1000;
const result = {
  data: [],
};

for (let i = 0; i < DATA_LIMIT; i++) {
  const item = {
    id: i,
    name: faker.company.companyName(),
    logo: faker.image.imageUrl(),
    city: faker.address.city(),
    specialities: faker.random.arrayElement([
      "plumbing",
      "excavation",
      "electrical",
    ]),
    lat: parseFloat(faker.address.latitude()),
    lng: parseFloat(faker.address.longitude()),
  };
  faker.seed(i);

  result.data.push(item);
}

const json = JSON.stringify(result);
fs.writeFile("./backend/data.json", json, "utf8", function (e) {
  if (e) throw e;
  console.log("complete");
});
