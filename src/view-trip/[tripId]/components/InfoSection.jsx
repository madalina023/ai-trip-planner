import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalAPI';
import React, { useEffect, useState } from 'react'
import { FiSend } from "react-icons/fi";


function InformationSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto()
  }, [trip])
  
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label
    }

    const result = await GetPlaceDetails(data).then(resp => {

    setPhotoUrl(
      PHOTO_REF_URL.replace("{NAME}", resp.data.places[0].photos[3].name)
    );

    })
  }

  return (
    <div>
      <img
        src={photoUrl ? photoUrl : "/plane.png"}
        className="h-[500px] w-full object-cover rounded-xl"
      ></img>
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-primary rounded-full text-white text-xs md:text-md">
              📆 {trip.userSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-primary rounded-full text-white text-xs md:text-md">
              💲 {trip.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-primary rounded-full text-white text-xs md:text-md">
              🤼 {trip.userSelection?.traveler} Travelers
            </h2>
          </div>
        </div>
        <Button>
          <FiSend />
        </Button>
      </div>
    </div>
  );
}

export default InformationSection