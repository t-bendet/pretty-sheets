import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import MockApi from "../apis/MockApi";

const Register = ({ data, setIsRegisterd }) => {
  const [formData, setFormData] = useState(null);
  const completeRegister = async () => {
    const registrationData = {
      ...formData,
      googleId: data.RR,
      registerDate: new Date(),
    };
    await MockApi.post("/clients", { ...registrationData });
    setIsRegisterd(true);
    // TODO return to previous page(history?....)
  };
  useEffect(() => {
    if (formData) {
      completeRegister();
    } else {
      console.log("no form data");
    }
  }, [formData]);
  return (
    <div>
      <div className="ui medium circular image">
        <img src={data.WI}></img>
      </div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          firstName: data.BT,
          lastName: data.xR,
          email: data.At,
          yearlyGoal: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          setFormData(values);
        }}
      >
        <Form className="ui form">
          <div className="field">
            <label htmlFor="firstName">First Name</label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Jane"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="yearlyGoal">yearlyGoal</label>
            <Field
              id="yearlyGoal"
              type="number"
              name="yearlyGoal"
              placeholder="Dream Big"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;

//ToDO add Form Validation ... yup?
