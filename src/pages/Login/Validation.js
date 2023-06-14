import * as Yup from "yup";

export const initialValues = {
  id: "",
  password: "",
};

export const validation = {
  id: Yup.string().required("required").min(5, "").max(10, ""),
  password: Yup.string().required("required"),
};
