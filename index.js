import express from "express"; // core-library to run our server on top of nodejs
import { API, MESSAGE } from "./constants.js";

// Application Constants
const PORT_ADDR = process.env.PORT || 8000;
const LOCALHOST = "127.0.0.1";

// Local Database - prepopulated
const DB = {
  patientInfo: [
    {
      id: 1,
      name: "John Doe",
      age: 54,
      height: "5'8",
      address: "Vancouver",
      contact_no: "+1 442-223-4424",
      blood_group: "O+",
      remarks: "Okay",
    },
    {
      id: 2,
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
    {
      id: 23,
      name: "John Legend",
      bloodPressure: "85/150",
      respiratoryRate: 60,
      heartBeatRate: 79,
    },
    {
      id: 24,
      name: "John Baker",
      bloodPressure: "85/150",
      respiratoryRate: 91,
      heartBeatRate: 48,
    },
  ],
};

// create an instance of express to run your app or server;
const server = express();

// parse string back to json
server.use(express.json());

// Endpoints

// Home endpoint - Request type GET
server.get(API.ROOT, (request, response) => {
  response.json({
    message: MESSAGE?.WELCOME,
  });
});

/**
 * General Information on Patients
 *  Name, Age, Height, Weight, Address, Contact No, Emergency Contact No, Blood Group, Remarks
 */

// TODO: Aishwarya
//to send data to frontend to server we use post request
//passing callback function with request and response parameter
server.post(API.PATIENT_INFO, (request, response) => {
  console.log(`POST -> ${API.PATIENT_INFO}`);
  //to add patient-info to database
  const data = request.body;
  //adding object to JSON array we use push method
  //push the patient info to our JSON array
  DB.patientInfo.push(data);
  response.send({ message: MESSAGE?.PATIENT_INFO_ADD_SUCCESS });
});

// TODO: Basil
// In the url you have to specify the ID of the patient
// eg url: 127.0.0.1:8000/patient-info/1
server.get(API.PATIENT_INFO_BY_ID, (request, response) => {
  console.log(`GET -> ${API.PATIENT_INFO_BY_ID}`);
  // get patient info from Local DataBase (Array)
  // Use filter method to narrow down the search

  const requestedPatientId = request.params.id;

  const requestedPatientdata = DB?.patientInfo.filter(
    (patient) => requestedPatientId == patient.id
  );

  if (requestedPatientdata?.length) {
    response.send([requestedPatientdata[0]]);
  } else {
    response.send({ error: "Not found" });
  }
});

// TODO: Shrijan
// Gets all the data in the database
server.get(API.PATIENT_INFO, (request, response) => {
  console.log(`GET -> ${API.PATIENT_INFO}`);
  response.send(DB.patientInfo);
});

// TODO: Justice
server.post(API.PATIENT_TEST_BY_ID, (request, response) => {
  //Checks if patient id is provided
  //Might need to add logic where the user exists is checked.

  if (request.params.id == null) {
    //gives an error message if id and name is not entered
    response.send({ error: "ID" });
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
server.get(API.PATIENT_TEST_BY_ID, (request, response) => {
  console.log(`GET -> ${API.PATIENT_TEST_BY_ID}`);

  const requestedPatientId = request.params.id;

  // get patient info from Local DataBase (Array)
  // Use filter method to narrow down the search
  const requestedPatientTest = DB?.patientTest.filter(
    (patient) => requestedPatientId == patient.id
  );

  console.log(requestedPatientTest);

  if (requestedPatientTest?.length) {
    response.send([requestedPatientTest[0]]);
  } else {
    response.send({ error: "Not found" });
  }
});

// get all patient's medical records
server.get(API.PATIENT_TEST, (request, response) => {
  console.log(`GET -> ${API.API.PATIENT_TEST}`);

  response.send(DB?.patientTest);
});

server.listen(PORT_ADDR, () => {
  console.log(`Server is running at:${PORT_ADDR}`);
});

export default server;
