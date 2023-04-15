import { Button, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Logindata, setLogindata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  console.log(isAuth);

  const handleLogin = () => {
    dispatch(LoginAction(Logindata));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/home");
    }
  }, [isAuth,navigate]);

  return (
    <form>
      <Text fontSize="6xl"> Login Pgae</Text>
      <br />
      <Input
        htmlSize={29}
        width="auto"
        placeholder="email"
        name="email"
        onChange={
          (e) => setLogindata({ ...Logindata, [e.target.name]: e.target.value }) //key value pair
        }
      />
      <br />
      <br />
      <Input
        type="password"
        htmlSize={29}
        width="auto"
        placeholder="password"
        name="password"
        onChange={
          (e) => setLogindata({ ...Logindata, [e.target.name]: e.target.value }) //key value pair
        }
      />
      <br />
      <br />
      <Button colorScheme="blue" onClick={handleLogin}>
        Button
      </Button>
    </form>
  );
};

export default Login;
