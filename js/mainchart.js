var request1 = new XMLHttpRequest()


function temp_my_active(a,b,c)
{
if(typeof(a)=="undefined")
a=0;
if(typeof(b)=="undefined")
b=0;
if(typeof(c)=="undefined")
c=0;
return c-b-a;
}

function chart_name(x)
{
switch(x)
{
case  "AN"  : return  "Andaman_and_Nicobar_Islands";
case  "AP"  : return  "Andhra_Pradesh";
case  "AR"  : return  "Arunachal_Pradesh";
case  "AS"  : return  "Assam";
case  "BR"  : return  "Bihar";
case  "CH"  : return  "Chandigarh";
case  "CT"  : return  "Chhattisgarh";
case  "DN"  : return  "Dadra_and_Nagar_Haveli_and_Daman_and_Diu";
case  "DL"  : return  "Delhi";
case  "GA"  : return  "Goa";
case  "GJ"  : return  "Gujarat";
case  "HR"  : return  "Haryana";
case  "HP"  : return  "Himachal_Pradesh";
case  "JK"  : return  "Jammu_and_Kashmir";
case  "JH"  : return  "Jharkhand";
case  "KA"  : return  "Karnataka";
case  "KL"  : return  "Kerala";
case  "LA"  : return  "Ladakh";
case  "LD"  : return  "Lakshadweep";
case  "MP"  : return  "Madhya_Pradesh";
case  "MH"  : return  "Maharashtra";
case  "MN"  : return  "Manipur";
case  "ML"  : return  "Meghalaya";
case  "MZ"  : return  "Mizoram";
case  "NL"  : return  "Nagaland";
case  "OR"  : return  "Odisha";
case  "PY"  : return  "Puducherry";
case  "PB"  : return  "Punjab";
case  "RJ"  : return  "Rajasthan";
case  "SK"  : return  "Sikkim";
case  "TN"  : return  "Tamil_Nadu";
case  "TG"  : return  "Telangana";
case  "TR"  : return  "Tripura";
case  "UP"  : return  "Uttar_Pradesh";
case  "UT"  : return  "Uttarakhand";
case  "WB"  : return  "West_Bengal";
case      "TT"  : return  "India";

}
}




request1.open('GET', 'https://api.covid19india.org/v4/data-all.json', true)
request1.onload = function () {
  // Begin accessing JSON data here

  var obj1 = JSON.parse(this.response)

  if (request1.status >= 200 && request1.status < 400) {
    console.log("chart working")
    
  } else {
    console.log('error')
  }
  
  var active_Andaman_and_Nicobar_Islands=[[],[],[],[]];
var active_Andhra_Pradesh=[[],[],[],[]];
var active_Arunachal_Pradesh=[[],[],[],[]];
var active_Assam=[[],[],[],[]];
var active_Bihar=[[],[],[],[]];
var active_Chandigarh=[[],[],[],[]];
var active_Chhattisgarh=[[],[],[],[]];
var active_Dadra_and_Nagar_Haveli_and_Daman_and_Diu=[[],[],[],[]];
var active_Delhi=[[],[],[],[]];
var active_Goa=[[],[],[],[]];
var active_Gujarat=[[],[],[],[]];
var active_Haryana=[[],[],[],[]];
var active_Himachal_Pradesh=[[],[],[],[]];
var active_Jammu_and_Kashmir=[[],[],[],[]];
var active_Jharkhand=[[],[],[],[]];
var active_Karnataka=[[],[],[],[]];
var active_Kerala=[[],[],[],[]];
var active_Ladakh=[[],[],[],[]];
var active_Madhya_Pradesh=[[],[],[],[]];
var active_Maharashtra=[[],[],[],[]];
var active_Manipur=[[],[],[],[]];
var active_Meghalaya=[[],[],[],[]];
var active_Mizoram=[[],[],[],[]];
var active_Nagaland=[[],[],[],[]];
var active_Odisha=[[],[],[],[]];
var active_Puducherry=[[],[],[],[]];
var active_Punjab=[[],[],[],[]];
var active_Rajasthan=[[],[],[],[]];
var active_Sikkim=[[],[],[],[]];
var active_Tamil_Nadu=[[],[],[],[]];
var active_Telangana=[[],[],[],[]];
var active_Tripura=[[],[],[],[]];
var active_Uttar_Pradesh=[[],[],[],[]];
var active_Uttarakhand=[[],[],[],[]];
var active_West_Bengal=[[],[],[],[]];
var active_India=[[],[],[],[]];
  
  
  

        

  
  var date=[[],[],[],[]];
  var i=0;
  for(x in obj1)
  {
   
  for(y in obj1[x])
  {
  var name_temp=chart_name(y)

if(typeof(name_temp)!="undefined")
  {
  var temp_data=[];
  temp_data.push(new Date(x).getTime());
  if(obj1[x][y].hasOwnProperty("total"))
  temp_data.push(obj1[x][y]["total"]["deceased"]);
  else
  temp_data.push("undefined");  
  eval("active_"+name_temp+"[0].unshift(temp_data);");

var temp_data=[];
  temp_data.push(new Date(x).getTime());
  if(obj1[x][y].hasOwnProperty("total"))  
  temp_data.push(obj1[x][y]["total"]["recovered"]);
  else
  temp_data.push("undefined");
  eval("active_"+name_temp+"[1].unshift(temp_data);");

 
var temp_data=[];
  temp_data.push(new Date(x).getTime());
  if(obj1[x][y].hasOwnProperty("total"))  
  temp_data.push(obj1[x][y]["total"]["confirmed"]);
  else
  temp_data.push("undefined");
  eval("active_"+name_temp+"[3].unshift(temp_data);");

eval("var real_active=temp_my_active(active_"+name_temp+"[0][0][1],active_"+name_temp+"[1][0][1],active_"+name_temp+"[3][0][1]);"); 


var temp_data=[];
  temp_data.push(new Date(x).getTime());
  temp_data.push(real_active);
  eval("active_"+name_temp+"[2].unshift(temp_data);");
}
 
 }
  }

  date=active_India;
  
  
var options3 = {

  series: [
    {
      name: "Confirmed",
      data:date[3],
    }
  ],
   chart: {
          id: 'area-datetime',
          type: 'area',
          height: 250,
          zoom: {
            autoScaleYaxis: true
          },
          toolbar: {
        show: false,},
        },
        colors: ["#ff073a"],
  stroke: {
    width: 3
  },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        
        };

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);

