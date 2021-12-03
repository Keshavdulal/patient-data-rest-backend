const API = {
  ROOT: "/",
  PATIENT_INFO: "/patient",
  PATIENT_INFO_BY_ID: "/patient/:id",
  PATIENT_TEST: "/patient/test", //unsure
  PATIENT_TEST_BY_ID: "/patient/:id/test", 
};

const MESSAGE = {
  WELCOME: "Welcome to Patient-Data-Rest-Backend.",
  PATIENT_INFO_ADD_SUCCESS: "Patient has been added successfully",
  PATIENT_INFO_ADD_FAIL: "Failed to add Patient",
};

export { API, MESSAGE };
