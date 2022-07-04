import React from "react";
import Counters from "./component/count/counters";
import Movies from "./component/movies/movies";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        {/* <Counters /> */}
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;
