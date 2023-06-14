import * as yup from "yup";

export const initialValues = {
  id: "",
  password: "",
  email: "",
};

export const validation = yup.object().shape({
  id: yup
    .string()
    .required("required")
    .min(5, "사용하실 수 없는 아이디 입니다.")
    .max(10, "사용하실 수 없는 아이디 입니다."),
  password: yup.string().required("required"),
  email: yup.string().required("required"),
});
