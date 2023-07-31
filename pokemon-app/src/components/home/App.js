import { Card, CardHeader, CardContent , Typography} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [values, setValues] = useState();
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(function (response) {
      // handle success
      console.log(response);
      setValues(response)
    });
  }, []);



  return (
    <>
    {dignidad.map((option) => (
      
      ))}
    </>
  );
};

export default App;
