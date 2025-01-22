document.addEventListener("DOMContentLoaded", init)

function init(){
    document.querySelector("#submit").addEventListener("click", function (){
        var firstName = document.querySelector("#fname").value
        var lastName = document.querySelector("#lname").value
        var number = document.querySelector("#number").value
        var male = document.querySelector("#r1")
        var female = document.querySelector("#r2")
        var result = document.querySelector("#wynik")
        var result2 = document.querySelector("#wynik2")
        var box = document.querySelector("#animated-box")
        
        number = parseInt(number) //parseint
        var input = firstName
        for(var i = 0; i<number-1; i++){
           firstName += input
        }
        while(!isNaN(firstName)){ //isNaN
          firstName = prompt("Podane imie nie moze byc cyfra")
        }
        result.innerHTML = firstName
        sessionStorage.setItem("nazwisko", lastName);

        if(male.checked){
          var r = Math.random(Math.floor())*255 //random
          var g = Math.random(Math.floor())*255
          var b = Math.random(Math.floor())*255
          result.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
        }
        if(female.checked){
          distance = 0
          while(distance < 1000){
            distance += 1
            box.style.left = distance + "px" // nie dziala
          }
        }
    })
    
    var footer = document.querySelector("footer")
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          footer.innerHTML = "Geolokacja nie działa";
        }
      }
    
    function godzina(){
      var czas = new Date()
      var godzina =  czas.getHours()
      var minuty = czas.getMinutes()
      if(minuty < 10){
        minuty = "0" + minuty;
      }
      if(godzina < 10){
        godzina = "0" + godzina;
      }
      return godzina + ":" + minuty
    }
      
    function showPosition(position) {
        footer.innerHTML = "<p><span>Marcin-bud</span> | &copy 2024</p>" + "<p>Szerokość: " + position.coords.latitude.toFixed(2) +
        "<br>Długość: " + position.coords.longitude.toFixed(2) + "</p>" + godzina()
    }

    setInterval(godzina,1000)
    getLocation()

    var colorSelection = document.querySelector("#color-selection");
    colorSelection.addEventListener("", function () {
        result2.style.backgroundColor = colorSelection.value;
    });

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");


    ctx.fillStyle = "red";
    ctx.fillRect(50, 150, 100, 100);


    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(650, 200, 50, 0, Math.PI * 2);
    ctx.fill();

    var result2 = document.querySelector("#wynik2")
    var borderCheckbox = document.querySelector("#border-checkbox")
    borderCheckbox.addEventListener("change", function() {
      if (borderCheckbox.checked) {
          result2.style.border = "3px solid black";
      } else {
          result2.style.border = "none";
      }
  });
}