import { Card, CardHeader, CardContent } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [values, setValues] = useState();
  useEffect(() => {
    axios.get(`${URI_POKEMON}+${URI_POKEMON}/1`).then(function (response) {
      // handle success
      console.log(response);
    });
  }, []);

  return (
    <>
      <h1>POKEMON APP</h1>

      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <Typography>POKEMON APP</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default App;
