import { formData } from "./module";
const form = document.querySelector("#feedback-form");
const successMessage = document.querySelector("#success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;

  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  console.log(formData(name, email, message));

  if (formData(name, email, message)) {
    successMessage.classList.remove("hidden");
  }
});
