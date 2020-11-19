let btnSwitch = document.getElementById("switch");

btnSwitch.checked = false;

btnSwitch.addEventListener("click", (e) => {
  let selectors = document.querySelectorAll("[data-dark]");
  if (btnSwitch.checked) {
    selectors.forEach((el) => el.classList.add("darkTheme"));
  } else {
    selectors.forEach((el) => el.classList.remove("darkTheme"));
  }
});
