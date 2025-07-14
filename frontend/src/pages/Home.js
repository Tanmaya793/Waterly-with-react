import React, { useEffect, useState } from "react";

function Home() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/info")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <section className="hero">
      <h2>{info ? info.project : "Loading..."}</h2>
      <p>{info ? info.description : "Connecting to Flask backend..."}</p>
    </section>
  );
}

export default Home;
