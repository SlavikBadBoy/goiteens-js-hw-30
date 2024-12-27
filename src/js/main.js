const formData = {
  name: "",
  email: "",
  message: "",
};

const form = document.querySelector("#feedback-form");
const successMessage = document.querySelector("#success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  formData.name = document.querySelector("#name");
  formData.email = document.querySelector("#email");
  formData.message = document.querySelector("#message");

  successMessage.classList.remove("hidden");
});
