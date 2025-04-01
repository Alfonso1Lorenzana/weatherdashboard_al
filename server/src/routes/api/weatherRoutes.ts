import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req, res) => {
  const {cityName} = req.body;
  res.json({ message: `You requeted weather data for the city ${cityName}, but we are still building the request to OpenWeather... try again later`});
  // TODO: GET weather data from city name
  if (req.body) {
    WeatherService.getWeatherForCity(cityName)

      .then((weather) => {
        res.json(weather);
      }) 
      .catch((error) => {
        res.status(500)
        .json({error: `Failed to get weather data ${error.data}`});
      });
  }
  // TODO: save city to search history
  HistoryService.addCity(cityName);
});

// TODO: GET search history
router.get('/history', async (_req, res) => {
  HistoryService.getCities().then( (data)=>{res.json(data)} ) 
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => 
  {
    if (!req.params.id) {
      res.status(400).json({msg: "City is required"});
    }
    await HistoryService.removeCity(req.params.id);
    res.json({success: "City is removed from history"});
  }
);

export default router;
