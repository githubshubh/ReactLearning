import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import resList from "./../utils/mockData"
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () =>{

    const [allResturants, setAllResturants] = useState([])
    const [filteredResturants , setFilteredResturants] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
       fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4743879&lng=77.50399039999999&page_type=DESKTOP_WEB_LISTING")
       .then(res=>res.json())
       .then(data=>{
        setAllResturants(data?.data?.cards[2]?.data?.data?.cards);
       setFilteredResturants(data?.data?.cards[2]?.data?.data?.cards)})   
    },[])

     const isOnline = useOnline();

     if(!isOnline){
      return <h1>You are offline</h1>
     }
    return (
      <div className="body">
        <div className="filter">
        <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <button className="search-btn" onClick={()=>setFilteredResturants(allResturants.filter(res=>res.data.name.toLowerCase().includes(searchText.toLowerCase())))}>Search</button>
            <button className="filter-btn" onClick={()=>{ 
            setFilteredResturants(allResturants.filter(res=>res.data.avgRating>4))
            }}> Top Rated Resturants</button>   
        </div>
        <div className="res-container">
        { filteredResturants.map(resturant=> {
        return (
        <Link to={"/resturants/" + resturant.data.id} key={resturant.data.id}> 
        < ResturantCard  resData={resturant}/>
        </Link>
        )})}
        </div>
      </div>
    )
}

export default Body;