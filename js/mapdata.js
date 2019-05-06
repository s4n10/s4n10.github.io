/*
   Sachin Galahititya
   C1877565 
   CMT212 - Visual Communication and Information Design : Coursework 2 
*/


/* 
    Initializing the map, at the centre( roughly the centre) of the UK
    to provide a better focus on load, the zoom level was set to "6",
    bcause it was found to be the best inital view point for the map at,
    the start
*/


var mymap = L.map('mapid').setView([53.4795, -2.2453], 6);



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2FjaGluZ2FsYWhpdGl5YSIsImEiOiJjanZiOXQybzQxNms2NDRtanlkNTE4ZnU0In0.io05V9S4MjZgp-syqg32KA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2FjaGluZ2FsYWhpdGl5YSIsImEiOiJjanZiOXQybzQxNms2NDRtanlkNTE4ZnU0In0.io05V9S4MjZgp-syqg32KA'
}).addTo(mymap);

/*
    According to the data provided by the BBC dataset, the cities were 
    searched up on open maps to find the related coordiantes and then 
    they were mapped here to provide markers on each major city, along with 
    the number of available charging points.
*/

var london = L.marker([51.5, -0.09]).addTo(mymap);
london.bindPopup("<b>City of London</b> <br> Number of Charging Points : <b>22</b> ");

var birmingham = L.marker([52.4811, -1.9006]).addTo(mymap);
birmingham.bindPopup("<b> Birmingham </b> <br> Number of Charging Points : <b>61</b> ");

var manchester = L.marker([53.4795, -2.2453]).addTo(mymap);
manchester.bindPopup("<b>City of Manchester</b> <br> Number of Charging Points : <b>48</b> ");

var glasgow = L.marker([55.8601,  -4.2527]).addTo(mymap);
glasgow.bindPopup("<b> Glasgow City </b> <br> Number of Charging Points : <b>71</b> ");

var newcastleUT = L.marker([54.9741, -1.6136]).addTo(mymap);
newcastleUT.bindPopup("<b> Newcastle upon Tyne </b> <br> Number of Charging Points : <b>48</b> ");

var Sheffield = L.marker([53.3817, -1.4777]).addTo(mymap);
Sheffield.bindPopup("<b> Sheffield </b> <br> Number of Charging Points : <b>27</b> ");

var Liverpool = L.marker([53.4071, -2.9924]).addTo(mymap);
Liverpool.bindPopup("<b> Liverpool </b> <br> Number of Charging Points : <b>22</b> ");

var Liverpool = L.marker([53.4071, -2.9924]).addTo(mymap);
Liverpool.bindPopup("<b> Liverpool </b> <br> Number of Charging Points : <b>22</b> ");

var Leeds = L.marker([53.7925, -1.5504]).addTo(mymap);
Leeds.bindPopup("<b> Leeds </b> <br> Number of Charging Points : <b>58</b> ");

var Bristol = L.marker([51.4566, -2.6003]).addTo(mymap);
Bristol.bindPopup("<b> Bristol </b> <br> Number of Charging Points : <b>56</b> ");

var Belfast = L.marker([54.5975, -5.9354]).addTo(mymap);
Belfast.bindPopup("<b> Belfast </b> <br> Number of Charging Points : <b>29</b> ");

var Brighton = L.marker([50.8224, -0.1373]).addTo(mymap);
Brighton.bindPopup("<b> Brighton </b> <br> Number of Charging Points : <b>26</b> ");

var Plymouth = L.marker([50.3696, -4.1432]).addTo(mymap);
Plymouth.bindPopup("<b> Plymouth </b> <br> Number of Charging Points : <b>32</b> ");

var Nottingham = L.marker([52.953, -1.1518]).addTo(mymap);
Nottingham.bindPopup("<b> Nottingham </b> <br> Number of Charging Points : <b>50</b> ");

var Cardiff = L.marker([51.4792, -3.1778]).addTo(mymap);
Cardiff.bindPopup("<b> Cardiff </b> <br> Number of Charging Points : <b>21</b> ");

var Oxford = L.marker([51.7535, -1.2702]).addTo(mymap);
Oxford.bindPopup("<b> Oxford </b> <br> Number of Charging Points : <b>26</b> ");

var Canterbury = L.marker([51.28, 1.0794]).addTo(mymap);
Canterbury.bindPopup("<b> Canterbury </b> <br> Number of Charging Points : <b>13</b> ");

var Swansea = L.marker([51.6201, -3.9496]).addTo(mymap);
Swansea.bindPopup("<b> Swansea </b> <br> Number of Charging Points : <b>20</b> ");


var Powys = L.marker([52.349, -3.466]).addTo(mymap);
Powys.bindPopup("<b> Powys </b> <br> Number of Charging Points : <b>46</b> ");

var Newport = L.marker([51.5907, -2.9993]).addTo(mymap);
Newport.bindPopup("<b> Newport </b> <br> Number of Charging Points : <b>12</b> ");

var Peterborough = L.marker([52.5726, -0.2451]).addTo(mymap);
Peterborough.bindPopup("<b> Peterborough </b> <br> Number of Charging Points : <b>21</b> ");

var Norwich = L.marker([52.6297, 1.2943]).addTo(mymap);
Norwich.bindPopup("<b> Norwich </b> <br> Number of Charging Points : <b>23</b> ");

var York = L.marker([53.9597, -1.0815]).addTo(mymap);
York.bindPopup("<b> York </b> <br> Number of Charging Points : <b>40</b> ");

var Caerphilly = L.marker([51.574, -3.2209]).addTo(mymap);
Caerphilly.bindPopup("<b> Caerphilly </b> <br> Number of Charging Points : <b> 1 </b> ");

var MerthyrTydfil = L.marker([51.7495, -3.3793]).addTo(mymap);
MerthyrTydfil.bindPopup("<b> Merthyr Tydfil </b> <br> Number of Charging Points : <b> 1 </b> ");

