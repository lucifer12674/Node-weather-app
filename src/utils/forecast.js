const request=require("request")
const forecast=(lat,long,callback)=>{
    const url="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+long+"&exclude=hourly,minutely&appid=1e4fd07914bd10e8769437d42601f183&units=metric"
    request({url,json:true},(error,{body})=>{
        if(error){
            callback("Cannot connect weather service",undefined)
        }
        else if(body.message)
        {
            callback("Unable to find location. Try another search",undefined)
        }
        else{
            callback(undefined,body.current.weather[0].description+". It is currently "+body.current.temp+". The high today is "+body.daily[0].temp.max+". The low today is"+body.daily[0].temp.min+". There is a "+body.daily[0].pop+"% of chance of rain")
        }
    })

}
module.exports=forecast