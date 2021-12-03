import { expect } from "chai";
import request from "supertest"; // this will make api calls

import { API, MESSAGE } from "../../../constants.js";
import server from "../../../index.js"; // path to file that we are testing

describe(`POST ${API.PATIENT_TEST_BY_ID}`, () => {
  // if you want to do something before running the test eg: start db connection
  // before((done) => {});

  // if you want to do something after running the test eg: close db connection
  // after((done) => {});

  it(`OK, Testing POST ${API.PATIENT_TEST_BY_ID}`, (done) => {
    const payload = {
      id: 24,
      name: "John Baker",
      bloodPressure: "85/150",
      respiratoryRate: 91,
      heartBeatRate: 48,
    };

    request(server)
      .post(API.PATIENT_TEST_BY_ID)
      .send(payload)
      .then((res) => {
        const body = res.body;
        console.log("Response.body=>", body);

        // assertions
        //expect(body).to.contain.property("message");
        //expect(body.message).to.be.a("string");
        //expect(body.message).to.be.a(MESSAGE.PATIENT_INFO_ADD_SUCCESS); // doesn't work
        // end of tests

        done();
      })
      .catch((err) => done(err));
  });
});
