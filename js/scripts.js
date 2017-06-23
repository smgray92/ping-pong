var num = function(number) {
  var arrayNumber = [];

  for (var i = 1; i <= number; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      arrayNumber.push("pingpong");
    }
    else if (i % 3 === 0) {
      arrayNumber.push("ping");
    }
    else if (i % 5 === 0) {
      arrayNumber.push("pong");
    }
    else {
      arrayNumber.push(i);
    }
  }
  return arrayNumber;

  // var arrayLists = [];
  // arrayLists.push(arrayNumber);

  // for (var i = 1; i <= number; i++) {
  //   $(".list").append("<li>"+i+"</li>");
  // }
  // return arrayLists;
}

$(document).ready(function() {
  $("form#enterNumber").submit(function(event) {

    event.preventDefault();
$("#output").hide();
    var arrayLists = [];
    // var arrayNumber = [];
    // arrayNumber.push();
    // arrayNumber.forEach(function(item){
    //      $(".item1").append("<li>"+item+"</li>");
    //    });
    var number = $("input#number").val();
    var result = num(number);
    console.log(result);
    arrayLists.push(result);



    arrayLists.forEach(function(item) {
      $(".list").append("<li>"+item+"</li>");
    });
    console.log(arrayLists);
    $("#output").show(result);

  });
});
