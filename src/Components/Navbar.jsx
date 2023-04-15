import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button colorScheme="green" onClick={() => navigate("/home")}>
        home
      </Button>
      <Button colorScheme="pink" onClick={() => navigate("/login")}>
        login
      </Button>
    </div>
  );
};

export default Navbar;
