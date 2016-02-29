/* ================================
Week 6 Assignment: Midterm Function Signatures
================================ */











var dataset = 'https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/geojson/philadelphia-garbage-collection-boundaries.geojson';

var myStyle = function(feature) { /*This would probably be something that changed the markers based on rating or # of ratings */   };

var eachFeature = function(feature, layer) {
  layer.on('click', function (e) {  /* this might pop up an input box for a marker if I can't get the functionality from the binPopup,
  clicking a submit button shold refresh so the marker can change based on input   */      });
};

var myFilter = function(feature) { /*maybe add a filter for # of stars*/};


var extraFunctions = function () { console.log("I really can't think of any other functions at the moment that I would need to add, but I'm sure they will come up as soon as I start.")}





/* I'd assume I can use something very similar to this to read in the data, store it and creating the map.  */

$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    var myFeatureGroup = L.geoJson(parsedData, {
      onEachFeature: eachFeature,
      style: myStyle,
      filter: myFilter
    }).addTo(map);
  });
});

var showResults = function() {
  /* =====================
  This function uses some jQuery methods that may be new. $(element).hide()
  will add the CSS "display: none" to the element, effectively removing it
  from the page. $(element).hide() removes "display: none" from an element,
  returning it to the page. You don't need to change this part.



  ===================== */
  $('#intro').hide();
  $('#results').show();
};

/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
