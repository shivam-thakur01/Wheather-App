import React from 'react'
import {FaArrowDown, FaArrowUp, FaWind} from 'react-icons/fa'
import {BiHappy} from 'react-icons/bi'
import {MdCompress, MdOutlineWaterDrop} from 'react-icons/md'
import './description.css'

const Description = ({wheather,units}) => {
  console.log('inside desc',wheather)
  const tempUnit= units==='metric'?'°C':'°F';
  const windUnit=units==='metric'?'m/s':'m/h';
  const cards=[
    {
      id:1,
      icon:<FaArrowDown/>,
      title:'min',
      data:wheather.temp_min.toFixed(),
      unit:tempUnit
    },
    {
      id:2,
      icon:<FaArrowUp/>,
      title:'max',
      data:wheather.temp_max.toFixed(),
      unit:tempUnit
    },
    {
      id:3,
      icon:<BiHappy/>,
      title:'feels like',
      data:wheather.feels_like.toFixed(),
      unit:tempUnit
    },
    {
      id:4,
      icon:<MdCompress/>,
      title:'pressure',
      data:wheather.pressure,
      unit:"hPa"
    },
    {
      id:5,
      icon:<MdOutlineWaterDrop/>,
      title:'humidity',
      data:wheather.humidity,
      unit:'%'
    },
    {
      id:6,
      icon:<FaWind/>,
      title:'wind speed',
      data:wheather.speed.toFixed(),
      unit:windUnit
    }
  ]

    return <div className='section section__descriptions'>
      {cards.map(({id,icon,title,data,unit})=>( 
        <div className="card">
        <div className="description__card-icon">
          {icon}
          <small>{title}</small>
        </div>
        <h2>{`${data} ${unit}`}</h2>
      </div>
      ))}
      
    </div>
}

export default Description