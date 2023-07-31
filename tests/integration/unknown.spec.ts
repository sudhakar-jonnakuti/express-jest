import request from "supertest";
import App from "../../src/app";

describe("01. Integration : GET : /unknown", () => {
  it("01. Should return a 404 status", async () => {
    const res = await request(new App().getServer()).get("/api/unknown");
    expect(res.status).toBe(404);
  });
});
