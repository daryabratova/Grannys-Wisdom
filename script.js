const wisdomContent = document.getElementById("wisdom-content");
const getWisdomButton = document.getElementById("get-wisdom-button");

const apiUrl = "https://api.adviceslip.com/advice";

const getWisdom = () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      wisdomContent.innerHTML = data.slip.advice;
    })
    .catch((error) => console.error(error));
};

getWisdom();

getWisdomButton.addEventListener("click", getWisdom);
