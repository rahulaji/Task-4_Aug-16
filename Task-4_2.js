const xhr =new XMLHttpRequest();

xhr.open("GET" ,"https://restcountries.com/v3.1/all");
xhr.send();

xhr.responseType= "json";

xhr.onload =function displayCountries(){
const countries =xhr.response;
for(let index in countries){
    console.log(+index +1 +"#" + " NameofTheCountriesNames" +countries[index].name.common);
    console.log("region="+ countries[index].region);
    console.log("subRegion=" + countries[index].subregion);
    console.log("population=" + countries[index].population);
    console.log("countryFlag=" + countries[index].flags.png);
}
}
