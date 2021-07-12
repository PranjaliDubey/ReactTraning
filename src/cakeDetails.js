import { useEffect, useState } from "react";
import axios from "axios";
function CakeDetails(props) {
  let cakeData;
  let [description, setDescription] = useState();
  let [flavour, setFlavour] = useState();
  let [image, setImage] = useState();
  let [name, setName] = useState();
  let [price, setPrice] = useState();
  useEffect(() => {
    // console.log("......", "done");
    axios
      .get(
        `https://apifromashu.herokuapp.com/api/cake/${props.match.params.cakeid}`
      )
      .then((res) => {
        console.log("resposne", res);
        cakeData = res;
        setDescription(cakeData.data["data"].description);
        setFlavour(cakeData.data["data"].flavour);
        setImage(cakeData.data["data"].image);
        setName(cakeData.data["data"].name);
        setPrice(cakeData.data["data"].price);
      });
  }, []);

  return (
    <div className="container">
    
      <div className="text-center mb-4"> <h4>Cake Details</h4></div>
      <div className="card">
      
        <div className="row overflow-wrap">
          <div className="col-md-6 d-flex justify-content-center mt-2 mb-2">
            <img
              src={image}
              className="card-img-top"
              alt="..."
              style={{ width: 50 + "%" }}
            />
          </div>
          <div className="col-md-6 col-xs-4 d-flex align-items-center">
            <div className="card-body" style={{fontSize:20+"px"}}>
              
                <p><b>Name:</b>{name}</p>
     
                <p><b>Flavour:</b> {flavour}</p>
                <p><b>Price:</b> {price} rs.</p>
                <p><b>Description:</b> {description} rs.</p>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CakeDetails;
