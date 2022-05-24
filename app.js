// init weather object
const weather = new Weather('uk','london');
// init weather object
const ui = new UI();  getWeather();
    
// get weather on DOM load
document.addEventListener('DOMcontentLoader', getWeather);

// weather.changeLocation('Miami','FL');

async function getWeather(){
    await weather.getWeather()
        .then(results => {
        ui.paint(results);
        })
        .catch(err => console.log(err));
    }
    getWeather();