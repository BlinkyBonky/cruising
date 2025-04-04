import React from 'react'
import '../styles/bokaBay.css'
import { Link } from 'react-router-dom'
function BokaBay() {

    return (
        <>
            <div className='bg-[url("https://images.unsplash.com/photo-1637519471877-c5ddeeefc244?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] 
            bg-center bg-cover h-screen w-screen flex flex-col items-center justify-between  text-black'>

                <div className='text-white text-5xl mt-10'>
                    Boka bay
                </div>
                <div className='text-white  w-full text-5xl'>
                    <div className='flex overflow-hidden flex-col w-full text-xl'>
                        <div className='flex justify-center text-6xl mb-40'>Cruise</div>
                        <div className='flex justify-evenly items-center overflow-hidden'>
                            <div className='flex-1 flex justify-center items-center'>8</div>
                            <div className='flex-1 flex justify-center items-center'>10</div>
                            <div className='flex-1 flex justify-center items-center'>3</div>
                        </div>
                        <div className='flex justify-evenly items-center mb-10'>
                            <div className='flex-1 flex justify-center items-center'>Hours</div>
                            <div className='flex-1 flex justify-center items-center'>Sights</div>
                            <div className='flex-1 flex justify-center items-center'>Smim Stops</div>
                        </div>
                        <div className='flex justify-center pb-10'>
                            <Link to={'./payment'}>
                                <button className='bg-blue-600 rounded-sm py-3 px-10'>Order Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[url("https://images.unsplash.com/photo-1558971067-6edfd413e506?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] 
            bg-center bg-cover w-screen h-screen text-white'>
                <div className='flex w-full h-full p-5 justify-center items-center font-bold text-base'>
                We start the journey by a tourist bus that departs from Petrovac and Budva and takes us to Tivat. In Tivat we board the MB Vesna and depart from Tivat at 10 o'clock. After 45 minutes we dock in H.Novi, where passengers have 60 minutes of free time. After the break, we continue driving towards the open sea to the beach Žanjice. Free time of 90 minutes, guests use as they wish, to swim or to be transported to the Blue Cave by smaller boats. After the swimming break, we continue driving towards the island of Our Lady We arrive at Our Lady and you will have a break of about 40 minutes. The last 45 minutes we drive through the Bay of Kotor, which is the most interesting, and pass by the town of Perast. The next break is in Kotor, where passengers have free time to rest in the park and for an individual visit to the city. After a break in Kotor, we return by the same buses to the place of your departure.

    Included in the price: transfer by bus, boat ride, guide on board.

    Not included in the price: lunch, transport by boat to the Blue Cave(10€), entrance to the museum and church on the island of Our Lady of Skrpjela (3 €), individual excursion around the old town of Kotor (1 €).

    Note: In case of bad weather, when the captain of the ship (commander) assesses that it is not safe to sail to the open sea (beach Žanjice / Blue Cave), he will not sail towards the beach Žanjice and the Blue Cave.
                </div>
            </div>
        </>

    )
}

export default BokaBay