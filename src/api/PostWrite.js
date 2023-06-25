import { Axios } from "./Axios";

export const AxiosPostWrite = async (data, callbackFunctions) => {
  const { navigateSuccess } = callbackFunctions;
  const token = localStorage.getItem("token");

  await Axios.post(
    `/api/posts`,
    {
      title: data.title,
      content: data.content,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
    .then((res) => {
      navigateSuccess();
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
