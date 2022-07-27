const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

const dataUser = {};

function handlerSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const valueEmail = email.value;
  const valuePassword = password.value;
  if (valueEmail === "" || valuePassword === "") {
    return alert("Complete the fields");
  }
  dataUser[email.name] = valueEmail;
  dataUser[password.name] = valuePassword;
  event.currentTarget.reset();
  console.log(dataUser);
}
