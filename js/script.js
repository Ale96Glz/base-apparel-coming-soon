const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();

  if (isValidEmail(emailValue)) {
    form.submit();
  } else {
    emailInput.nextElementSibling.classList.remove("d-none");
    errorMsg.classList.remove("d-none");
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
