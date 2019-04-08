$(() => {
  let queryString = decodeURIComponent(window.location.search).substring(1);

  let movie_id = queryString.split("=")[1];

  let imageparallax = $("#imageparallax");

  $.get(`/api/movies/${movie_id}`, data => {
    let result = data;

    let backdrop_path =
      "https://image.tmdb.org/t/p/w1280" + result.backdrop_path;
    let poster_path = "https://image.tmdb.org/t/p/w342" + result.poster_path;

    let genres = result.genres;

    imageparallax.css("background-image", `url(${backdrop_path})`);

    $("#posterDiv").append(
      `<img src = "${poster_path}" class = "card cardDec bg-dark shadow-lg">`
    );

    $("#overviewDiv").append(
      `<h5 class = "card p-2 text-left text-white bg-danger shadow_lg">${
        result.overview
      }</h5>`
    );

    $("#title").append(`<b>${result.title}</b>`);

    $("#tag_line").text(result.tagline);

    let genreDiv = $("#genreDiv");

    for (genre of genres) {
      let name = genre.name;

      genreDiv.append(
        $(`<button class = "btn btn-outline-danger m-1">${name}</button>`)
      );
    }

    loadSimilar(movie_id);
  });

  function loadSimilar(movie_id) {
    $.get(`/api/movies/similar/${movie_id}`, data => {
      let results = data.results;

      let i = 0;

      for (i = 0; i < 9; i++) {
        let result = results[i];

        $("#similar_movies_large").append(
          createCardDiv(
            "https://image.tmdb.org/t/p/w500" + result.poster_path,
            result.title,
            "",
            result.vote_average
          ).click(() => {
            let movie_id = result.id;
            let queryString = "?id=" + movie_id;

            window.location.href = "movie.html" + queryString;
          })
        );
      }

      for (; i < 18; i++) {
        let result = results[i];

        $("#similar_movies_small").append(
          createCardDiv(
            "https://image.tmdb.org/t/p/w500" + result.poster_path,
            result.title,
            "",
            result.vote_average
          ).click(() => {
            let movie_id = result.id;
            let queryString = "?id=" + movie_id;

            window.location.href = "movie.html" + queryString;
          })
        );
      }
    });
  }

  function createCardDiv(imageUrl, title, overview, rating) {
    return $(`<div class= "col-12 col-md myDiv" style = "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer;">
          
    <div class="card cardDiv text-white shadow-lg" >
        <img
          src="${imageUrl}"
          class="card-img-top"
          alt="Generic placeholder image"
        />
        <div class= "card-img-overlay text-right">
        ${rating}⭐️
        </div>
        <div class="card-body">
          <p class="card-title text-center text-truncate m-0.5">${title}</p>
          <p class="card-text">
            ${overview}
          </p>
        </div>
      </div>

          </div>`);
  }
});
