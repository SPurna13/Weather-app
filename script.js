const apikey="3c9c51f044872ca09d550c8adcbc9ec2";
const txt=document.getElementById("txt")
const btn=document.getElementById("btn")
const content=document.querySelector(".content")
btn.addEventListener("click", async event=>{
    const city=txt.value;
    if(city)
        {
            try{
            let weather=await getWeatherdata(city);
            if(weather)
                {
            displayData(weather);
                }
                else{
                    throw new Error("its an error");
                }
            }
            catch(error)
            {
                console.log(error)
            }
           
        }
})
async function getWeatherdata(name)
{
    let apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}`;
    let response= await fetch(apiurl);
    if(!response.ok)
        {
            displayError("Please enter a proper city");
            // throw new Error("its an error");
        }
    else{
    return await response.json();
    }
}
function displayData(data)
{
    const {name:city,main:{temp,humidity},weather:[{description,id}]}=data;
    const citydis=document.createElement("h2");
    content.textContent="";
    citydis.textContent=city;
    content.style.display="flex";
    content.classList.add("cityname");
    content.appendChild(citydis);
    const tempdis=document.createElement("p");
    tempdis.textContent=(temp-273.15).toFixed(1)+"°C";
    content.classList.add("temp");
    content.appendChild(tempdis);
    const humiditydis=document.createElement("p");
    humiditydis.textContent="Humidity:"+humidity+"%";
    content.classList.add("humidity");
    content.appendChild(humiditydis);
    const descdis=document.createElement("i");
    descdis.textContent=description;
    content.classList.add("description");
    content.appendChild(descdis);
    emoji(id);

     console.log(city,temp,humidity,description,id)
}
function emoji(wid)
{
    const emjdis=document.createElement("p");
    if(wid>=200 && wid<300)
        {
           emjdis.textContent="🌧️" ;
           content.appendChild(emjdis);
           content.classList.add("emj");
        }
    else if(wid>=300&&wid<400)
        {
            emjdis.textContent="🌧️" ;
            content.appendChild(emjdis);
            content.classList.add("emj"); 
        }
    else if(wid>=500 && wid<600)
        {
            emjdis.textContent="🌧️" ;
            content.appendChild(emjdis);
            content.classList.add("emj"); 
        }
    else if(wid>=600 && wid<700)
        {
            emjdis.textContent="❄️" ;
            content.appendChild(emjdis);
            content.classList.add("emj"); 
        }
    else if(wid>=700 && wid<800)
        {
            emjdis.textContent="🌫️" ;
            content.appendChild(emjdis);
            content.classList.add("emj"); 
        }
    else if(wid==800)
        {
            emjdis.textContent="☀️" ;
            content.appendChild(emjdis);
            content.classList.add("emj"); 
        }
    else if(wid>=801 && wid<810){
        emjdis.textContent="☁️" ;
        content.appendChild(emjdis);
        content.classList.add("emj"); 
    }
}
function displayError(message)
{
    const diserr=document.createElement("h2");
    content.textContent="";
    content.style.display="flex";
    diserr.textContent=message;
    content.classList.add("cityname");
    content.appendChild(diserr);
}

