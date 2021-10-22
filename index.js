const express = require("express"); // core-library to run our server on top of nodejs

// Application Constants
const PORT_ADDR = 8000;
const LOCALHOST = "127.0.0.1";

// Local Database - prepopulated
const DB = {
  patientInfo: [
  {
    name: "John Doe",
    age: 54,
    height: "5'8",
    address: "Vancouver",
    contact_no: "+1 442-223-4424",
    blood_group: "O+",
    remarks: "Okay"
  },
  {
    name: "Lucy Rose",
    age: 88,
    height: "5'11",
    address: "Winnipeg",
    contact_no: "+1 213-423-3579",
    blood_group: "AB+",
    remarks: "Good"
  }

],
  patientTest: [
    {
      id: 20,
      name: "John Doe",
      // todo: add more attributes here
    },
    {
      id: 21,
      name: "Lucy Rose",
      // todo: add more attributes here
    },
    {
      id: 22,
      name: "John Denver",
      // todo: add more attributes here
    },
  ],
};

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
server.get("/patient-info-all", (request, response) => {
  console.log("GET -> /patient-info-all/")
  response.send(DB.patientInfo)

  });

// TODO: Justice
server.post("/patient-test", (request, response) => {});

// TODO: Keshav
server.get("/patient-test/:id", (request, response) => {
  console.log("GET -> /patient-test/:id");

  const requestedPatientId = request.params.id;

  // get patient info from Local DataBase (Array)
  // Use filter method to narrow down the search
  const requestedPatientTest = DB?.patientTest.filter(
    (patient) => requestedPatientId == patient.id
  );

  console.log(requestedPatientTest);

  if (requestedPatientTest?.length) {
    response.send(requestedPatientTest[0]);
  } else {
    response.send({ error: "Not found" });
  }
});

server.listen(PORT_ADDR, () => {
  console.log(`Server is running at ${LOCALHOST}:${PORT_ADDR}`);
  // console.log(`Following routes are available: `);
});
