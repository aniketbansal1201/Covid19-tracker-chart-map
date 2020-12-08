

function name (x)
{
switch(x)
{
case  "AN"  : return  "Andaman and Nicobar Islands";
case  "AP"  : return  "Andhra Pradesh";
case  "AR"  : return  "Arunachal Pradesh";
case  "AS"  : return  "Assam";
case  "BR"  : return  "Bihar";
case  "CH"  : return  "Chandigarh";
case  "CT"  : return  "Chhattisgarh";
case  "DN"  : return  "Dadra and Nagar Haveli and Daman and Diu";
case  "DL"  : return  "Delhi";
case  "GA"  : return  "Goa";
case  "GJ"  : return  "Gujarat";
case  "HR"  : return  "Haryana";
case  "HP"  : return  "Himachal Pradesh";
case  "JK"  : return  "Jammu and Kashmir";
case  "JH"  : return  "Jharkhand";
case  "KA"  : return  "Karnataka";
case  "KL"  : return  "Kerala";
case  "LA"  : return  "Ladakh";
case  "LD"  : return  "Lakshadweep";
case  "MP"  : return  "Madhya Pradesh";
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
case  "TN"  : return  "Tamil Nadu";
case  "TG"  : return  "Telangana";
case  "TR"  : return  "Tripura";
case  "UP"  : return  "Uttar Pradesh";
case  "UT"  : return  "Uttarakhand";
case  "WB"  : return  "West Bengal";
case    "TT"  : return  "India"
}
}

function inchg(num)
{
if (num==0)
return "-";
if(num/10000000 >=1)
return Math.round(num/10000000).toString()+"Cr";
else if(num/100000 >=1)
return Math.round(num/100000).toString()+"L";
else if (num/1000 >=1)
return Math.round(num/1000).toString()+"K";
return num;
}

function check(x)
{
if(typeof(x)=="undefined")
return 0;
return x;
}

function check_delta(x)
{
if(typeof(x)=="undefined")
return "&nbsp";
return "+"+x;
}


  var totalActive=0,totalConf,totalRecv,totalDec,totalTst;
var request = new XMLHttpRequest()

request.open('GET', 'https://api.covid19india.org/v4/data.json', true)
request.onload = function () {
  // Begin accessing JSON data here

  var obj = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log('working')
    
  } else {
    console.log('error')
  }
var map_active_india_top=[];
var map_recv_india_top=[];
var map_conf_india_top=[];
var map_dec_india_top=[];
var counter="counter_odd";


for (x in obj)  {
var y=name(x)
var conf=check(obj[x]["total"]["confirmed"]);
var recv=check(obj[x]["total"]["recovered"]);
var dec=check(obj[x]["total"]["deceased"]);
var tst=check(obj[x]["total"]["tested"]);
var active=conf- recv - dec;
var test=inchg(tst);
var temp_json={id:null,value:null};
var recv_temp_json={id:null,value:null};
var conf_temp_json={id:null,value:null};
var dec_temp_json={id:null,value:null};


if(y=="India")
{
totalActive=active;
totalConf=conf;
totalDec=dec;
totalTst=test;
totalRecv=recv;

}

if(x=="LA")
{temp_json.id="IN-LK";
recv_temp_json.id="IN-LK";
conf_temp_json.id="IN-LK";
dec_temp_json.id="IN-LK";
}
else
{temp_json.id="IN-"+x;
recv_temp_json.id="IN-"+x;
conf_temp_json.id="IN-"+x;
dec_temp_json.id="IN-"+x;
}

temp_json.value=active;
map_active_india_top.push(temp_json);

recv_temp_json.value=recv;
map_recv_india_top.push(recv_temp_json);

conf_temp_json.value=conf;
map_conf_india_top.push(conf_temp_json);

dec_temp_json.value=dec;
map_dec_india_top.push(dec_temp_json);

if(x=="DN")
{
var new_temp_json={};
new_temp_json.id="IN-DD";
new_temp_json.value=active;
map_active_india_top.push(new_temp_json);
}

if(y!="India")
document.getElementById("demo").innerHTML +="<div class= 'Row state_data  "+counter+"' style='cursor:pointer' id="+x+"><div class='Cell'>"+y+"</div><div class='Cell'>"+ conf +"</div><div class='Cell'>"+active+"</div><div class='Cell'>"+ recv +"</div><div class='Cell'>"+ dec +"</div><div class='Cell'>"+test+"</div></div>";

if(counter=="counter_odd")
counter="counter_even";
else
counter="counter_odd";


var temp_id=x+"1";
var i=0;

for(q in  obj[x]["districts"])
{

if(q=="Unknown" && i==0)
{document.getElementById("demo").innerHTML+="<div class=' Row "+x+"1' style='display:none'><div class='Cell hide_border'>&nbsp; </div></div><div class=' Row "+temp_id+" '  style='display:none'><div class='Cell hide_border'><div class='alert alert-danger ' style='color:#e23028;text-align: center;'><span class='glyphicon glyphicon-warning-sign'></span><b> District-wise data not available here</b></div></div> </div></div>";
i=3;
}
else
{
if(i==0)
document.getElementById("demo").innerHTML+="<div class=' Row "+x+"1' style='display:none'><div class='Cell hide_border'>&nbsp; </div></div><div class='Row "+x+"1' style='display:none'><div class='Cell hide_border'>  <div class='alert alert-success' style='color:#28a745;text-align: center;' ><strong><span class='glyphicon glyphicon-time'></span></strong><b> District-wise data available here</b></div>   </div></div><div   class= ' Heading "+temp_id+" ' style='display:none'><div class='Cell'>District</div><div class='Cell'>Confirmed</div><div class='Cell'>Active</div><div class='Cell'>Recovered</div><div class='Cell'>Deceased</div><div class='Cell'>Tested</div></div>";

i=1;
var sconf=check(obj[x]["districts"][q]["total"]["confirmed"]);
var srecv=check(obj[x]["districts"][q]["total"]["recovered"]);
var sdec=check(obj[x]["districts"][q]["total"]["deceased"]);
var stst=check(obj[x]["districts"][q]["total"]["tested"]);
var sactive=sconf- srecv - sdec;
var stest=inchg(stst);

document.getElementById("demo").innerHTML+="<div class=' Row "+temp_id+" district_css' style='display:none'><div class='Cell'>"+q+"</div><div class='Cell'>"+ sconf +"</div><div class='Cell'>"+sactive+"</div><div class='Cell'>"+ srecv +"</div><div class='Cell'>"+ sdec +"</div><div class='Cell'>"+stest+"</div></div>";
}


}

if(i!=3)
document.getElementById("demo").innerHTML+="<div class='Row "+temp_id+" ' style='display:none '><div class='Cell hide_border'>&nbsp;</div></div><div class='Row "+temp_id+" ' style='display:none '><div class='Cell hide_border'>&nbsp;</div><div class='Cell hide_border'><center><span class='glyphicon glyphicon-open' style='color: grey;cursor:pointer' id='"+x+"'></span></center></div></div><div class='Row "+temp_id+" ' style='display:none '><div class='Cell hide_border'>&nbsp;</div></div>"; 
}
document.getElementById("demo").innerHTML +="<div class='Row counter_odd'><div class='Cell'>"+"India"+"</div><div class='Cell'>"+ totalConf +"</div><div class='Cell'>"+totalActive+"</div><div class='Cell'>"+ totalRecv +"</div><div class='Cell'>"+ totalDec +"</div><div class='Cell'>"+totalTst+"</div></div>";
document.getElementById("conf_meta_data").innerHTML=totalConf.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("recv_meta_data").innerHTML=totalRecv.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("dec_meta_data").innerHTML=totalDec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("active_meta_data").innerHTML=totalActive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

