var elForm = document.querySelector(".site-form");
var elInput = elForm.querySelector(".site-input");

var day = ("")
var mondey = ("dushanba");
var tuesday = ("seshanba");
var Wednesday = ("chorshanba");
var Thursday = ("payshanba");
var friday = ("juma");
var Saturday = ("shanba");
var Sunday = ("yakshanba");

var elp = document.querySelector(".text");

elForm.addEventListener("submit", function(evt) {
   evt.preventDefault();

   if (elInput.value == day) {
    document.querySelector.textContent = "hafta kunini kiriting";
   } else if  (elInput.value == mondey) {
    elp.textContent = "понедельник";
   } else if  (elInput.value == tuesday) {
    elp.textContent = "вторник";
   } else if  (elInput.value == Wednesday) {
    elp.textContent = "среда";
   } else if  (elInput.value == Thursday) {
    elp.textContent = "четверг";
   } else if  (elInput.value == friday) {
    elp.textContent = "пятница";
   } else if  (elInput.value == Saturday) {
    elp.textContent = "суббота";
   } else if  (elInput.value == Sunday) {
    elp.textContent = "воскресенье";
   }
});