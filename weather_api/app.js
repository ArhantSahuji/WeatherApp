let citynameurl="https:geocoding-api.open-meteo.com/v1/search?name=";
let weatherurl="https://api.open-meteo.com/v1/forecast?latitude=&longitude=&current=temperature_2m";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
  let ul=document.querySelector("ul");
  ul.innerText="";
  let inp=document.querySelector("input");
  let cityname=inp.value;
  inp.value="";
  let temp=await citynameApi(cityname);
  console.log(temp);
  // console.log("hi");
  
  let li=document.createElement("li");
  li.innerText=temp;
  ul.appendChild(li);
})
async function citynameApi(cityname){
  let url=citynameurl+cityname;
  try{
    let res=await axios.get(url);
    console.log(res.data.results[0].latitude);
    console.log(res.data.results[0].longitude);
    let temp=weatherapi(res.data.results[0].latitude,res.data.results[0].longitude);
    return temp;
    // console.log(res.l);
  }
  catch(e){
    return "error";
  }

}
async function weatherapi(latitude,longitude){
  let url="https://api.open-meteo.com/v1/forecast?latitude=" + latitude +"&longitude=" + longitude +"&current=temperature_2m";
  try{
    let res=await axios.get(url);
    // console.log(res.data.current.temperature_2m);
    return res.data.current.temperature_2m;
  }
  catch(e){
    return "error";
  }
}