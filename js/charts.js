/*
   Sachin Galahititya
   C1877565 
   CMT212 - Visual Communication and Information Design : Coursework 2 
*/
var temp = [];

/*
 Variables : information, fuel,  countries , housing 
 Are imported from data.js in the main page 
 making it available here

 getData () function is called in to get data from the 
 json object this function loops through the fuel object with 
 the requested fuel type, below shows the an example
 structure of the json file.  
{
    "Petrol": {
      "2001": 2122.512,
      "2002": 2042.488,

   },
    "Diesel": {
      "2001": 460.646,
      "2002": 636.794,
    },
 and return an array of years and its respective 
 values back 
*/
function getData(type) {
    temp = [];      
        for (var property1 in fuel[type]) { 
            temp.push(fuel[type][property1])
        }
        return temp;   
}
//Serves a same purpose as the function above
function getCountryData(type) {
    temp = [];      
    for (var property1 in countries[type]) { 
        temp.push(countries[type][property1])
    }
    return temp;   
}

var housingTemp = []

function getParkingData(type){
    housingTemp = [];
    for (var property1 in housing[type]) {
        housingTemp.push(housing[type][property1])
    }
    return housingTemp;
}

// Used to extract the infomration related to each year, to be 
// shown on the tooltip, follows similar logic to the function 
// explained above
function checkForInformation(category, year) {
    var info = information[category][year]
    if (info){
        return info
    }else {
        return ''
    }
    
};

/*
 Custom tooltips were made to accomodate the information 
 readings provided for each year, as the default tooltips
 provided by chartJS could not fit in fairly large 
 texts custom tooltips were made to display information related 
 to each year on hover.
*/
 Chart.defaults.global.pointHitDetectionRadius = 1;
