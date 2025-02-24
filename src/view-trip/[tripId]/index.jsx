import { getDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '@/service/firebaseConfig';
import { toast } from 'sonner';
import InformationSection from './components/InfoSection';
import Hotels from './components/Hotels';
import PlanningInfo from './components/PlanningInfo';
import Footer from './components/Footer';
function Viewtrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);
  useEffect(() => {
    tripId&&GetTripData();
  }, [tripId]);


  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document:", docSnap.data());
      setTrip(docSnap.data());
    }
    else {
      console.log("No such document");
      toast("No trip found");
    }
  }
  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <div className="mb-10">
        <InformationSection trip={trip} />
      </div>
      <div className="mb-10">
        <Hotels trip={trip} />
      </div>
      <div className="mb-10">
        <PlanningInfo trip={trip} />
      </div> 
      <div className="mb-10">
        <Footer trip={trip} />
      </div>
    </div>
  );

}

export default Viewtrip