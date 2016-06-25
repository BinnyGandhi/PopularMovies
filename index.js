/**
 * Created by Binny Gandhi on 24-06-2016.
 */

$(document).ready(function () {
    var popularMoviesListUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=100fddc6b9f38a209e6ca009c791b4c3';
    var movieDetails = {};

    $.ajax({
        url: popularMoviesListUrl,
        type: 'GET',
        dataType: 'json',
        success: function (result, xhr, status) {
            movieDetails = result;
            var listContainer = $('#list-container');
            var template = Handlebars.compile($('#movie-details-template').html());
            listContainer.html(listContainer.html() + template(movieDetails));
        },
        error: function (error, xhr, status) {
            window.alert(JSON.stringify(error, null, 2));
        }
    });
});