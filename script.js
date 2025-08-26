const themeBtn = document.getElementById("themeBtn");
const body = document.body;
const regForm = document.getElementById("regForm");
const message = document.getElementById("message");
const outerDiv = document.getElementById("outerDiv");
const innerBtn = document.getElementById("innerBtn");

themeBtn.addEventListener("click",   () => {
   body.classList.toggle("theme-black");
  body.classList.toggle("theme-orange");
});

regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username.length < 3) {
    showMessage("Username must be at least 3 characters.", "red");
  } else if (!email.includes("@")) {
    showMessage("Invalid email address.", "red");
  } else if (password.length < 6) {
    showMessage("Password must be at least 6 characters.", "red");
  } else {
    showMessage("Registration successful!", "green");
  }
});

regForm.addEventListener("reset", () => {
  message.textContent = "";
});

function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

innerBtn.addEventListener("click", () => {
  console.log("Button Clicked");
});

outerDiv.addEventListener("click", () => {
  console.log("Div Clicked - Bubbling");
});

outerDiv.addEventListener("click", () => {
  console.log("Div Clicked - Capturing");
}, { capture: true });