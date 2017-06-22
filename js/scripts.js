var num = function(number) {
  var arrayNumber = [];

  for (var i = 1; i <= number; i++) {
    arrayNumber.push(i);
    }
  return arrayNumber;
}






$(document).ready(function() {
  $("form#enterNumber").submit(function(event) {
  event.preventDefault();
  // var arrayNumber = [];
  // arrayNumber.push();
  // arrayNumber.forEach(function(item){
  //      $(".item1").append("<li>"+item+"</li>");
  //    });
    var number = $("input#number").val();
    var result = num(number);
    console.log(result);
    $("#list").text(result);
  });
});
