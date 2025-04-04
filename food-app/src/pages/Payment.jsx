import React, {useState} from 'react'
import dayjs from 'dayjs'
import { getDistance } from 'geolib';


function Payment() {

  const [busStop, setBusStop] = useState('');

  function handleCick() {
    getBusStop();
  }

  function getCollection(){
    const now = dayjs();
    const monthDays = now.daysInMonth();
    let firstDayInMonth = dayjs().date(1).day();
    if(firstDayInMonth === 0) firstDayInMonth = 7;
    let collection = [];
    for( let i = 1; i < monthDays+1; i++){
      if(i < firstDayInMonth){
        collection.push(null);
      }
      collection.push(i);
    }
    return collection;
  }

  function getBusStop(){
    const successCallback = (position) => {

      const busStops = [
        {name:"Kruzni Tok" ,latitude:42.28173428380395, longitude:18.835850020992762},
        {name:"Slovenska Plaza", latitude:42.286810327518765, longitude: 18.84268783406264}
      ];
      let currentBusStop = busStops[0];
      let minDistance = getDistance(
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
        {
          latitude: busStops[0].latitude,
          longitude: busStops[0].longitude,
        }
      );
      busStops.forEach((busStop)=>{
        let currentDistance = getDistance(
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          {
            latitude: busStop.latitude,
            longitude: busStop.longitude,
          }
        );
        if(currentDistance < minDistance){
          currentBusStop = busStop;
          minDistance = currentDistance;
        }
      });
      setBusStop(currentBusStop.name);
    };

    const errorCallback = (error) => {
        console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {enableHighAccuracy: true, timeout: 5000});
  }

  return (
      <div className='p-4'>
        <div className='flex flex-col mx-auto  h-100'>
          <div className='flex justify-center'>{dayjs().format('YYYY MMMM')}</div>
          <div className='grid h-full grid-cols-7 grid-rows-6 gap-0.5' >
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day,index) => (
              <div className='flex justify-center items-center border bg-green-200'>{day}</div>
            ))}
            {getCollection().map((day,index) => (
                (day === 1 || day === 5 || day===8 || day === 12 || day === 15 || day ===16 
                  || day === 19 || day === 21 || day === 23 || day === 25 || day === 26 ||
                  day === 28 || day === 30
                )  ?
                  <div className='flex justify-center items-center bg-amber-400 border'>{day}</div>
                  : <div className='flex justify-center items-center border'>{day}</div>
            ))}
          </div>
        </div>
        <div>
          <div>Who is joining in ?</div>
          <label htmlFor="adults">Adults</label>
          <input className='border rounded-full h-12 w-20 pl-2' id="adults" type="number" />
          <label htmlFor="children">Children</label>
          <input className='border rounded-full h-12 w-20 pl-2' id="children" type="number" />
          <button onClick={handleCick} className='border'>Get bus stop</button>
          <div className='js-bus-name'>{busStop}</div>
        </div>
      </div>
  )
}

export default Payment;