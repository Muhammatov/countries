let btnButton = document.getElementById("btn-button")
let btnText = document.getElementById("btn-text")
let rest = document.querySelector(".result")
btnButton.addEventListener('click', () => {
     let countryName = btnText.value;
     let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
     fetch(finalUrl)
          .then((response) => response.json())
          .then((data) => {
               console.log(data[0]);
               console.log(data[0].flags.svg);
               console.log(data[0].capital);
               console.log(data[0].name.common);
               console.log(data[0].continents[0]);
               console.log(Object.keys(data[0].currencies)[0]);
               console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
               console.log(Object.values(data[0].languages).toString().split(',').join(","));



               rest.innerHTML += `
               <img src ="${data[0].flags.svg}" class='flag-btn'></img>
               <h2 class ="flag-text">${data[0].name.common}</h2>
               <div class="wrapper">
                  <div class="wrapper-result">
                       <h5 class ="capital-text">Poytaxti :</h5>
                       <span class="capital-result">${data[0].capital}</span>
                  </div>
                  <div class="wrapper-result">
                       <h5 class ="capital-text">Qit'a :</h5>
                       <span class="capital-result">${data[0].continents[0]}</span>
                  </div>
                  <div class="wrapper-result">
                       <h5 class ="capital-text">Aholi soni :</h5>
                       <span class="capital-result">${data[0].population}</span>
                  </div>
                  <div class="wrapper-result">
                       <h5 class ="capital-text">valyutalar:</h5>
                       <span class="capital-result">${data[0].currencies[Object.keys(data[0].currencies)].name} -${Object.keys(data[0].currencies)[0]}</span>
                  </div>
                  <div class="wrapper-result">
                       <h5 class ="capital-text">Umumiy tillar:</h5>
                       <span class="capital-result">${Object.values(data[0].languages).toString().split(', ').join(" , ")} </span>
                  </div>
               
               </div>
               
               `
               btnText.value = ""
               // rest.remove()

          });
})