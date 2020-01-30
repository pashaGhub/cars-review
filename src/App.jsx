import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SingleCard } from "./components/SingleCard";
import { Button } from "react-bootstrap";

const App = () => {
  const [cars, setCars] = useState([]);
  const proxyurl = "https://cors-anywhere.herokuapp.com/"; // used to enables cross-origin API requests

  async function apiCall() {
    const res = await fetch(
      proxyurl + "https://backend.daviva.lt/API/InformacijaTestui",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (res.ok) {
      const resJson = await res.json();
      setCars([...cars, resJson]);
    } else {
      console.log(res);
    }
  }

  return (
    <div className="Main-container">
      <div className="Card-container">
        {typeof cars === "undefined" ||
          (cars.length === 0 && <h2>Pridėkite automobilį</h2>)}
        {cars.map((car, ind) => (
          <SingleCard key={ind} car={car} />
        ))}
      </div>
      <Button onClick={() => apiCall()} variant="primary">
        Pridėti
      </Button>
    </div>
  );
};

export default App;
