import Cakelist from "./cakelist";
import React, { useState, useEffect } from "react";

// console.log('Cake', Cake)

export default function SearchList(props) {
  const [search, setSearchValue] = useState("");
  const [cakeData, setCakeData] = useState(Cakelist);
  console.log("....search", props.serarchQuery);
  let searchFunction = (event) => {
    setSearchValue(event.target.value);
  };

  let cakeArray = Cakelist;

  let handleSearch = () => {
    if (search !== "") {
      const cakeArray = Cakelist.filter((el) =>
        el.name.toLowerCase().includes(search)
      );

      console.log(cakeArray);
      setCakeData(cakeArray);
      // return { cakeArray };
    } else {
      // return true;
      // alert("in else")
      cakeArray = Cakelist;
      setCakeData(cakeArray);
    }
  };
  useEffect(() => {
    alert("dataat");
  }, []);

  return (
    <div className="container-fluid">
      {/* {props.serarchQuery} */}
      <div className="container-fluid mt-3">
        <div className="row w-100 justify-content-end">
          <form className="form-inline my-2 my-lg-0">
            <input
              onChange={searchFunction}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={handleSearch}
              className="btn btn-success my-2 my-sm-0"
              type="button"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        {cakeData.map((d, index) => (
          <div className="card mt-3 ml-3" style={{ width: 18 + "rem" }}>
            <img
              style={{ height: 250 + "px" }}
              src={d.image}
              key={index}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title">{d.name}</h6>
              <p className="card-text">{d.price} rs.</p>
              <a className="" href="_blank" className="btn btn-primary">
                Add to cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
