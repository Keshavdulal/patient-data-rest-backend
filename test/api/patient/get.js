import { expect } from "chai";
import request from "supertest"; // this will make api calls

import { API, MESSAGE } from "../../../constants.js";
import server from "../../../index.js"; // path to file that we are testing

describe(`GET ${API.PATIENT_INFO}`, () => {
  it(`OK, Testing GET ${API.PATIENT_INFO}`, (done) => {
    request(server)
      .get(API.PATIENT_INFO)
      .then((res) => {
        const body = res.body;
        // console.log("Response.body=>", body);

        // assertions
        expect(body).to.be.a("array");
        expect(body).to.have.lengthOf.above(0);
        // end of tests

        done();
      })
      .catch((err) => done(err));
  });

  it(`OK, Testing GET ${API.PATIENT_INFO}/:1`, (done) => {
    request(server)
      .get(`${API.PATIENT_INFO}/:1`)
      .then((res) => {
        const body = res.body;
        // console.log("Response.body=>", body);

        // assertions
        expect(body).to.be.a("array");
        expect(body).to.have.lengthOf.above(0);
        // end of tests

        done();
      })
      .catch((err) => done(err));
  });
});
