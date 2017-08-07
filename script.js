function showproduct(shopname,checkbox){

  console.log("in showproduct");

  let searchitem = document.getElementById('searchitem').value;
  let itemlen = searchitem.length;
  let searchstring = "";

  console.log(itemlen);
  console.log(shopname);
  console.log(checkbox);

  if ( ( itemlen > 0 ) && (checkbox.checked == true) ){

    switch(shopname){

      case "Albert-Heijn" :

        searchstring = 'https://www.ah.nl/zoeken?rq='+ searchitem + '&searchType=global';
        showframe(searchstring,shopname)
        break;

      case "Dirk" :

        searchstring = 'https://boodschappen.dirk.nl/zoeken?search='+ searchitem;
        showframe(searchstring,shopname)
        break;

      case "Vomar" :

        searchstring = 'https://www.vomar.nl/search?q='+ searchitem;
        showframe(searchstring,shopname)
        break;

      case "Coop" :

        searchstring = 'https://www.coop.nl/zoeken?SearchTerm='+ searchitem;
        console.log(searchstring);
        window.open(searchstring,'_blank');
        break;

      case "Jumbo" :

        searchstring = 'https://www.jumbo.com/zoeken?SearchTerm='+ searchitem;
        opennewindow(searchstring);
        break;

      case "Spar" :

        searchstring = 'https://www.spar.nl/zoek/?fq='+ searchitem;
        opennewindow(searchstring);
        break;

      case "Plus" :

        searchstring = 'https://www.plus.nl/zoekresultaten?SearchTerm='+ searchitem;
        opennewindow(searchstring);
        break;

      case "Select All" :
        selectallornone(true)
        break;

      case "Select None" :
        selectallornone(false)
        break;

      default :
        console.log('none to close');
        break;

    }//end of switch

  }else if((checkbox.checked == false)){
    uncheck(shopname);
  }else{
    alert ("please provide an item to search");
  }

}//end of function showproduct

function showframe(searchstring,shopname){

  console.log("in showframe");
  var frame = shopname + 'frame';
  var show = 'show' + shopname;
  console.log(searchstring);
  console.log(frame);
  console.log(show);
  document.getElementById(frame).src = searchstring ;
  document.getElementById('showshops').style.display = 'inline-block';
  document.getElementById(show).style.display = 'inline';

}

function opennewindow(searchstring){

  console.log("in opennewindow");
  console.log(searchstring);
  window.open(searchstring,'_blank');

}

function uncheck(shopname){

  console.log('in uncheck');
  switch(shopname){

    case "Albert-Heijn" :

      document.getElementById('showAlbert-Heijn').style.display = 'none';
      break;

    case "Dirk" :

      document.getElementById('showDirk').style.display = 'none';
      break;

    case "Vomar" :

      document.getElementById('showVomar').style.display = 'none';
      break;

    default :
      resetall();

    }
}

function selectallornone(bool){
  console.log("in selectallornone");
  checkboxes = document.getElementsByClassName('Shoplist');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    console.log(checkboxes[i].value);
    checkboxes[i].checked = bool;
    showproduct(checkboxes[i].value,checkboxes[i]);
  }

}

function resetall(){
    console.log("in resetall");
    document.getElementById('showAlbert-Heijn').style.display = 'none';
    document.getElementById('showDirk').style.display = 'none';
    document.getElementById('showVomar').style.display = 'none';
    document.getElementById('Albert-Heijn').checked = false;
    document.getElementById('Dirk').checked = false;
    document.getElementById('Vomar').checked = false;
    document.getElementById('Coop').checked = false;
    document.getElementById('Plus').checked = false;
    document.getElementById('Spar').checked = false;
    document.getElementById('Select All').checked = false;
    document.getElementById('searchitem').value = '';
 }

function addScript() {
  console.log('in addScript');

  var s = document.createElement( 'script' );
  s.setAttribute( 'src', "https://maps.googleapis.com/maps/api/js?key=AIzaSyD4t3Mysvz9tv2U_5ZlYdSbp3rR0LFp_KA&libraries=places&callback=initialize" );
  document.body.appendChild( s );
}

var geocoder;
var map;
function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
  zoom: 8,
  center: latlng
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

function codeAddress() {
  var address = document.getElementById('postcode').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
  if (status == 'OK') {
    map.setCenter(results[0].geometry.location);
    var marker = new google.maps.Marker({
    map: map,
    position: results[0].geometry.location
  });
  } else {
    alert('Geocode was not successful for the following reason: ' + status);
  }
  });
}
