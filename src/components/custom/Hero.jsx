import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex flex-col items-center  mx-56 gap-9 ">
      <h1 className="font-extrabold text-[60px] text-center mt-16">
        <span className='text-[#3c6f72]'> Discover your next adventure with AI: </span> <br /> The personalized itinerary and
        travel plan
          </h1>
          <p className='text-xl text-gray-500 text-center'> Your personalized trip planner and travel helper, creating cusrom
              itineraries to your budget and interests.
      </p>
      <Link to={ '/create-trip'}>
        <Button>Try it now</Button></Link>
      <img className='-mt-20'src='/landing.png'></img>
    </div>
  );
}

export default Hero