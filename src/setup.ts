import { setupWorker, rest } from "msw";
import { faker } from "@faker-js/faker";
const worker = setupWorker(
  rest.get("/users", async (req, res, ctx) => {
    const users = Array.from({ length: 400 }, (v, i) => ({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      age: Math.ceil(Math.random() * 100),
      jobTitle: faker.name.jobTitle(),
      jobType: faker.name.jobType(),
      sex: faker.name.sex(),
      salary: 20000 + Math.ceil(Math.random() * 80000),
    }));
    return res(ctx.json(users));
  })
);
worker.start();
