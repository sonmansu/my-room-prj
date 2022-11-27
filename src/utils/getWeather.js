// import axios from 'axios';

export const countries = [
    {
        "city_ascii": "Tokyo",
        "lat": 35.6839,
        "lng": 139.7744,
        "country": "Japan"
    },
    {
        "city_ascii": "Jakarta",
        "lat": -6.2146,
        "lng": 106.8451,
        "country": "Indonesia"
    },
    {
        "city_ascii": "Manila",
        "lat": 14.6,
        "lng": 120.9833,
        "country": "Philippines"
    },
    {
        "city_ascii": "Seoul",
        "lat": 37.56,
        "lng": 126.99,
        "country": "South Korea"
    },
    {
        "city_ascii": "Mexico City",
        "lat": 19.4333,
        "lng": -99.1333,
        "country": "Mexico"
    },
    {
        "city_ascii": "Cairo",
        "lat": 30.0444,
        "lng": 31.2358,
        "country": "Egypt"
    },
    {
        "city_ascii": "Beijing",
        "lat": 39.904,
        "lng": 116.4075,
        "country": "China"
    },
    {
        "city_ascii": "Moscow",
        "lat": 55.7558,
        "lng": 37.6178,
        "country": "Russia"
    },
    {
        "city_ascii": "Bangkok",
        "lat": 13.75,
        "lng": 100.5167,
        "country": "Thailand"
    },
    {
        "city_ascii": "Dhaka",
        "lat": 23.7289,
        "lng": 90.3944,
        "country": "Bangladesh"
    },
    {
        "city_ascii": "Buenos Aires",
        "lat": -34.5997,
        "lng": -58.3819,
        "country": "Argentina"
    },
    {
        "city_ascii": "Kinshasa",
        "lat": -4.3317,
        "lng": 15.3139,
        "country": "Congo (Kinshasa)"
    },
    {
        "city_ascii": "Tehran",
        "lat": 35.7,
        "lng": 51.4167,
        "country": "Iran"
    },
    {
        "city_ascii": "London",
        "lat": 51.5072,
        "lng": -0.1275,
        "country": "United Kingdom"
    },
    {
        "city_ascii": "Paris",
        "lat": 48.8566,
        "lng": 2.3522,
        "country": "France"
    },
    {
        "city_ascii": "Lima",
        "lat": -12.06,
        "lng": -77.0375,
        "country": "Peru"
    },
    {
        "city_ascii": "Luanda",
        "lat": -8.8383,
        "lng": 13.2344,
        "country": "Angola"
    },
    {
        "city_ascii": "Kuala Lumpur",
        "lat": 3.1478,
        "lng": 101.6953,
        "country": "Malaysia"
    },
    {
        "city_ascii": "Hanoi",
        "lat": 21.0245,
        "lng": 105.8412,
        "country": "Vietnam"
    },
    {
        "city_ascii": "Bogota",
        "lat": 4.6126,
        "lng": -74.0705,
        "country": "Colombia"
    },
    {
        "city_ascii": "Dar es Salaam",
        "lat": -6.8,
        "lng": 39.2833,
        "country": "Tanzania"
    },
    {
        "city_ascii": "Hong Kong",
        "lat": 22.3069,
        "lng": 114.1831,
        "country": "Hong Kong"
    },
    {
        "city_ascii": "Santiago",
        "lat": -33.45,
        "lng": -70.6667,
        "country": "Chile"
    },
    {
        "city_ascii": "Baghdad",
        "lat": 33.35,
        "lng": 44.4167,
        "country": "Iraq"
    },
    {
        "city_ascii": "Khartoum",
        "lat": 15.6031,
        "lng": 32.5265,
        "country": "Sudan"
    },
    {
        "city_ascii": "Madrid",
        "lat": 40.4167,
        "lng": -3.7167,
        "country": "Spain"
    },
    {
        "city_ascii": "Nairobi",
        "lat": -1.2864,
        "lng": 36.8172,
        "country": "Kenya"
    },
    {
        "city_ascii": "Rangoon",
        "lat": 16.795,
        "lng": 96.16,
        "country": "Myanmar"
    },
    {
        "city_ascii": "Washington",
        "lat": 38.9047,
        "lng": -77.0163,
        "country": "United States"
    },
    {
        "city_ascii": "Singapore",
        "lat": 1.3,
        "lng": 103.8,
        "country": "Singapore"
    }
]

// console.log(countries.length)


export function fetchWeater(selectedCountry) {
    const countryObj = countries.find(
        (item) => item["city_ascii"] === selectedCountry
    );
    // console.log('countryObj :>> ', countryObj);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${countryObj.lat}&lon=${countryObj.lng}&appid=${process.env.REACT_APP_API_KEY}`;
    // console.log('url :>> ', url);

    return fetch(url)
        .then(response => response.json())
        .then(parsed => {
            // console.log(parsed)
            // console.log(parsed.weather[0].main);

            // 국가 현재 시간 출력
            const timezone = parsed.timezone;
            // console.log('timezone :>> ', timezone);

            const localTime = new Date().getTime()
            const localOffset = new Date().getTimezoneOffset() * 60000
            const currentUtcTime = localOffset + localTime
            const cityOffset = currentUtcTime + 1000 * timezone
            const cityTime = new Date(cityOffset).toTimeString().split(' ')
            console.log('cityTime[0] :>> ', cityTime[0]);

            return parsed;
        });



}
