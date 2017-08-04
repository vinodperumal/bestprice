function showproduct(shopname,checkbox){
  console.log("in showproduct");

  let searchitem = document.getElementById('searchitem').value;
  let itemlen = searchitem.length;
  let searchstring = "";

  console.log(itemlen);
  console.log(shopname);

  if ( ( itemlen > 0 ) && (checkbox.checked == true) ){

    switch(shopname){

      case "Albert-Heijn" :

        searchstring = 'https://www.ah.nl/zoeken?rq='+ searchitem + '&searchType=global';
        console.log(searchstring);
        document.getElementById('ahframe').src = searchstring ;
        document.getElementById('showshops').style.display = 'inline-block';
        document.getElementById('showAH').style.display = 'inline';
        break;

      case "Dirk" :

        searchstring = 'https://boodschappen.dirk.nl/zoeken?search='+ searchitem;
        console.log(searchstring);
        document.getElementById('dirkframe').src = searchstring ;
        document.getElementById('showshops').style.display = 'inline-block';
        document.getElementById('showDirk').style.display = 'inline';
        break;

      case "Jumbo" :

        searchstring = 'https://www.jumbo.com/zoeken?SearchTerm='+ searchitem;
        console.log(searchstring);
        window.open(searchstring,'_blank');
        break;

      default :

        alert('wrong input');
        break;

    }

  }else if((checkbox.checked == false)){

    switch(shopname){

      case "Albert-Heijn" :
        document.getElementById('showAH').style.display = 'none';
        break;

      case "Dirk" :

        document.getElementById('showDirk').style.display = 'none';
        break;

      case "Jumbo" :

      document.getElementById('showUnknown').style.display = 'none';
      break;


      default :

      alert('wrong input');
      break;

  }

  }else {
        alert ("please provide an item to search");
      }

}