chart3.render();



var options2 = {

  series: [
    {
      name: "active",
      data:date[2],
    }
  ],
   chart: {
          id: 'area-datetime',
          type: 'area',
          height: 250,
          zoom: {
            autoScaleYaxis: true
          },toolbar: {
        show: false,},
        },
        colors: ["#007bff"],
  stroke: {
    width: 3
  },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        };

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);

chart2.render();


var options1 = {

  series: [
    {
      name: "Recovered",
      data:date[1],
    }
  ],
   chart: {
          id: 'area-datetime',
          type: 'area',
          height: 250,
          zoom: {
            autoScaleYaxis: true
          },toolbar: {
        show: false,},
        },
        colors: ["#28a745"],
  stroke: {
    width: 3
  },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        };

var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);

chart1.render();



$(document).ready(function(){
$("#load_chart").hide();
});


var options0 = {

  series: [
    {
      name: "Deceased",
      data:date[0],
    }
  ],
   chart: {
          id: 'area-datetime',
          type: 'area',
          height: 250,
          zoom: {
            autoScaleYaxis: true
          },toolbar: {
        show: false,},
        },
        
        
       
        colors: ["#848d94"],
  stroke: {
    width: 3
  },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        };

var chart0 = new ApexCharts(document.querySelector("#chart0"), options0);

chart0.render();



 var resetCssClasses = function(activeEl) {
        var els = document.querySelectorAll('button')
        Array.prototype.forEach.call(els, function(el) {
          el.classList.remove('active')
        })
      
        activeEl.target.classList.add('active')
      }
      
      document.querySelector('#three_month').addEventListener('click', function(e) {
          resetCssClasses(e)
      
          chart3.zoomX(
            date[0][91][0],
            date[0][0][0]
          )
          chart2.zoomX(
            date[0][91][0],
            date[0][0][0]
          )
          chart1.zoomX(
            date[0][91][0],
            date[0][0][0]
          )
          chart0.zoomX(
            date[0][91][0],
            date[0][0][0]
          )
        })
        
        document.querySelector('#one_month').addEventListener('click', function(e) {
          resetCssClasses(e)
      
          chart3.zoomX(
            date[0][30][0],
            date[0][0][0]
          )
          chart2.zoomX(
            date[0][30][0],
            date[0][0][0]
          )
          chart1.zoomX(
            date[0][30][0],
            date[0][0][0]
          )
          chart0.zoomX(
            date[0][30][0],
            date[0][0][0]
          )
        })
        
        document.querySelector('#all').addEventListener('click', function(e) {
          resetCssClasses(e)
      
          chart3.resetSeries()
          chart2.resetSeries()
          chart1.resetSeries()
          chart0.resetSeries()
        })
        

document.querySelector('#new_data').addEventListener('change', function(e) {
          resetCssClasses(e)
date=tg(document.getElementById("new_data").value); 

          chart3.updateSeries([{
          name: document.getElementById("new_data").value+" confirmed",
          data: date[3],
        }])

chart2.updateSeries([{
          name: document.getElementById("new_data").value+" active",
          data: date[2],
        }])
        
chart1.updateSeries([{
          name: document.getElementById("new_data").value+" recovered",
          data: date[1],
        }])        

chart0.updateSeries([{
          name: document.getElementById("new_data").value+" deceased",
          data: date[0],
        }])
        })
        

function tg(x)
{
eval("var this_is = active_"+x)
return this_is;
}

  }
  request1.send();