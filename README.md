# weatherdashboard_al

This weatherdashboard_al, is meant to call the API, of OpenWeather which needs certain variables to be mentioned in the .env file, first is ```API_URL``` next is ```GEOCODE_API_UTL``` as well as ```API_BASE_URL``` followed by the ```API_KEY``` which allows us to use their system again of OpenWeather, to retrieve our coordinates, for certain places in the world.

We need to have a client as well as a server component, the server component will be waiting for client to put something that the server will search for that is a ```name_of_a_PLACE```

That should go into the Database part of ```searchHistory.json```, for any other search that will be logged into the above mentioned place.

Also we have our normal .gitignore, package.json, 
.env which is mentioned line 3

For other assets, the is ```historyservice.ts``` and weatherServices.ts``` which are located in the server side under ```src``` 

https://weatherdashboard-al.onrender.com (RENDER deployment)