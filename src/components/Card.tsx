import { Box, Center, Button } from "@chakra-ui/react";
import { useState } from "react";

interface ICard {
  username: string;
  password: string;
}

export const LoginCard = ({ username, password }: ICard) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleButtonClick = () => {
    alert(`Seja bem vindo ${formData.username}`);
  };

  return (
    <div>
      <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <form onSubmit={handleSubmit}>
            <label>Usuário: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <br />
            <label>Senha: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <br />
            <Center>
              <Button
                type="submit"
                colorScheme="teal"
                size="sm"
                width="100%"
                marginTop="5px"
                onClick={handleButtonClick}
              >
                Entrar
              </Button>
            </Center>
          </form>
        </Box>
      </Box>
    </div>
  );
};
