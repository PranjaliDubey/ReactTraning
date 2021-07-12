import cakeData from "./cakelist";

// function CakesRouting() {
//     return(
//         <div className="row justify-content-center">
//         {cakeData.map((d, index) => (
//             <div className="card mt-3 ml-3" style={{ width: 18 + "rem" }}>
//               <img
//                 style={{ height: 250 + "px" }}
//                 src={d.image}
//                 key={index}
//                 className="card-img-top"
//                 alt="..."
//               />
//               <div className="card-body">
//                 <h6 className="card-title">{d.name}</h6>
//                 <p className="card-text">{d.price} rs.</p>
//                 <a className="" href="_blank" className="btn btn-primary">
//                   Add to cart
//                 </a>
//               </div>
//             </div>
//           ))}
//           </div>
//     )
//         }

import queryString from "query-string"
import { useEffect } from "react"

function CakesRouting(props){
let query = queryString.parse(props.location.search)
console.log("query is" , query)

useEffect(()=>{
console.log("qery changed" , query)
let apiurl = process.env.REACT_APP_BASE_API_URL + "/searchcakes?q="+ query.q
},[query.q])
return (
<div>
Search page . Search for these cakes {props.searchquery}
</div>
)
}

export default CakesRouting 