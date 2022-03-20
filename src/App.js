import "./styles.css";
import React from "react";
import Card from "./componants/Card";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Card
        name="hamza"
        phone="06585416"
        img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fmostafa_ebrahem%2Factors-portrait%2F&psig=AOvVaw0tW4I7oC2cu1eA2YfiIm_i&ust=1647896713199000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiKneTL1fYCFQAAAAAdAAAAABAD"
      />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
export default App;
