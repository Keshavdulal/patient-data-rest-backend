const API = {
  ROOT: "/",
  PATIENT_INFO: "/patient",
  PATIENT_INFO_BY_ID: "/patient/:id",
  PATIENT_TEST: "/patient/test",
  PATIENT_TEST_BY_ID: "/patient/test/:id", // unsure
};

const MESSAGE = {
  WELCOME: "Welcome to Patient-Data-Rest-Backend.",
  PATIENT_INFO_ADD_SUCCESS: "Patient has been added successfully",
  PATIENT_INFO_ADD_FAIL: "Failed to add Patient",
};

export { API, MESSAGE };
