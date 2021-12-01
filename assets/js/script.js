//DOM Elements
var searchBarEl = document.querySelector(".movie-input");
var searchButtonEl = document.querySelector(".btn");
var displayedMovies = document.querySelector(".displayed-data");

// event Listener for search button
function displayMovies(movieName) {
  var apiURl = "http://www.omdbapi.com/?s=" + movieName + "&apikey=12490b6e";
  fetch(apiURl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          //delete later!!!
          console.log("API is working!", data);
          moviesAPI(data);
        });
      } else {
        alert("Error; Please input a valid movie/tv-show name name");
      }
    })
    .catch(function (error) {
      // Notice this `.catch()` getting chained onto the end of the `.then()`
      alert("Unable to connect to OMBD API");
    });
}

searchButtonEl.addEventListener("click", function () {
  displayMovies(searchBarEl.value);
});

var moviesAPI = function (data) {
  displayedMovies.innerHTML = "";

  // h2 element that displays 'Your Results'
  // all additional elements will be displayed within here
  var movieContainer = document.createElement("h2");
  movieContainer.textContent = "Your Results:";
  movieContainer.classList.add("results");
  displayedMovies.append(movieContainer);
  console.log(data);

  // for loop will create numerous elements based on how many results to the search there are
  for (var i = 0; i < data.Search.length; i++) {
    //Movie Title Element
    var movieData = data.Search[i];
    var movieNameResults = document.createElement("h4");
    movieNameResults.classList.add("movie-name");
    movieNameResults.innerHTML = movieData.Title;
    movieContainer.append(movieNameResults);

    // movie year release date
    var movieYearResults = document.createElement("p");
    movieYearResults.classList.add("movie-year");
    movieYearResults.innerHTML = "Year of Release: " + movieData.Year;
    movieContainer.append(movieYearResults);

    // Type (show or movie)
    var movieTypeResults = document.createElement("p");
    movieTypeResults.classList.add("movie-type");
    movieTypeResults.innerHTML = "Type: " + movieData.Type;
    movieContainer.append(movieTypeResults);

    var moviePosterResults = document.createElement("img");
    moviePosterResults.src = movieData.Poster;
    movieContainer.append(moviePosterResults);
    console.log(moviePosterResults);
    movieData++;
  }
  searchBarEl.value = "";
};
