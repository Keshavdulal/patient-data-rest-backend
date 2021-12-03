import { expect } from "chai";
import request from "supertest"; // this will make api calls

import { API, MESSAGE } from "../../../constants.js";
import server from "../../../index.js"; // path to file that we are testing

describe(`GET ${API.PATIENT_TEST_BY_ID}`, () => {
//   it(`OK, Testing GET ${API.PATIENT_TEST}`, (done) => {
//     request(server)
//       .get(API.PATIENT_TEST)
//       .then((res) => {
//         const body = res.body;
//         // console.log("Response.body=>", body);

//         // assertions
//         expect(body).to.be.a("array");
//         expect(body).to.have.lengthOf.above(0);
//         // end of tests

//         done();
//       })
//       .catch((err) => done(err));
//   });

  //Need to Confirm the Endpoint for 
  it(`OK, Testing GET ${API.PATIENT_TEST_BY_ID}`, (done) => {
    request(server)
      .get(`${API.PATIENT_TEST_BY_ID.replace(":id", 21)}`)
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
