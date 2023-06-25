import { Axios } from "./Axios";

export const AxiosPost = async (id, callbackFunctions) => {
  const { getDataSuccess } = callbackFunctions;
  const token = localStorage.getItem("token");

  await Axios.get(`/api/posts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      getDataSuccess(res.data);
    })
    .catch((error) => {
      console.log(error);
      error.response.data.message.map((message) => alert(message));
    });
};
