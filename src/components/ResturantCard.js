import { CDN_URL } from "../utils/constants";

const ResturantCard = (props)=>{
    return (
        <div className="w-52 m-2 shadow-lg bg-pink-100">
            
            <img className="res-logo" src={CDN_URL + props.resData.data.cloudinaryImageId} />
            <h3 className="font-bold text-lg">{props.resData.data.name}</h3>
            <h5>{props.resData.data.cuisines.join(", ")}</h5>
            <h5>{props.resData.data.avgRating} stars</h5>
            <h5>{props.resData.data.deliveryTime} minutes</h5>
        </div>
    )
}

export default ResturantCard;