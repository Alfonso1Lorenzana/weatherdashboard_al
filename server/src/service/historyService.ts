import fs from 'node:fs/promises';
//import { v4 as uuidv4 } from 'uuid';
// TODO: Define a City class with name and id properties
// defining a class City as well as a constructor that ties it together by having the same variables
class City {
  name: string;
  id: string;

  constructor(
    name: string,
    id: string
  ) {
    this.name = name;
    this.id = id;
  }
}


// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    return await fs.readFile('db/db.json', {
      flag: 'a+',
      encoding: 'utf8',
    });
  }
  
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    return await fs.writeFile(
      'db/db.json',
      JSON.stringify(cities, null, '\t')
    );
  }
  
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    return await this.read().then((Cities) => {
      let parsedCity: City[];

      try {
        parsedCity = [].concat(JSON.parse(Cities));
      } catch (err) {
        parsedCity = [];
      }

      return parsedCity;
    });
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    const newCity: City = {
      name: city,
      id: city,
    }
    this.getCities().then( (data)=>{
      data.push(newCity);
      this.write(data);
    })
  }
  
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(_id: string) {}
}

export default new HistoryService();
