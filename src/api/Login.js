import { Axios } from "./Axios";

export const AxiosLogin = (data, callbackFunctions) => {
  const { navigateSuccess } = callbackFunctions;

  Axios.post(`/api/auth/login`, {
    id: data.id,
    password: data.password,
  })
    .then((res) => {
      console.log(res.data);
      const token = res.data.accessToken;
      localStorage.setItem("token", token);

      alert("로그인에 성공했습니다.");
    })
    .then(navigateSuccess())
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
