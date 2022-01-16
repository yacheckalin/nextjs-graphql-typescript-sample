const fs = require("fs");
const faker = require("faker");

const DATA_LIMIT = 500;
const result = [];

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

  result.push(item);
}

const json = JSON.stringify(result);
fs.writeFile("./fixture/companies.json", json, "utf8", function (e) {
  if (e) throw e;
  console.log("complete");
});
