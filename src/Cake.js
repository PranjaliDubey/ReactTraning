// import companyLogo from '../public';

import { BrowserRouter as Router, Route ,Switch,Link} from "react-router-dom";
let Cake=(props)=>
{
  return(
    <div className="card m-3" style={{width: 18+'rem'}}>
      <Link to={"/cake/"+props.data.cakeid}>
        <img src={props.data.image}className="card-img-top" alt="..." height="250px"  />
        <div className="card-body">
            <h5 className="card-title">{props.data.name}</h5>
            <p className="card-text">{props.data.price} rs.</p>
            <a href="" className="btn btn-primary">Add to cart</a>
        </div>
        </Link>
    </div>
  )
}

export default Cake