class Weather{
    constructor(state, city, apikey = "f69f2670d72cec0cfd32987aff2d713c") {
        this.apikey = apikey;
        this.city = city;
        this.state = state;
    }

    // fetch weather api
    getWeather() {
        const res = fetch(`http://api.weatherstack.com/current?access_key=${this.apikey}&query=${this.state},${this.city}`)
        .then((res) => res.json())
        .then((data) => data);

        return res;

        
        
    }
   
    //change weather location
    // changeLocation(city,state){
    //     this.city = city;
    //     this.state = state;
    // }
}
