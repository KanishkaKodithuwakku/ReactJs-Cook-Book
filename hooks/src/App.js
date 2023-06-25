import React from "react";


const App = () =>{

const[count,setCount] = React.useState(0);

const incrementCount = () => setCount(count + 1);
const derementCount = () => setCount(count - 1);

const [visible , setVisible] = React.useState(false);


  const showHide = () => { 
    setVisible(!visible);
  }

  return (
    <div className="container">
      <div className="row">
        <div classsName="col-md-4 offset-md-4">
          <h1>{count}</h1>
          <button className="btn btn-primary" onClick={incrementCount}>
            Increment
          </button>

          <button className="btn btn-primary" onClick={derementCount}>
            Decrement
          </button>
        </div>
      </div>

      <div className="row mt-6">
        <div classsName="col-md-6">
          {visible && <div>Show hide </div>}

          <button className="btn btn-primary" onClick={showHide}>
            {visible ? 'Hide' : "Show"}
          </button>
        </div>
      </div>
    </div>
  );


}
export default App;
