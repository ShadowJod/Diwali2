let teXt = document.querySelector("#name");
let button = document.querySelector("#submit");
let saveText = "";
let boDy = document.querySelector("body");
let foRm = document.querySelector(".body");

button.addEventListener("click", () => {
  saveText = teXt.value;

  // Check if the input field is empty
  if (saveText.trim() === "") {
    alert("Please type your name first!");
    return; // Exit the function if the input is empty
  }

  console.log(saveText);
  boDy.style.backgroundImage = "url('happydiwali.jpg')";
  boDy.style.backgroundSize = "contain"; // Use "cover" to fill the entire background
  foRm.innerText =
    `Happy Diwali, ${saveText}! May the glow of diyas and the sweetness of sweets fill your life with happiness and harmony. Have a wonderful, safe, and bright Diwali! 🪔✨`;
  foRm.style.backgroundColor = "lightcoral";
  foRm.style.fontSize = "20px";

  foRm.classList.add("fade-in");


  // Clear the input field
  teXt.value = "";
});
