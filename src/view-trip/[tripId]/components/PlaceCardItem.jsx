import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";
import React, { useEffect, useState } from "react";import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();
  
    useEffect(() => {
      place && GetPlacePhoto()
    }, [place])
    
    const GetPlacePhoto = async () => {
      const data = {
        textQuery: place?.placeName
      }
  
      const result = await GetPlaceDetails(data).then(resp => {
  
      setPhotoUrl(
        PHOTO_REF_URL.replace("{NAME}", resp.data.places[0].photos[3].name)
      );
  
      })
    }
  return (
    <Link to={
              "https://www.google.com/maps/search/?api=1&query=" +
              place?.placeName  
            }
            target="_blank" className="text-black hover:text-black">
    <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
      <img src={photoUrl?photoUrl:"/plane.png"} className="w-[130px] h-[130px] rounded-xl object-cover" />
      <div>
        <h2 className="font-bold text-lg"> {place.placeName}</h2>
        <p className="text-sm text-gray-400">{place.placeDetails}</p>
        <h2 className="mt-2">🧭 {place.timeTravel}</h2>
        {/* <Button size= 'sm' className='mt-5 opacity-70 '>
          <IoLocationOutline />
        </Button> */}
      </div>
    </div>
    </Link>
  );
} 


export default PlaceCardItem;
