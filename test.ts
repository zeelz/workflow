import app from "./index"
import request from "supertest"

describe("Test suite", () => {
    it("/test to return 200", async () => {
        const res = await request(app).get("/test")
        console.log("Response object:", res.body);
        expect(res.statusCode).toEqual(200)
    })
})