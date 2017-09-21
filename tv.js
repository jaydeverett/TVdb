document.addEventListener("DOMContentLoaded", function() {

  var button = document.querySelector('.getshow')
  var showBoxes = document.querySelectorAll('.showbox')


  button.addEventListener('click', function() {
    console.log("click successful")

    $.ajax( {
    url: 'https://api.themoviedb.org/3/tv/popular?api_key=22eb58e75e4e7b2d6eb174b6787d1d40',
    method: 'GET',
    dataType: 'json',
    data: {
      }
    } ).done( function( data ) {
       console.log("request succeeded");
       console.log(data);

          for (var i = 0; i < data.results.length; i++) {

            var show = data.results[i];
            var showBox = showBoxes[i]

            var myElement = document.createElement( 'p');
            var myElement2 = document.createElement( 'p');
            var myElement3 = document.createElement( 'p');
            myElement.innerText = show.name;
            myElement2.innerText = show.overview;
            myElement3.innerText = 'First air date: ' + show.first_air_date;
            showBox.appendChild(myElement);
            showBox.appendChild(myElement2);
            showBox.appendChild(myElement3);
      }

    })

    $('.showbox').show();

  });

})
