document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("dice");

  button.addEventListener("click", async function() {
    addGlowEffect();
    let response = await getAPI();
    document.querySelector(".adviceNumber").textContent = response.slip.id;
    document.querySelector(".advice").textContent = response.slip.advice;
  });

  const getAPI = async () => {
    let p = await fetch("https://api.adviceslip.com/advice");
    let response = await p.json();
    return response;
  };
});

function addGlowEffect() {
  const diceButton = document.getElementById('dice');
  diceButton.classList.add('glow');
  
  setTimeout(() => {
    diceButton.classList.remove('glow');
  }, 950);
}