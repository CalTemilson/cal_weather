import React, { useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const url=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=aa9903848225e744045d83c91075e434`

  const searchLocation = ()=>{
    axios.get(url)
    .then((response)=>{
      setData(response.data)

    })
  }
  return (
    <div className="app">
      <div className="enter">
        <img src="" alt="" className="search" />
          <input className='search' type="search" 
          id='query' 
          name='q' 
          placeholder='Search' />
      </div>
      <div className='container'>
        <div className="top">
          <div className="location">
            <p>LAGOS</p>
          </div>
          <div className="temp">
            <h1>37&#8451;</h1>
          </div>
          <div className="description">
          <p>CLOUD</p>
          </div>
        </div>
        {data.name !==undefined &&
        <div className="bottom">
            <div className="feels">
            <p>37&#8451;</p>
            <p>Feels Like</p>
            </div> 
            <did className="humidity">
              <p>75%</p>
              <p>Humidity</p>
            </did>
          <div className="windspeed">
              <p>45MPH</p>
              <p>Wind Speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default App