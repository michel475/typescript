import React from "react";


import styled  from 'styled-components'
import { Layout } from './components/Layout'
import { Card } from './components/Card'
import { Cabecalho } from './components/Cabecalho/Cabecalho'
import { Rodape } from './components/Rodape'
//import { Provider } from "@/components/ui/provider"
import { Box, Button, Center, ChakraProvider, defaultSystem, Input, Spacer } from "@chakra-ui/react";
import { login } from "./services/login";

const xox = styled.div`
  background-color: orange;
  border-radius:25px;
  padding-left:15px
`

const estilizacao = styled.div`
    background-color: yellow;
    border-radius: 30px;
`

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Card />
    </ChakraProvider>
  );
}

export default App;
