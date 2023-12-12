
const key = 'e2a161e5f25ec006712015cfb4351d6a' //Mapeia a key da api 

function inputDataOnScreen(data) {
    console.log(data)
    document.querySelector('.tittle').innerHTML = 'Tempo em ' + data.name //Muda o título de acordo com a cidade 
    
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + 'ºC' //Muda a temperatura de acordo com a cidade

    document.querySelector('.forecast-text').innerHTML = data.weather[0].description // Muda o tempo de acordo com a cidade

    document.querySelector('.humidity').innerHTML = 'Umidade: ' + data.main.humidity + '%' //Muda a umidade de acordo com a cidade

    document.querySelector('.cloud-image').src =`https://openweathermap.org/img/wn/${data.weather[0].icon}.png` //Muda o icon de acordo com o tempo na cidade
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    inputDataOnScreen(data)
}


function clickOnButton() { 
    const city = document.querySelector('.input-city').value
    searchCity(city)
} //Função para clicar no botão e pegar o valor dele