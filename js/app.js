let btnSwitch = document.getElementById("switch");
let selectors = document.querySelectorAll("[data-dark]");

document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
    defThemeMode(false, selectors);
    btnSwitch.checked = false;
  }

  if (localStorage.getItem("theme") === "dark") defThemeMode(true, selectors);
});

btnSwitch.addEventListener("click", (e) => {
  defThemeMode(btnSwitch.checked, selectors);
  if (btnSwitch.checked) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

const defThemeMode = (tft, dataAttributes) => {
  if (tft) {
    dataAttributes.forEach((el) => el.classList.add("darkTheme"));
  } else {
    dataAttributes.forEach((el) => el.classList.remove("darkTheme"));
  }
};
