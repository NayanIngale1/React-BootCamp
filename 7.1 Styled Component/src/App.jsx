import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./Component/Button";
import { Flex } from "./Component/Flex";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Flex>
        
        <Button type={"primary"}>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type={"dashed"}>Dashed Button</Button>
        <Button type={"text"}>Text Button</Button>
        <Button type={"link"}>Link Button</Button>
      </Flex>
     
    </div>
  );
}

export default App;