var customTooltips = function (tooltip) {

    // Tooltip Element
    var tooltipEl = document.getElementById('chartjs-tooltip');
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.innerHTML = '<table></table>';
        this._chart.canvas.parentNode.appendChild(tooltipEl);
    }
    // Hide if no tooltip
    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }
    // Set caret Position
    tooltipEl.classList.remove('above', 'below', 'no-transform');
    if (tooltip.yAlign) {
        tooltipEl.classList.add(tooltip.yAlign);
    } else {
        tooltipEl.classList.add('no-transform');
    }

    function getBody(bodyItem) {
        return bodyItem.lines;
    }
    // Set Text
    if (tooltip.body) {       

        var titleLines = tooltip.title || [];
        var bodyLines = tooltip.body.map(getBody);
        /*
        In order to identify where the tooltip is being called,
        The bodyLines object carries the respective value, related to a 
        certain tooltip call example 
        "2002": 2042.488,
        inorder to only exract the year from this the string was split where the 
         ':' was, and then the year is passed onto the checkForInformation 
         function to get the respective infomration related to that year. 
        */
        var category = bodyLines[0][0].split(":")[0]
        var year = tooltip.dataPoints[0].xLabel        
        var information = checkForInformation(category,year)
     
        var innerHtml = '<thead>';
        titleLines.forEach(function (title) {
            innerHtml += '<tr><th>' + '<div class="tooltipHeading">'+ title +'</div>' +'</th></tr>';
        });
        innerHtml += '</thead><tbody>';
        bodyLines.forEach(function (body, i) {
            console.log("bodsyyyu",body)
            var colors = tooltip.labelColors[i];
            var style = 'background:' + colors.backgroundColor;
            style += '; border-color:' + colors.borderColor;
            style += '; color: white';
            style += '; border-width: 2px';
            var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';

            innerHtml += '<tr><td>' + span + '<b>' + body +'</b>' + '</br>' +'<div class="tooltipSub">'+ information + '</div>'+'</td></tr>';
        });
        innerHtml += '</tbody>';

        var tableRoot = tooltipEl.querySelector('table');
        tableRoot.innerHTML = innerHtml;
    }
    var positionY = this._chart.canvas.offsetTop;
    var positionX = this._chart.canvas.offsetLeft;
    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
    tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
    tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
    tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
};
/*
    Fuel Type line chart data and config, the above functions 
    are being used here to get the relavant data
*/
var lineChartData = {
    labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
    datasets: [{
            label: 'Petrol',
            borderColor: 'red',
            backgroundColor: 'red',
            fill: false,
            data: getData('Petrol'),
            lineTension: 0,
        }, {
            label: 'Diesel',
            borderColor: 'grey',
            backgroundColor: 'grey',
            fill: false,
            data: getData("Diesel"),
            lineTension: 0,
        },
        {
            label: 'HybridElectric',
            borderColor: 'green',
            backgroundColor: 'green',
            fill: false,
            data: getData("HybridElectric"),
            lineTension: 0,
        },
        {
            label: 'PlugInHybridElectric',
            borderColor: 'orange',
            backgroundColor: 'orange',
            fill: false,
            data: getData("PlugInHybridElectric"),
            lineTension: 0,
        },
        {
            label: 'BatteryElectric',
            borderColor: 'blue',
            backgroundColor: 'blue',
            fill: false,
            data: getData("BatteryElectric"),
            lineTension: 0,
        },

    ]
};
/*
   Countires data linechart config
*/
var countryData = {
    labels: [
        '2011', 
        '2012', 
        '2013', 
        '2014', 
        '2015', 
        '2016', 
        '2017', 
        '2018'
    ],
    datasets: [{
            label: 'China',
            borderColor: '#e53935',
            backgroundColor: '#e53935',
            fill: false,
            data: getCountryData('China'),
            lineTension: 0,
            hidden: false,
        }, {
            label: 'France',
            borderColor: '#43A047',
            backgroundColor: '#43A047',
            fill: false,
            data: getCountryData("France"),
            lineTension: 0,
            hidden: false,
        },
        {
            label: 'Germany',
            borderColor: '#F57C00',
            backgroundColor: '#F57C00',
            fill: false,
            data: getCountryData("Germany"),
            lineTension: 0,
        },
        {
            label: 'Netherlands',
            borderColor: '#37474F',
            backgroundColor: '#37474F',
            fill: false,
            data: getCountryData("Netherlands"),
            lineTension: 0,
        },
        {
            label: 'Norway',
            borderColor: '#0097A7',
            backgroundColor: '#0097A7',
            fill: false,
            data: getCountryData("Norway"),
            lineTension: 0,
            hidden: false,
        },
        {
            label: 'United Kingdom',
            borderColor: '#304FFE',
            backgroundColor: '#304FFE',
            fill: false,
            data: getCountryData("UK"),
            lineTension: 0,
            hidden: false,
        },
        {
            label: 'United States',
            borderColor: '#757575',
            backgroundColor: '#757575',
            fill: false,
            data: getCountryData("US"),
            lineTension: 0,
            hidden: false,
        },

    ]
};
/*
   Parking data polarArea Chart config
*/
var parkingData = {
    labels: [
        'Garage',
        'Other off road parking',
        'Adequate street parking',
        'Inadequate street parking',
        'No parking provision'
    ],
    datasets: [{
    //# [Source] - https://www.gov.uk/government/statistics/english-housing-survey-2016-stock-condition
      data: [38.1,28.8,17.6,13.9,1.6],
      backgroundColor: [
        "rgba(255, 0, 0, 0.5)",
        "rgba(100, 255, 0, 0.5)",
        "rgba(200, 50, 255, 0.5)",
        "rgba(0, 100, 255, 0.5)"
      ]
    }]
  };
  /*
   Garage Status line Chart config
  */
  var lineChartParkingData = {
    labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    datasets: [{
            label: 'Garage',
            borderColor: 'red',
            backgroundColor: 'red',
            fill: false,
            data: getParkingData('Garage'),
            lineTension: 0,
        }, {
            label: 'Other Off-Road Parking',
            borderColor: 'grey',
            backgroundColor: 'grey',
            fill: false,
            data: getParkingData("OtherOffRoadParking"),
            lineTension: 0,
            hidden:true,
        },
        {
            label: 'Adequate Street Parking',
            borderColor: 'green',
            backgroundColor: 'green',
            fill: false,
            data: getParkingData("AdequateStreetParking"),
            lineTension: 0,
            hidden:true,
        },
        {
            label: 'Inadequate Street Parking',
            borderColor: 'orange',
            backgroundColor: 'orange',
            fill: false,
            data: getParkingData("InadequateStreetParking"),
            lineTension: 0,
            hidden:true,
        },
        {
            label: 'No Parking Provision',
            borderColor: 'blue',
            backgroundColor: 'blue',
            fill: false,
            data: getParkingData("NoParkingProvision"),
            lineTension: 0,
            hidden:true,
        },

    ]
};



window.onload = function () {

    var countriesLine = document.getElementById("countries").getContext("2d");
    window.myLine = Chart.Line(countriesLine, {
        data: countryData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: false,
                fontSize: 20,
                text: 'Countires Comparision'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, ],
            },
            tooltips: {
                intersect: false,
            },
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'nearest',
            stacked: false,
            title: {
                display: false,
                text: '',
                fontSize: 20,
            },
            legend: {
                position: 'top'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, ],
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },

            tooltips: {
                enabled: false,
                intersect: false,
                custom: customTooltips,
                titleFontSize: 16,
                titleMarginBottom: 10,
                bodyFontSize: 16,
                bodySpacing: 10,
                width: 10,
            }
        }
    });
    var polarchart = document.getElementById('chart-area');
    var polarAreaChart = new Chart(polarchart, {
        type: 'polarArea',
        data: parkingData,
        options: {
            tooltips: {         
                titleFontSize: 15,
                bodyFontSize: 15
              }
        }      
      });
      var parkingLine = document.getElementById("parkingarea").getContext("2d");
      window.myLine = Chart.Line(parkingLine, {
          data: lineChartParkingData,
          options: {
              responsive: true,
              hoverMode: 'index',
              stacked: false,
              title: {
                  display: true,
                  fontSize: 20,
                  text: ''
              },
              scales: {
                  yAxes: [{
                      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                      display: true,
                      position: 'left',
                      id: 'y-axis-1',
                  }, ],
              },
              tooltips: {
                  intersect: false,
              },
          }
      });

};

document.getElementById('toggleChina').addEventListener('click', function() {
    countryData.datasets[0].hidden = 'true'
    window.myLine.update();
});