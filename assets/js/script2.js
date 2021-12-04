//DOM Elements
var searchBarEl = document.querySelector(".stream-input");
var searchButtonEl = document.querySelector(".btn");

// event Listener for search button
function displayMovies(movieName) {
  var apiURl =
    "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" +
    searchBarEl.value +
    "&country=uk&rapidapi-key=8e00451b55msh53c30d28f98049dp1c6ed2jsne4c2428dcf54";
  fetch(apiURl)
    .then(function (response) {
      return response.json().then(function (data) {
        //delete later!!!
        console.log("API is working!", data);

        if (data.Response === "False") {
          console.log("not working");
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
          moviesAPI(data);
        }
      });
    })
    .catch(function (error) {
      // Notice this `.catch()` getting chained onto the end of the `.then()`
      console.log("Unable to connect to OMBD API");
    });
}

searchButtonEl.addEventListener("click", function () {
  displayMovies(searchBarEl.value);
});
