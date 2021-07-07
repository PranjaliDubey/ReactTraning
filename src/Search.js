import Cakelist from "./cakelist";

import React, { useState ,useEffect} from "react";

// console.log('Cake', Cake)

export default function SearchList() {
  let setStyle = { margin: "5px", padding: "2px" };
  // const data = [{ "name": "test1" }, { "name": "test2" }];

  const [count, setCount] = useState(30);

  useEffect(() => {
    // Update the document title using the browser API
  //  alert(`You clicked ${count} times`);
  },['30']);
  return (
 
    <div className="row justify-content-center">
      {Cakelist.map((d) => (
        
         <div className="card mt-3 ml-3" style={{ width: 18 + "rem" }}>
      
            <img
              style={{ height: 250 + "px" }}
              src={d.image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{d.name}</h5>
              <p className="card-text">{d.price} rs.</p>
              <a className="" href="_blank" className="btn btn-primary">
                Add to cart
              </a>
            </div>
  </div>
      ))}

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
