import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const ResturantMenu = () =>{

    const params = useParams();

    const [ resturantDetail, setResturantDetails ] = useState({});

    useEffect(()=>{
         fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4743879&lng=77.50399039999999&restaurantId=" + params.resID + "&submitAction=ENTER")
         .then(res=>res.json())
         .then(data=>setResturantDetails(data))
    },[])
    
    return (
        <div className = "restMenu">
            <h1>Resturant ID : {params.resID}</h1>
            <img alt="Resturant Img"src = {CDN_URL + resturantDetail?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
            <h3> Name : {resturantDetail?.data?.cards[0]?.card?.card?.info?.name}</h3>
            <div>
                <h2>MENU</h2>
                <div>
                    <ul>
                {resturantDetail?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(item=>
                    <li>{item.card.info.name}</li>)}
                </ul>
                </div>
            </div>
        </div>
    )
    }
export default ResturantMenu;