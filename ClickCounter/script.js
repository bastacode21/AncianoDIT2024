const btn = document.querySelector("#addbtn");
const counter = document.querySelector("#countertxt");
const message = document.querySelector("#messagetxt");
const reset = document.querySelector("#resetbtn");
let timesclick = 0;
btn.addEventListener("click", function () {
  timesclick++;
  
  counter.innerHTML = timesclick;
  if (timesclick <= 5) {
    message.innerHTML = "Less than or equal to Five";
  } else if (timesclick >= 6 && timesclick <= 10) {
    message.innerHTML = "Less than or equal to Ten";
  } else if (timesclick >= 11 && timesclick <= 15) {
    message.innerHTML = "More Than Ten";
  } else {
    message.innerHTML = "Maximum Click Reached";
  }
});
reset.addEventListener("click", function() {
  timesclick = 0;
  
  counter.innerHTML = timesclick;
  message.innerHTML = "Reseted Successfully"
})
