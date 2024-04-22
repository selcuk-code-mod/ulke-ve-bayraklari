async function fetchCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const countriesContainer = document.getElementById("countries");
    countriesContainer.classList.add("row");
    console.log(data[0].flags.svg);
    console.log(data[0].name.common);
    console.log(data[0].population);
    data.forEach((country) => {
      const countryElement = document.createElement("div");
      countryElement.classList.add("col-lg-3", "col-md-6");
      countryElement.innerHTML = `
      <div class="card country">
      <img src="${country.flags.svg}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${country.name.common}</h5>
        <p class="card-text">${country.population}</p>
      </div>
      </div>
      `;
      countriesContainer.appendChild(countryElement);
    });
  } catch (error) {
    console.log("Hata: ", error);
  }
}

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", function (event) {
  const searchText = event.target.value.toLowerCase();
  const countryCards = document.querySelectorAll(".country");
  countryCards.forEach((card) => {
    const countryName = card.querySelector("h5").textContent.toLowerCase();
    if (countryName.includes(searchText)) {
      card.parentElement.style.display = "";
    } else {
      card.parentElement.style.display = "none";
    }
  });
});

fetchCountries();
