import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlanningInfo({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-5">Places to visit</h2>
      <div>
        {trip?.tripData?.itinerary &&
          Object.entries(trip.tripData.itinerary)
            .sort(([a], [b]) => a.localeCompare(b)) 
            .map(([key, item], index) => (
              <div key={key}>
                <h2 className="font-bold text-lg ">
                  Day {key.replace(/\D/g, "")}
                </h2>
                <div className="grid md:grid-cols-3 gap-5">
                  {item.activities.map((place, placeIndex) => (
                    <div key={placeIndex} className="my-3">
                      <h2 className="font-medium text-sm text-emerald-600">
                        {place.time}
                      </h2>
                      <PlaceCardItem place={place} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default PlanningInfo;
