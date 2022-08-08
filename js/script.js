let elForm = document.querySelector(".site-form");
let elInput = elForm.querySelector(".site-input");

let elminus = document.querySelector(".minus");
let elfoot = document.querySelector(".foot");
let elvelosiped = document.querySelector(".velosiped");
let elcar = document.querySelector(".car");
let eltrain = document.querySelector(".train");

let foots = 4;
let velosiped = 8;
let car = 35;
let train = 100;


elForm.addEventListener("submit", function(evt) {
   evt.preventDefault();
   if (elInput.value <= 0) {
      elvelosiped.textContent = "Manfiy son kiritmang";
      elfoot.textContent = "Manfiy son kiritmang";
      elcar.textContent = "Manfiy son kiritmang";
      eltrain.textContent = "Manfiy son kiritmang";
   } else {
      var foot = Math.floor(elInput.value / foots);
      var peopleMin = Math.floor((elInput.value / foots - foot)*60);
   
      var bike = Math.floor(elInput.value / velosiped);
      var bikeMin = Math.floor((elInput.value / velosiped - bike)*60);
   
      var cars = Math.floor(elInput.value / car);
      var carsMin = Math.floor((elInput.value / car - cars)*60);
   
      var trainspeed = Math.floor(elInput.value / train);
      var trainspeedMin = Math.floor((elInput.value / train - trainspeed)*60);
   
      elfoot.textContent = `On foot ${foot} hour ${peopleMin} min`;
      elvelosiped.textContent = `bike  ${bike} hour ${bikeMin} min`;
      elcar.textContent = `car ${cars} hour ${carsMin} min`;
      eltrain.textContent = `train ${trainspeed} hour ${trainspeedMin} min`;
   }
});


      // running======================================================================================================================================================================


      let elrunningForm = document.querySelector(".running-form");
      let elrunningInput = elrunningForm.querySelector(".running-input");
      let elcheckboxInput = elrunningForm.querySelector(".checkbox-input");

      let elResult = document.querySelector(".result");

      let mingradus = 4;
      let maxgradus = 40;

      elrunningForm.addEventListener("submit", function(evt) {
         evt.preventDefault();
         
         let checked = elcheckboxInput.checked;

            if (elrunningInput.value < mingradus || checked) {
               elResult.textContent = "yugurishingizga maslahat bermaymiz";
           } else if (elrunningInput.value > maxgradus || checked) {
               elResult.textContent = "yugurishingizga maslahat bermaymiz";
           } else {
               elResult.textContent = "yugurishingiz mumkin";
           } 
      });

         // gradus====================================================================================================================================================================

         let elgradusForm = document.querySelector(".gradus-form")
         let elgradusInput = document.querySelector(".gradus-input")
         let elselect = document.querySelector(".select")
         let elresultGradus = document.querySelector(".result-gradus")
         let elgradusText = document.querySelector(".gradus-text")

         elgradusForm.addEventListener('submit', function (event){
            event.preventDefault();

            let elInputVall = parseInt(elgradusInput.value);
            
            if (elselect.value == "celsius") {
               elresultGradus.textContent = Math.round((elInputVall * 9/5) + 32) + "°F";
               elgradusText.textContent = Math.round(elInputVall + 273) + "K";
             }
             if (elselect.value == "Fahrenheit") {
               elresultGradus.textContent = Math.round((elInputVall - 32) * 5/9 ) + "°C";
               elgradusText.textContent = Math.round((elInputVall - 32) * 5/9 + 273,15) + "K";
             }
             if (elselect.value == "kelvin") {
               elresultGradus.textContent = Math.round((elInputVall - 273,15) * 9/5 + 32) + "°F";
               elgradusText.textContent =  Math.round(elInputVall - 273,15) + "C";
             }
         })