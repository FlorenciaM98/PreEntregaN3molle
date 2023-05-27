var currentDate = moment().format('lll');   
let currentDateDiv = document.getElementById("date");

setTimeout(() => { currentDateDiv.innerHTML = `${currentDate}` }, 1000);