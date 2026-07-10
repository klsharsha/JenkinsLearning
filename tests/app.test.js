const request = require("supertest");
const app = require("../src/app");


describe("Express API Tests",()=>{


    test("GET / should return message", async ()=>{


        const response =
            await request(app)
            .get("/");


        expect(response.statusCode)
        .toBe(200);


        expect(response.body.message)
        .toBe(
            "Jenkins Express Backend Running"
        );


    });

    test("GET /version should return deployment details", async()=>{

        const response = await request(app)
            .get("/version");


        expect(response.statusCode)
            .toBe(200);


        expect(response.body.version)
            .toBe("2.0");


        expect(response.body.deployedBy)
            .toBe("Jenkins + Docker + AWS EC2");

    });



    test("GET /health should return UP",async ()=>{


        const response =
            await request(app)
            .get("/health");


        expect(response.statusCode)
        .toBe(200);


        expect(response.body.status)
        .toBe("UP");


    });



    test("GET /users should return users",async ()=>{


        const response =
            await request(app)
            .get("/users");


        expect(response.statusCode)
        .toBe(200);


        expect(response.body.length)
        .toBe(2);


    });



});