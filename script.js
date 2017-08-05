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
        selectallornone('true')
        break;

      case "Select None" :
        selectallornone('false')
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
}//end of if
}//end of function

function showframe(searchstring,shopname){

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

  console.log(searchstring);
  window.open(searchstring,'_blank');

}

function uncheck(shopname){

  var show = 'show' + shopname;
  document.getElementById(show).style.display = 'inline';
}

function selectallornone(bool){

  checkboxes = document.getElementsByClassName('Shoplist');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    console.log(checkboxes[i].value);
    checkboxes[i].checked = bool;
    showproduct(checkboxes[i].value,checkboxes[i]);
  }

}
