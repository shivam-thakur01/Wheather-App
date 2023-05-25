import axios from 'axios';
const API_KEY = 'a127c763ce8da56d0def1a3f97f92726';

const makeIconURL = (iconID) => `http://openweathermap.org/img/wn/${iconID}.png`;
// const makeIconURL = (iconID) => `http://openweathermap.org/img/wn/01d@2x.png`;

const getFormattedWheatherData = async(city, units = 'metric') => {
    const response = await axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
        )
    const data = await response.data


    const {
        weather,
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: { speed },
        sys: { country },
        name,
    } = data;
    // console.log(weather)
    const { description, icon } = weather[0];

    return {
        description,
        iconURL: makeIconURL(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name
    };

    // console.log(city, units)
    // const URL = `https://api.openwheathermap.org/data/2.5/wheather?q=${city}&appid=${API_KEY}&units=${units}`;
    // // const URL = `https://api.openweathermap.org/data/2.5/weather?q=faridabad&appid=a127c763ce8da56d0def1a3f97f92726`
    // const data = await fetch(URL).then((res) => res.json()).then((data) => data);
    // console.log(data)
    // const {
    //     wheather,
    //     main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    //     wind: { speed },
    //     sys: { country },
    //     name,
    // } = data;


};

export { getFormattedWheatherData }