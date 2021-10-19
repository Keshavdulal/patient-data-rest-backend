const express = require("express"); // core-library to run our server on top of nodejs

// Application Constants
const PORT_ADDR = 8000;
const LOCALHOST = "127.0.0.1";

// create an instance of express to run your app or server;
const server = express();

// parse string back to json
server.use(express.json());

// Endpoints

// Home endpoint - Request type GET
server.get("/", (request, response) => {
  response.json({
    message: "Welcome to Patient-Data-Rest-Backend.",
  });
});

/**
 * General Information on Patients
 *  Name, Age, Height, Weight, Address, Contact No, Emergency Contact No, Blood Group, Remarks
 */

// TODO: Aishwarya
server.post("/patient-info", (request, response) => {});

// TODO: Basil
server.get("/patient-info", (request, response) => {});

// TODO: Shrijan
server.get("/patient-info-all", (request, response) => {});

// TODO: Justice
server.post("/patient-test", (request, response) => {});

// TODO: Keshav
server.get("/patient-test", (request, response) => {});

server.listen(PORT_ADDR, () => {
  console.log(`Server is running at ${LOCALHOST}:${PORT_ADDR}`);
  console.log(`Following routes are available: \n/\ \n/\images`);
});