if(obj["TT"].hasOwnProperty("delta")){
document.getElementById("conf_delta").innerHTML=check_delta(obj["TT"]["delta"]["confirmed"]);
document.getElementById("recv_delta").innerHTML=check_delta(obj["TT"]["delta"]["recovered"]);
document.getElementById("dec_delta").innerHTML=check_delta(obj["TT"]["delta"]["deceased"]);
document.getElementById("active_delta").innerHTML="&nbsp";}
var d=new Date(obj["TT"]["meta"]["last_updated"]);
document.getElementById("map_text_left").innerHTML+=d.toLocaleString("en-IN",{ month: 'short', day: 'numeric',timeZoneName: 'short',hour:"2-digit",minute:"2-digit"});
document.getElementById("map_case_right").innerHTML=obj["TT"]["total"]["tested"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("map_date_right").innerHTML=new Date().toDateString();



$(document).ready(function(){
  $("#AN,#AP,#AR,#AS,#BR,#CH,#CT,#DN,#DL,#GA,#GJ,#HR,#HP,#JK,#JH,#KA,#KL,#LA,#LD,#MP,#MH,#MN,#ML,#MZ,#NL,#OR,#PY,#PB,#RJ,#SK,#TN,#TG,#TR,#UP,#UT,#WB").click(function(){
 $("."+$(this).attr('id')+"1").toggle();
  });

$("#map_recv_india,  #map_active_india, #map_conf_india, #map_dec_india").click(function(){
eval("var ww="+this.id+"_top;");

if(this.id=="map_recv_india" && !$("#map_recv_india").hasClass("active")){
$("*").removeClass("active");
$("#map_recv_india").addClass("active");
set_my_map(ww,"#2aa747","#28a447","#adebbc");}

if(this.id=="map_active_india" && !$("#map_active_india").hasClass("active")){
$("*").removeClass("active");
$("#map_active_india").addClass("active");
set_my_map(map_active_india_top,"#3c5bdc","#2050df","#a6b9f2");}

if(this.id=="map_conf_india" && !$("#map_conf_india").hasClass("active")){
$("*").removeClass("active");
$("#map_conf_india").addClass("active");
set_my_map(ww,"#f90b3b","#ff0033","#ff99ad");}

if(this.id=="map_dec_india" && !$("#map_dec_india").hasClass("active")){
$("*").removeClass("active");
$("#map_dec_india").addClass("active");
set_my_map(map_dec_india_top,"#6c757d","#6b767b","#c8cdd0");}

});
});


set_my_map(map_active_india_top,"#3c5bdc","#2050df","#a6b9f2");

}


request.send();