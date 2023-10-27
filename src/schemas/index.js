import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address!")
    .required("Email is required"),
  age: yup
    .number()
    .positive("Please enter a positive age!")
    .integer("Please enter a whole number")
    .required("Age is required"),
  password: yup
    .string()
    .min(5, "Password is too short")
    .matches(passwordRules, {
      message:
        "Please enter at least one uppercase letter,lowercase letter and number!",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match!")
    .required("Please enter password again!"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username should be at least 3 characters!")
    .required("Username is required"),
  university: yup
    .string()
    .oneOf(["bogazici", "odtü", "hacettepe", "itü"], "Please select university")
    .required("Please select your university"),
  isAccepted: yup.boolean().oneOf([true], "Please accept the term of use"),
});
