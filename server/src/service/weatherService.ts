import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
//interface Coordinates {
  // lat, lon
  //lat: number;
  //lon: number;
//}

//let lat1 = this.lat;
//let lon1 = this.lon;

// TODO: Define a class for the Weather object
//class Weather {
//  city: string;
//  date: string;
//  icon: string;
//  iconDescription: string;
//  tempF: number;
//  windSpeed: number;
//   humidity: number;
  
//  constructor(city: string, date: string, icon: string, iconDescription: string, tempF: number, //windSpeed: number, humidity: number) {
//    this.city = city;
//    this.date = date;
//    this.icon = icon;
//    this.iconDescription = iconDescription;
//    this.tempF = tempF;
//    this.windSpeed = windSpeed;
//    this.humidity = humidity;
//  }
//}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  // TODO: Create fetchLocationData method
  //private async fetchLocationData(query: string) {}
  // TODO: Create destructureLocationData method
  //private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  //private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  //private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  //private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  //private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  /**
   * Formatted information about:
   * city name
   * date
   * icon
   * icon description
   * humidity
   * wind
   * temp
   * @param response 
   * @returns 
   */
  //private parseCurrentWeather(response: any) {
    /**
     * Analyzed info from the rest item from response.list (array) from open weather API, assuming this list is a list of forecasted days
     * 
     * response.list[0].weather.icon
     * response.list[0].weather.description
     * response.list[0].main.humidity
     * response.list[0].main.temp
     * response.list[0].wind.speed
     */

    //create a variable to hold the current weather object, after we  pass the weather data in the correct order to "new Weather(data here)"
      //return new Weather(this.city, response.list.dt.txt, response);
  //}
  // TODO: Complete buildForecastArray method
  //private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    try {
      console.log(city);
      // checking
      const weatherTemplate = {
        city: "Downtown Toronto",
        date: "3/26/2025",
        icon: "04d",
        iconDescription: "Clouds",
        tempF: "32.86",
        windSpeed: "14.29",
        humidity: "10"
    };
    
      const weatherDataArray = Array(6).fill(weatherTemplate);
    
      console.log(weatherDataArray);
      // checking
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new WeatherService();
