import { Axios } from "./Axios";

export const AxiosJoin = async (data, callbackFunctions) => {
  const { navigateSuccess } = callbackFunctions;

  await Axios.post(`/api/auth/register`, {
    id: data.id,
    password: data.password,
    email: data.email,
  })
    .then((res) => {
      navigateSuccess();
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
