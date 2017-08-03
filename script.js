function showrate()
{
  // Storing grocery items in a array
  var selected_items = document.forms[0];
  var txt = "";
  var i;
  var chosenitems = [];
  for (i = 0; i < selected_items.length; i++) {
    if (selected_items[i].checked) {
      txt = txt + selected_items[i].value + " ";
      chosenitems.push(selected_items[i].value);
    }
  }
  console.log("You are searching for items" + txt);

  // Storing shops in a array
  var selected_items = document.forms[1];
  var txt = "";
  var i;
  var chosenshops = [];
  for (i = 0; i < selected_items.length; i++) {
    if (selected_items[i].checked) {
      txt = txt + selected_items[i].value + " ";
      chosenshops.push(selected_items[i].value);
    }
  }
  console.log("You are searching in shops " + txt);

  //per chosenitem per shop
  var i,j;
  for (i = 0; i < chosenitems.length; i++) {
    for (j = 0; j < chosenshops.length; j++) {
        openshoplink(chosenitems[i],chosenshops[j]);
    }
  }
}

function openshoplink(itemname,shopname){

  switch (shopname) {
    case "Albert-Heijn" :
        findinah(itemname);
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
  }
}

function findinah(itemname){

  var url = "https://www.ah.nl/";
  var win = window.open(url, '_blank');
  win.focus();
  $(document).ready(function(){

     // jQuery methods go here...
     $("*").$("[name='rq']");

  });

}
