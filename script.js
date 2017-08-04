function showproduct(){
  console.log("in showproduct");
  let count = 0;
  let checkeditem = document.getElementsByClassName('groceryitems');

  //counting checkeditems
  for (var i = 0; i < checkeditem.length; i++) {

    if (checkeditem[i].checked) {
        console.log("checkeditem " + checkeditem[i]);
        receiveditem = checkeditem[i].value;
        count = count + 1;
        }
    }
  console.log(count);
  if (count>0){
    let searchstring = 'https://www.ah.nl/zoeken?rq='+ receiveditem + '&searchType=global';
    document.getElementById('showshops').style.display = 'inline-block';
    document.getElementById('showAH').style.display = 'inline-block';
    document.getElementById('ahframe').src = searchstring ;
  }else {
    alert ("please check a item");
  }
}

function hello(){
  console.log("hello");
}
