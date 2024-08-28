//digital-clock 

function updateClock24Hours(){

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

function updateClock12Hours(){
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, 0);
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = (hours % 12 || 12).toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById("clock").textContent = timeString;
}

function updateClock() {
  const selectedClock = document.querySelector('input[name="hourClock"]:checked').value;
  if (selectedClock === '24') {
    updateClock24Hours();
  } else {
    updateClock12Hours();
  }
}

updateClock();
setInterval(updateClock, 1000);

const radioBtns = document.querySelectorAll('input[name="hourClock"]');
radioBtns.forEach(radio => {
  radio.addEventListener('change', () => {
    updateClock(); 
  });
});