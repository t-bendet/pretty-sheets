import React, { useState } from "react";
import { Formik, Field, Form } from "formik";

const Register = ({ data }) => {
  const [formData, setFormData] = useState(null);
  console.log(formData);
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
          alert(JSON.stringify(values, null, 2));
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
