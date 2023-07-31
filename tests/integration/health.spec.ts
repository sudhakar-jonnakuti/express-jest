import request from "supertest";
import App from "../../src/app";

describe("01. Integration : GET : /health", () => {
  it("01. Should return a 200 status", async () => {
    const res = await request(new App().getServer()).get("/api/health");
    expect(res.status).toBe(200);
  });
});
