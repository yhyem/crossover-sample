import { Axios } from "./Axios";
import { useNavigate } from "react-router-dom";

export const AxiosJoin = (data, callbackFunctions) => {
  //const { navigateSuccess } = callbackFunctions;
  const navigate = useNavigate();

  console.log(data);

  Axios.post(`/api/auth/register`, {
    id: data.id,
    password: data.password,
    email: data.email,
  })
    .then((res) => {
      navigate("/login");
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
