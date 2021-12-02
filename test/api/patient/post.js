import { expect } from "chai";
import request from "supertest"; // this will make api calls

import { API, MESSAGE } from "../../../constants.js";
import server from "../../../index.js"; // path to file that we are testing

describe(`POST ${API.PATIENT_INFO}`, () => {
  // if you want to do something before running the test eg: start db connection
  // before((done) => {});

  // if you want to do something after running the test eg: close db connection
  // after((done) => {});

  it(`OK, Testing POST ${API.PATIENT_INFO}`, (done) => {
    const payload = {
      name: "John Doe",
      age: 54,
      height: "5'8",
      address: "Vancouver",
      contact_no: "+1 442-223-4424",
      blood_group: "O+",
      remarks: "Okay",
    };

    request(server)
      .post(API.PATIENT_INFO)
      .send(payload)
      .then((res) => {
        const body = res.body;

        // assertions
        expect(body).to.contain.property("message");
        expect(body.message).to.be.a("string");
        // expect(body.message).to.be.a(MESSAGE.PATIENT_INFO_ADD_SUCCESS); // doesn't work
        // end of tests

        done();
      })
      .catch((err) => done(err));
  });
});
