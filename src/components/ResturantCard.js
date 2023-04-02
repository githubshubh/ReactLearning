import { CDN_URL } from "../utils/constants";

const ResturantCard = (props)=>{
    return (
        <div className="res-card" style={{backgroundColor :"#f0f0f0"}}>
            
            <img className="res-logo" src={CDN_URL + props.resData.data.cloudinaryImageId} />
            <h3>{props.resData.data.name}</h3>
            <h5>{props.resData.data.cuisines.join(", ")}</h5>
            <h5>{props.resData.data.avgRating} stars</h5>
            <h5>{props.resData.data.deliveryTime} minutes</h5>
        </div>
    )
}

export default ResturantCard;