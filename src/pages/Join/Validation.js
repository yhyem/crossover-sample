import * as yup from "yup";

export const initialValues = {
  id: "",
  password: "",
  email: "",
};

export const validation = yup.object().shape({
  id: yup
    .string()
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/, "사용하실 수 없는 아이디 입니다.")
    .min(5, "사용하실 수 없는 아이디 입니다.")
    .max(10, "사용하실 수 없는 아이디 입니다."),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).+$/,
      "사용하실 수 없는 비밀번호 입니다."
    )
    .min(8, "사용하실 수 없는 비밀번호 입니다.")
    .max(14, "사용하실 수 없는 비밀번호 입니다."),
  email: yup.string().email("이메일 형식에 맞지 않습니다."),
});
