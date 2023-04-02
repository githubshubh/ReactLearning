import ResturantCard from "./ResturantCard";
import { useState } from "react";
import resList from "./../utils/mockData"

const Body = () =>{


    const [listOfResturants , setlistOfResturants] = useState(resList)

    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{ 
            setlistOfResturants(listOfResturants.filter(res=>res.data.avgRating>4))
            }}> Top Rated Resturants</button>   
        </div>
        <div className="res-container">
        {listOfResturants.map(resturant=> < ResturantCard key={resturant.data.id} resData={resturant}/>)}   
        </div>
      </div>
    )
}

export default Body;