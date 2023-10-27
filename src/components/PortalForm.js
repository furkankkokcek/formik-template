import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckbox";
import { Link } from "react-router-dom";

function PortalForm() {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          university: "red",
          isAccepted: false,
        }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="User Name"
              name="username"
              type="text"
              placeholder="Please enter your user name."
            ></CustomInput>
            <CustomSelect
              label="University"
              name="university"
              placeholder="Please select your university"
            >
              <option value="">Please select your university.</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="odtü">ODTÜ</option>
              <option value="hacettepe">Hacettepe Üniversitesi</option>
              <option value="itü">İTÜ</option>
            </CustomSelect>
            <CustomCheckBox type="checkbox" name="isAccepted"></CustomCheckBox>
            <button disabled={isSubmitting} type="submit">
              Save
            </button>
            <Link className="formLink" to="/">
              Go to main page
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
