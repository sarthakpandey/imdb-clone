$(() => {
  const API_KEY = "";
  const MAIN_URL = "https://api.themoviedb.org/3/";

  const NOW_PLAYING_MOVIES_URL =
    MAIN_URL + "movie/now_playing?api_key=" + API_KEY + "&language=en-US";

  const POPULAR_MOVIES_URL =
    MAIN_URL + "movie/popular?api_key=" + API_KEY + "&language=en-US";

  const TOP_RATED_MOVIES_URL =
    MAIN_URL + "movie/top_rated?api_key=" + API_KEY + "&language=en-US";

  const UPCOMING_MOVIES_URL =
    MAIN_URL + "movie/upcoming?api_key=" + API_KEY + "&language=en-US";

  const AIRING_TODAY_TV_SHOWS_URL =
    MAIN_URL + "tv/airing_today?api_key=" + API_KEY;

  const ON_THE_AIR_TV_SHOWS_URL = MAIN_URL + "tv/on_the_air?api_key=" + API_KEY;

  const POPULAR_TV_SHOWS_URL = MAIN_URL + "tv/popular?api_key=" + API_KEY;

  const TOP_RATED_TV_SHOWS_URL = MAIN_URL + "tv/top_rated?api_key=" + API_KEY;

  // let now_playing_movies_large_div = $("#now_playing_movies_large");

  // let now_playing_movies_small_div = $("#now_playing_movies_small");

  let now_playing_carousel = $("#now_playing_carousel");

  let popular_movies_large_div = $("#popular_movies_large");

  let popular_movies_small_div = $("#popular_movies_small");

  let top_rated_movies_large_div = $("#top_rated_movies_large");

  let top_rated_movies_small_div = $("#top_rated_movies_small");

  let upcoming_movies_large_div = $("#upcoming_movies_large");

  let upcoming_movies_small_div = $("#upcoming_movies_small");

  let airing_today_carousel = $("#airing_today_carousel");

  let on_the_air_tv_shows_large_div = $("#on_the_air_tv_shows_large");

  let on_the_air_tv_shows_small_div = $("#on_the_air_tv_shows_small");

  let popular_tv_shows_large_div = $("#popular_tv_shows_large");

  let popular_tv_shows_small_div = $("#popular_tv_shows_small");

  let top_rated_tv_shows_large_div = $("#top_rated_tv_shows_large");

  let top_rated_tv_shows_small_div = $("#top_rated_tv_shows_small");

  $.get(NOW_PLAYING_MOVIES_URL, data => {
    let results = data.results;

    now_playing_carousel.append(
      $(`<div class="carousel-item active" style = "cursor: pointer">
    <img src="${"https://image.tmdb.org/t/p/w1280" +
      results[0].backdrop_path}" class="mx-auto d-block myCImg" alt="...">
      <div class="carousel-caption d-none d-md-block">
    <h1 class = "font-weight-bold ">${results[0].title}</h1>
    <p class = "">${results[0].overview}</p>
    </div>
    </div>`).click(() => {
        let movie_id = results[0].id;
        let queryString = "?id=" + movie_id;

        window.location.href = "movie.html" + queryString;
      })
    );

    $("#now_playing_carousel_indicators").append(
      $(
        `<li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>`
      )
    );

    for (let i = 1; i < 20; i++) {
      now_playing_carousel.append(
        $(`<div class="carousel-item" style = "cursor: pointer">
    <img src="${"https://image.tmdb.org/t/p/w1280" +
      results[i].backdrop_path}" class="mx-auto d-block myCImg" alt="...">
      <div class="carousel-caption d-none d-md-block">
    <h1 class = "font-weight-bold ">${results[i].title}</h1>
    <p class = "">${results[i].overview}</p>
    </div>
    </div>`).click(() => {
          let movie_id = results[i].id;
          let queryString = "?id=" + movie_id;

          window.location.href = "movie.html" + queryString;
        })
      );
      $("#now_playing_carousel_indicators").append(
        $(
          `<li data-target="#carouselExampleControls" data-slide-to="${i}"></li>`
        )
      );
    }

    let img_path = "https://wallpaperaccess.com/full/271022.jpg";

    now_playing_carousel.append(
      $(`<div class="carousel-item" style = "cursor: pointer">
    <img src="${img_path}" class="mx-auto d-block myCImg" alt="...">
      <div class="carousel-caption d-none d-md-block">
    <h1 class = "font-weight-bold "><a href = "#">See More ?</a></h1>
    </div>
    </div>`)
    );

    $("#now_playing_carousel_indicators").append(
      $(
        `<li data-target="#carouselExampleControls" data-slide-to="${20}" class="active"></li>`
      )
    );

    // for (i = 0; i < 3; i++) {
    //   let result = results[i];

    //   now_playing_movies_large_div.append(
    //     createCardDiv(
    //       "https://image.tmdb.org/t/p/w780" + result.backdrop_path,
    //       result.title,
    //       ""
    //     )
    //   );
    // }

    // for (; i < 10; i++) {
    //   let result = results[i];

    //   now_playing_movies_small_div.append(
    //     createCardDiv(
    //       "https://image.tmdb.org/t/p/w500" + result.poster_path,
    //       result.title,
    //       ""
    //     )
    //   );
    // }
  });

  $.get(POPULAR_MOVIES_URL, data => {
    let results = data.results;

    let i = 0;

    for (i = 0; i < 4; i++) {
      let result = results[i];

      popular_movies_large_div.append(
        createCardDiv(
          "https://image.tmdb.org/t/p/w780" + result.backdrop_path,
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

    for (; i < 9; i++) {
      let result = results[i];

      popular_movies_small_div.append(
        createCardDiv(
          "https://image.tmdb.org/t/p/w780" + result.backdrop_path,
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

  $.get(TOP_RATED_MOVIES_URL, data => {
    let results = data.results;

    let i = 0;

    for (i = 0; i < 5; i++) {
      let result = results[i];

      top_rated_movies_large_div.append(
        createCardDiv(
          "https://image.tmdb.org/t/p/w780" + result.backdrop_path,
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

    for (; i < 10; i++) {
      let result = results[i];

      top_rated_movies_small_div.append(
        createCardDiv(
          "https://image.tmdb.org/t/p/w780" + result.backdrop_path,
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

  $.get(UPCOMING_MOVIES_URL, data => {
    let results = data.results;

    let i = 0;

    for (i = 0; i < 9; i++) {
      let result = results[i];

      upcoming_movies_large_div.append(
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

      upcoming_movies_small_div.append(
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

  $.get(AIRING_TODAY_TV_SHOWS_URL, data => {
    let results = data.results;

    airing_today_carousel.append(
      $(`<div class="carousel-item active" style = "cursor: pointer">
    <img src="${"https://image.tmdb.org/t/p/w1280" +
      results[0].backdrop_path}" class="mx-auto d-block myCImg" alt="...">
      <div class="carousel-caption d-none d-md-block">
    <h1 class = "font-weight-bold ">${results[0].name}</h1>
    <p class = "">${results[0].overview}</p>
    </div>
    </div>`).click(() => {
        let tv_show_id = results[0].id;
        let queryString = "?id=" + tv_show_id;

        window.location.href = "tvshow.html" + queryString;
      })
    );

    $("#airing_today_carousel_indicators").append(
      $(
        `<li data-target="#carouselExampleControls1" data-slide-to="0" class="active"></li>`
      )
    );

    for (let i = 1; i < 20; i++) {
      airing_today_carousel.append(
        $(`<div class="carousel-item" style = "cursor: pointer">
    <img src="${"https://image.tmdb.org/t/p/w1280" +
      results[i].backdrop_path}" class="mx-auto d-block myCImg" alt="...">
      <div class="carousel-caption d-none d-md-block">
    <h1 class = "font-weight-bold ">${results[i].name}</h1>
    <p class = "">${results[i].overview}</p>
    </div>
    </div>`).click(() => {
          let tv_show_id = results[i].id;
          let queryString = "?id=" + tv_show_id;

          window.location.href = "tvshow.html" + queryString;
        })
      );
      $("#airing_today_carousel_indicators").append(
        $(
          `<li data-target="#carouselExampleControls1" data-slide-to="${i}"></li>`
        )
      );
    }

    let img_path = "https://wallpaperaccess.com/full/271022.jpg";

    airing_today_carousel.append(
      $(`<div class="carousel-item" style = "cursor: pointer">
    <img src="${img_path}" class="mx-auto d-block myCImg" alt="...">
      <div class="carousel-caption d-none d-md-block">
    <h1 class = "font-weight-bold "><a href = "#">See More ?</a></h1>
    </div>
    </div>`)
    );

    $("#airing_today_carousel_indicators").append(
      $(
        `<li data-target="#carouselExampleControls1" data-slide-to="${20}" class="active"></li>`
      )
    );
  });

  $.get(ON_THE_AIR_TV_SHOWS_URL, data => {
    let results = data.results;

    let i = 0;

    for (i = 0; i < 4; i++) {
      let result = results[i];

      on_the_air_tv_shows_large_div.append(
        createCardDiv1(
          "https://image.tmdb.org/t/p/w780" + result.backdrop_path,
          result.name,
          "",
          result.vote_average
        ).click(() => {
          let tv_show_id = result.id;
          let queryString = "?id=" + tv_show_id;

          window.location.href = "tvshow.html" + queryString;
        })
      );
    }

    for (; i < 9; i++) {
      let result = results[i];

      on_the_air_tv_shows_small_div.append(
        createCardDiv1(
          "https://image.tmdb.org/t/p/w780" + result.backdrop_path,
          result.name,
          "",
          result.vote_average
        ).click(() => {
          let tv_show_id = result.id;
          let queryString = "?id=" + tv_show_id;

          window.location.href = "tvshow.html" + queryString;
        })
      );
    }
  });

  $.get(POPULAR_TV_SHOWS_URL, data => {
    let results = data.results;

    let i = 0;

    for (i = 0; i < 5; i++) {
      let result = results[i];

      popular_tv_shows_large_div.append(
        createCardDiv1(
          "https://image.tmdb.org/t/p/w780" + result.backdrop_path,
          result.name,
          "",
          result.vote_average
        ).click(() => {
          let tv_show_id = result.id;
          let queryString = "?id=" + tv_show_id;

          window.location.href = "tvshow.html" + queryString;
        })
      );
    }

    for (; i < 10; i++) {
      let result = results[i];

      popular_tv_shows_small_div.append(
        createCardDiv1(
          "https://image.tmdb.org/t/p/w780" + result.backdrop_path,
          result.name,
          "",
          result.vote_average
        ).click(() => {
          let tv_show_id = result.id;
          let queryString = "?id=" + tv_show_id;

          window.location.href = "tvshow.html" + queryString;
        })
      );
    }
  });

  $.get(TOP_RATED_TV_SHOWS_URL, data => {
    let results = data.results;

    let i = 0;

    for (i = 0; i < 9; i++) {
      let result = results[i];

      top_rated_tv_shows_large_div.append(
        createCardDiv1(
          "https://image.tmdb.org/t/p/w500" + result.poster_path,
          result.name,
          "",
          result.vote_average
        ).click(() => {
          let tv_show_id = result.id;
          let queryString = "?id=" + tv_show_id;

          window.location.href = "tvshow.html" + queryString;
        })
      );
    }

    for (; i < 18; i++) {
      let result = results[i];

      top_rated_tv_shows_small_div.append(
        createCardDiv1(
          "https://image.tmdb.org/t/p/w500" + result.poster_path,
          result.name,
          "",
          result.vote_average
        ).click(() => {
          let tv_show_id = result.id;
          let queryString = "?id=" + tv_show_id;

          window.location.href = "tvshow.html" + queryString;
        })
      );
    }
  });

  function createCardDiv(imageUrl, title, overview, rating) {
    return $(`<div class= "col myDiv" style = "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer;">
          
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

  function createCardDiv1(imageUrl, title, overview, rating) {
    return $(`<div class= "col myDiv" style = "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer;">
          
    <div class="card cardDiv1 text-white shadow-lg" >
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
