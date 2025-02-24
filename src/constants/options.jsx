export const SelectTravelList = [
  {
    id: 1,
    title: "Just me",
    desc: "A sole travels in exploration",
    icon: "✈",
    people: "1",
  },
  {
    id: 2,
    title: "A couple",
    desc: "Two travelers in tandem",
    icon: "🥂",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving people",
    icon: "🏠",
    people: "3 to 5",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of friends",
    icon: "⛵",
    people: "5 to 10",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep the costs on the average",
    icon: "💰",
  },
  {
    id: 2,
    title: "Luxury",
    desc: "Don't worry about the costs",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with hotelName, hotelAddress, price, hotelImage url, geo coordinates, rating, descriptions and suggest itinerary with time, placeName, placeDetails, placeImageUrl, geoCoordinates, ticketPricing, timeTravel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.";
