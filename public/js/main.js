
const submitBtn =document.getElementById('submitBtn');
const cityName =document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val =document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide= document.querySelector('.middle_layer')

const getInfo = async(event)=>{
    event.preventDefault();// page may not be re-load
   let cityVal =cityName.value;
    if(cityVal == ""){
        city_name.innerText =`Plz enter city name before search`;
        datahide.classList.add('data_hide');
    }
        else
        {
            try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=640238f5c89b69f2436b77c45fde9c91
            `
            const response =await fetch(url);// it take time to  fetch data
            const data =await response.json();
           /*  console.log(data);  */
           //to convert into array
           const arrData =[data];
            
           city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;
          temp_real_val.innerText =arrData[0].main.temp;
           
           const tempMood = arrData[0].weather[0].main;// img

           //condeiton to check weather Img
           if(tempMood == "Clear"){
               temp_status.innerHTML = 
               "<i class='fas fa-cloud-sun' style='color:#eccc68;'></i>";
           }
           else if(tempMood == "Rain"){
            temp_status.innerHTML = 
            "<i class='fas fa-cloud-rain' style='color:#f1f2f6;'></i>";
        }
        else if(tempMood == "Clouds"){
            temp_status.innerHTML = 
            "<i class='fas fa-cloud' style='color:#a4b0be;'></i>";
        }
        else {
            temp_status.innerHTML ==
            "<i class='fab fa-cloudversify' style='color:#f1f2f6></i>";
        }

        datahide.classList.remove('data_hide');
            }
        catch{
            city_name.innerText=`Enter valid city name`;
            datahide.classList.add('data_hide'); 
        }
    
    }
}
submitBtn.addEventListener('click',getInfo);