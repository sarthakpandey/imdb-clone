$(() => {
      
    let queryString = decodeURIComponent(window.location.search).substring(1);
  
    let tv_id = queryString.split("=")[1];
    let imageparallax = $("#imageparallax");
  
    $.get(`/api/tvshows/${tv_id}`, data => {
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
        `<h5 class = "card p-2 text-left text-white bg-secondary shadow_lg">${
          result.overview
        }</h5>`
      );
  
      $("#title").append(`<b>${result.name}</b>`);
  
      $("#tag_line").text(result.status + ", " + result.type);
  
      let genreDiv = $("#genreDiv");
  
      for (genre of genres) {
        let name = genre.name;
  
        genreDiv.append(
          $(`<button class = "btn btn-outline-danger m-1">${name}</button>`)
        );
      }
  
      loadSimilar(tv_id);


    });
  
    function loadSimilar(tv_id) {

      $.get(`/api/tvshows/similar/${tv_id}`, data => {
        let results = data.results;
    
        let i = 0;
    
        for (i = 0; i < 9; i++) {
          let result = results[i];
    
          $('#similar_tv_shows_large').append(
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
    
          $('#similar_tv_shows_small').append(
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
  