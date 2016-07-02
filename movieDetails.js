/**
 * Created by Binny Gandhi on 26-06-2016.
 */

$(document).ready(function () {
    var movieId = sessionStorage.getItem('movieId');
    var movieUrl = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=100fddc6b9f38a209e6ca009c791b4c3';
    var movieDetails = {};
    $.ajax({
        url: movieUrl,
        type: 'GET',
        dataType: 'json',
        success: function (result, status, xhr) {
            movieDetails = result;
            var movieContainer = $('#movie-container');
            var template = Handlebars.compile($('#movie-details-template').html());
            movieContainer.html(movieContainer.html() + template(movieDetails));
        },
        error: function (error, status, xhr) {
            window.alert(JSON.stringify(error, null, 2));
        }
    });

});