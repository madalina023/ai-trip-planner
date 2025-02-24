import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };

    const result = await GetPlaceDetails(data).then((resp) => {
      setPhotoUrl(
        PHOTO_REF_URL.replace("{NAME}", resp.data.places[0].photos[3].name)
      );
    });
  };
  return (
    <Link to={"/view-trip/" + trip?.id} className="text-black">
      <div className="hover:scale-105 text-black transition-all ">
        <img
          src={photoUrl ? photoUrl : "/plane.png"}
          className="h-[200px] w-full object-cover rounded-xl"
        ></img>
        <div>
          <h2 className="font-bold text-lg">
            {trip?.userSelection?.location?.label}
          </h2>
          <h2 className="text-sm text-gray-500">
            {trip?.userSelection.noOfDays} days trip with{" "}
            {trip?.userSelection.budget} budget
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
