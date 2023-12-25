document.addEventListener("DOMContentLoaded", function () {
  let api = "https://www.omdbapi.com/?i=tt3896198&apikey=3a09af49&t=";

  function searchMovie() {
    let movieName = document.getElementById("movieName");
    let query = api + movieName.value;
    let movieContainer = document.querySelector(".movieContainer");

    fetch(query)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data.Error) {
          alert("Please enter valid details.");
        } else {
          document.getElementById("title").innerText = data.Title;
          document.getElementById("poster").src = data.Poster;
          document.getElementById("desc").innerText = data.Plot;
          document.getElementById("writer").innerText = data.Writer;
          document.getElementById("awards").innerText = data.Awards;
          document.getElementById("date").innerText = data.Released;
          document.getElementById("actors").innerText = data.Actors;
          document.getElementById("directors").innerText = data.Director;
          document.getElementById("collection").innerText = data.BoxOffice;
          document.getElementById("ratings").innerText = data.imdbRating;

          movieContainer.classList.remove("vis");
        }
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        alert("An error occurred. Please try again.");
      });
  }

  document
    .getElementById("movieName")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        searchMovie();
        event.preventDefault();
      }
    });
});
