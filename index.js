const express = require("express"); // core-library to run our server on top of nodejs

// Application Constants
const PORT_ADDR = process.env.PORT || 8000;
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
      remarks: "Okay",
    },
    {
      name: "Lucy Rose",
      age: 88,
      height: "5'11",
      address: "Winnipeg",
      contact_no: "+1 213-423-3579",
      blood_group: "AB+",
      remarks: "Good",
    },
  ],
  patientTest: [
    {
      id: 20,
      name: "John Doe",
      bloodPressure: "90/110",
      respiratoryRate: 90,
      heartBeatRate: 79,
    },
    {
      id: 21,
      name: "Lucy Rose",
      bloodPressure: "80/120",
      respiratoryRate: 90,
      heartBeatRate: 79,
    },
    {
      id: 22,
      name: "John Denver",
      bloodPressure: "85/150",
      respiratoryRate: 90,
      heartBeatRate: 79,
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

server.get("/patient-info", (request, response) => {
  response.send(DB.patientInfo);
});

// TODO: Aishwarya
//to send data to frontend to server we use post request
//passing callback function with request and response parameter
server.post("/patient-info", (request, response) => {
  //to add patient-info to database
  const data = request.body;
  //adding object to JSON array we use push method
  //push the patient info to our JSON array
  DB.patientInfo.push(data);
  response.send("Patient Info have been added.");
});

// TODO: Basil
// In the url you have to specify the ID of the patient
// eg url: 127.0.0.1:8000/patient-info/1
server.get("/patient-info/:id", (request, response) => {
  console.log("GET Specific Patient Info");
  response.send(DB.patientInfo);
});

// TODO: Shrijan
server.get("/patient-info", (request, response) => {
  console.log("GET -> /patient-info");
  response.send(DB.patientInfo);
});

// TODO: Justice
server.post("/patient-test", (request, response) => {
  //checks if patient id and name is specified
  if (request.body.id == null || request.body.name == null) {
    //gives an error message if id and name is not entered
    response.send({ error: "ID and Name are required" });
  } else {
    DB.patientTest.push({
      id: request.body.id,
      name: request.body.name,
      cbc: request.body.cbc,
      prt: request.body.prt,
      bmp: request.body.bmp,
    });

    //final response after entering new patient data
    response.send("Values inserted succesfully!");
  }
});

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
  console.log(`Server is running at:${PORT_ADDR}`);
});
