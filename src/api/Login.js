import { Axios } from "./Axios";

export const AxiosLogin = async (data, callbackFunctions) => {
  const { navigateSuccess } = callbackFunctions;

  await Axios.post(`/api/auth/login`, {
    id: data.id,
    password: data.password,
  })
    .then((res) => {
      const token = res.data.accessToken;
      localStorage.setItem("token", token);
      navigateSuccess();
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
