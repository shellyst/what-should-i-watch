//DOM Elements
var searchBarEl = document.querySelector(".movie-input");
var searchButtonEl = document.querySelector(".btn");
var displayedMovies = document.querySelector(".displayed-data");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function displayMovies(movieName) {
  var apiURl = "https://www.omdbapi.com/?s=" + movieName + "&apikey=12490b6e";
  fetch(apiURl)
    .then(function (response) {
      return response.json().then(function (data) {
        //delete later!!!
        console.log("API is working!", data);
        console.log(data.Search.imdbID);
        console.log("vlad the data works", data);
        // confirm
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
          console.log("else statement", data);
          moviesAPI(data);
          additionalInfoAPI(data);
        }
      });
    })
    .catch(function (error) {
      // Notice this `.catch()` getting chained onto the end of the `.then()`
      console.log("Unable to connect to OMBD API");
    });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalbtn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("modalBtn").addEventListener("click", function() {
  modal.style.display="block";
});

searchButtonEl.addEventListener("click", function () {
  displayMovies(searchBarEl.value);
  storesearch(searchBarEl.value);
});

function storesearch(whattostore) {
  localStorage.search = whattostore;
  document.getElementById("past-search_1").innerHTML = localStorage.search;
  document.getElementById("past-search_2").innerHTML = localStorage.search1;
  document.getElementById("past-search_3").innerHTML = localStorage.search2;
  localStorage.search2 = localStorage.search1;
  localStorage.search1 = localStorage.search;
}

// h2 element that displays 'Your Results'
// all additional elements will be displayed within here
var movieContainer = document.createElement("div");
movieContainer.classList.add("results");
displayedMovies.append(movieContainer);

var moviesAPI = function (data) {
  movieContainer.innerHTML = "";
  console.log(data);
  // for loop will create numerous elements based on how many results to the search there are
  for (var i = 0; i < data.Search.length; i++) {
    var movieData = data.Search[i];
    movieData++;
  }
  searchBarEl.value = "";
};

var additionalInfoAPI = function (data) {
  console.log("the Array is", Array.isArray(data.Search));
  for (var i = 0; i < data.Search.length; i++) {
    let url =
      "https://www.omdbapi.com/?i=" +
      data.Search[i].imdbID +
      "&apikey=12490b6e";
    fetch(url)
      .then(function (response) {
        console.log("im working");
        return response.json().then(function (data) {
          console.log(data);
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
            addedMovie(data);
          }
        });
      })
      .catch(function (error) {
        // Notice this `.catch()` getting chained onto the end of the `.then()`
        console.log("Unable to connect to OMBD API");
        console.log(error.message);
      });
  }
};

var addedMovie = function (data) {
  var movieName = document.createElement("h3");
  movieName.innerHTML = data.Title;
  movieContainer.append(movieName);

  var moviePoster = document.createElement("img");
  moviePoster.src = data.Poster;
  movieContainer.append(moviePoster);

  var movieReleaseYear = document.createElement("p");
  movieReleaseYear.innerHTML = "Release Date: " + data.Released + " 📅";
  movieContainer.append(movieReleaseYear);

  var movieGenre = document.createElement("p");
  movieGenre.innerHTML = "Genre: " + data.Genre + "  🧙‍♂️";
  movieContainer.append(movieGenre);

  var movieDirector = document.createElement("p");
  movieDirector.innerHTML = "Director: " + data.Director + " 🎬";
  movieContainer.append(movieDirector);

  var movieRating = document.createElement("p");
  movieRating.innerHTML = "Rating: " + data.Rated + " 🔞";
  movieContainer.append(movieRating);

  var movieCountry = document.createElement("p");
  movieCountry.innerHTML = "Country: " + data.Country + " 🏙";
  movieContainer.append(movieCountry);

  var movieAwards = document.createElement("p");
  movieAwards.innerHTML = "Awards: " + data.Awards + " 🏆";
  movieContainer.append(movieAwards);

  var movieRatingTitle = document.createElement("p");
  movieRatingTitle.textContent = "Ratings: ";
  movieContainer.append(movieRatingTitle);

  for (var i = 0; i < data.Ratings.length; i++) {
    var movieRatings = document.createElement("span");
    movieRatings.innerHTML =
      data.Ratings[i].Source + " " + data.Ratings[i].Value + ", ";

    movieRatingTitle.append(movieRatings);
  }

  var moviePlot = document.createElement("p");
  moviePlot.innerHTML = "Plot: " + data.Plot + " ✍";
  movieContainer.append(moviePlot);

  var movieActors = document.createElement("p");
  movieActors.innerHTML = "Cast: " + data.Actors + " 🎭";
  movieContainer.append(movieActors);
};
