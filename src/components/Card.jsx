import React from 'react'
import Mornhiem from '../assets/MornhiemGame.png'
import fantasyWeatherAppImg from '../assets/FWeatherApp.png'
import mBOrganizer from '../assets/MBOrganizer.png'

const Card = () => {

    let appInfo = {
        textBasedGame: { name: 'Mornhiem Text Game', img: Mornhiem, liveLink: 'https://mattregi.github.io/Mornhiem/', gitLink: 'https://github.com/MattRegi/Mornhiem'},
        fantasyWeatherApp: { name: 'Fantasy Weather App', img: fantasyWeatherAppImg, liveLink: 'https://mattregi.github.io/fantasy-weather-app/', gitLink: 'https://github.com/MattRegi/fantasy-weather-app'},
        movieBookOrganizer: { name: 'Movie/Book Organizer', img: mBOrganizer, liveLink: 'https://mattregi.github.io/Movie-and-Book-Organizer/', gitLink: 'https://github.com/MattRegi/Movie-and-Book-Organizer'},
    }





  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
    {Object.values(appInfo).map((app, index) => (
    <div key={index}>
      {/* grid items */}
        <div style={{backgroundImage: `url(${app.img})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                          
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
                {app.name}
            </span>
            <div className='pt-8 text-center'>
                <a href={app.liveLink} target='_blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                </a>
                <a href={app.gitLink} target='_blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Code</button>
                </a>        
            </div>
        </div>
        </div>
    </div>
  ))}
  </div>
  )
}
export default Card
