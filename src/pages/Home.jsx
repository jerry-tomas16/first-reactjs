import React from "react";
import CustomeButton from "./../components/CustomeButton";

function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <CustomeButton
        label="Click Me"
        onClick={() => alert("Button Clicked!")}
      />
    </div>
  );
}
export default Home;
