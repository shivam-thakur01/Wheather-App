import hotbg from "./assets/hot.jpeg";
import coldbg from "./assets/cold.jpeg";
import Description from "./components/Description.js"
import { useEffect, useState } from "react";
import { getFormattedWheatherData } from "./wheatherService";

function App() {
  
  const [wheather,setWheather]=useState(null);
  const [units,setUnits]=useState("metric");
  const [city,setCity]=useState('delhi');
  const [bg,setBg]=useState(hotbg)

  useEffect(()=>{
    const fetchWheatherData= async()=>{
      const data= await getFormattedWheatherData(city,units);
      console.log("data in state",data);
      setWheather(data);

      //Dynamic background
      const threshold=units==='metric'?20:60;
      if (data.temp<=threshold){
        setBg(coldbg)
      }
      else{
        setBg(hotbg);
      }
    };
    fetchWheatherData();
  },[units,city]);

  const handleUnitsClick=(e)=>{
    const button=e.currentTarget;
    const currUnit=button.innerText.slice(1);
    // console.log(currUnit)
    const isCelsius=currUnit==='C';
    button.innerText=isCelsius?'°F':'°C';
    setUnits(isCelsius?'metric':'imperial');
  }

const enterKeyPressed=(e)=>{
  if (e.keyCode===13) {
    // console.log(e.currentTarget.value)
    setCity(e.currentTarget.value);
    e.currentTarget.blur();
  }
}


  return (  
    <div className="app" style={{backgroundImage:`url(${bg})` ,backgroundRepeat: "no-repeat",backgroundSize:"cover"
    }}>
      <div className="overlay">
        {wheather && (
          <div className="container">
          <div className="section section__inputs">
            <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter the city..." />
            <button onClick={(e)=>handleUnitsClick(e)}>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${wheather.name}, ${wheather.country}`}</h3>
              <img className="wheatherImg" src={wheather.iconURL} alt="Wheather Icon" />
              <h3>{wheather.description}</h3>
            </div>
          <div className="temperature">
            <h1>{`${wheather.temp.toFixed()} °${units==='metric'?'C':'F'}`}</h1>
          </div>
          </div>
          {/* {console.log('niche',wheather)} */}
          <Description wheather={wheather} units={units}/>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
