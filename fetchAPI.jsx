import { useState, useEffect } from "react";
import axios from "axios";

//copy the code and put it in code sandbox for reference


export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return(

    <div>
    {data.map((datum) => {
      return <h1>{`Name : ${datum.name}`}</h1>;
    })}
  </div>
  )
}
