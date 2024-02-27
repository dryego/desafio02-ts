import { Center, ChakraProvider, Input, Box, Button } from "@chakra-ui/react";
import { login } from "./services/login";
import { Layout } from "./components/Layout";
import { LoginCard } from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <LoginCard username={""} password={""} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
