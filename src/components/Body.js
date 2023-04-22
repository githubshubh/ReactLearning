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
        <div className="px-2 py-2 bg-green-200">
        <input type="text" className="focus:bg-red-200" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <button className="px-2 bg-blue-200 m-1 rounded-lg hover:bg-blue-500" onClick={()=>setFilteredResturants(allResturants.filter(res=>res.data.name.toLowerCase().includes(searchText.toLowerCase())))}>Search</button>
            <button className="px-3 bg-blue-200 m-3 rounded-lg" onClick={()=>{ 
            setFilteredResturants(allResturants.filter(res=>res.data.avgRating>4))
            }}> Top Rated Resturants</button>   
        </div>
        <div className="flex flex-wrap bg-gray-200">
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