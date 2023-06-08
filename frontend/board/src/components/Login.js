import { TOKEN_URL, DEFAULT_PAGE } from "../constants/constants";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import JWTDecoder from "../functions/JWTDecoder";
import useRequest from "../hooks/useRequest";
import useAuth from "../hooks/useAuth";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import Message from "../common/Message";

import "../styles/sign-in.css";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { errMsg, errors, post, isLoading, isSuccess } = useRequest(TOKEN_URL);
  const from = location.state?.from?.pathname || DEFAULT_PAGE;

  const [log, setLog] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = ({ currentTarget: input }) => {
    const newLog = { ...log };
    if (input.type == "checkbox") {
      newLog[input.name] = !newLog[input.name];
    } else {
      newLog[input.name] = input.value;
    }
    setLog(newLog);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await post(log);
    if (Object.keys(errors).length !== 0) return;

    const accessToken = data.access;
    const refreshToken = data.refresh;
    const payload = JWTDecoder(accessToken);
    const roles = [payload.role];
    setAuth({ ...log, roles, accessToken });
    if (log.remember) window.localStorage.setItem("auth", JSON.stringify({ username: log.username, roles, accessToken, refreshToken }));
    setLog({
      username: "",
      password: "",
    });
    console.log("*****", isSuccess);
    navigate(from, { replace: true });
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <Input name="username" type="text" value={log.username} placeholder="Myname" label="Username" onChange={handleChange} error={errors.username} />
        <Input name="password" type="password" value={log.password} placeholder="Password" label="Password" onChange={handleChange} error={errors.password} />
        <Checkbox name="remember" label="Remember me" checked={log.remember} onChange={handleChange} error={errors.remember} />
        {!isLoading ? (
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
        ) : (
          <button className="btn btn-primary w-100 py-2" type="button" disabled="">
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
        )}

        {errMsg && <Message level={"error"}>{errMsg}</Message>}
      </form>
    </main>
  );
};

export default Login;
