function generateServiceCard(data) {
  return `<article class="service">
    <div class="stream-bio">
      <h3 class="stream-name">${data.name}</h3>
      <img class="img" src="${data.logo}" />
      <p>Starting price: ${data.starting_price}</br>
      Simultaneous streams: ${data.simultaneous_streams}</br>
      Live TV: ${data.tv}</br>
      Exclusive originals: ${data.exclusive_originals}</br>
        Platforms and devices: ${data.platforms_and_devices}
      </p></br>
      <span class="visit-site"
        ><a href="${data.website}">Visit Site</a></span
      >
    </div>
  </article>
    `;
}

function makeServiceCard(data) {
  return `<article class="service">
    <div class="stream-bio">
      <h3 class="stream-name">${data.display_name}</h3>
      <img class="img" src="${data.icon}" />
      <span class="visit-site"
        ><a href="${data.url}">Visit Site</a></span
      >
    </div>
  </article>
    `;
}

function searchCompany() {
  var streamInput = document.querySelector(".stream-input");
  var servicesDiv = document.querySelector(".displayed-data");
  var articles = "";
  var url = `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${streamInput.value}&country=uk&rapidapi-key=8e00451b55msh53c30d28f98049dp1c6ed2jsne4c2428dcf54`;
  console.log(url);
  $.getJSON(url, function (data) {
      console.log(data);
      console.log(data.results.length)
      if (data.results.length == undefined) {
          console.log('error');
          // Get the modal
          var modal = document.getElementById("myModal");
          // Get the button that opens the modal
          var btn = document.getElementById("myBtn");
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // modal displays if condition is false
          modal.style.display = "block";
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          };
      } else {
          var locations = data.results[0].locations;
          for (let i = 0; i < locations.length; i++) {
            var card = makeServiceCard(locations[i]);
            articles += card;
          }
          console.log(articles);
          servicesDiv.innerHTML = articles;

      }
  });
}

document.querySelector("#searchBtn").addEventListener("click", searchCompany);
