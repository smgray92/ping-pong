var num = function(number) {
  var arrayNumber = [];

  for (var i = 1; i <= number; i++) {
    arrayNumber.push(i);
  }
  return arrayNumber;

  var arrayList = [];
  arrayList.push(arrayNumber);
  for (var i = 1; i <= number; i++) {
    $("#list").append("<li>"+i+"</li>");
  }
  return arrayList;
}




$(document).ready(function() {
  $("form#enterNumber").submit(function(event) {
    event.preventDefault();
    var arrayList =  [];
    // var arrayNumber = [];
    // arrayNumber.push();
    // arrayNumber.forEach(function(item){
    //      $(".item1").append("<li>"+item+"</li>");
    //    });
    var number = $("input#number").val();
    var result = num(number);
    console.log(result);
    arrayList.push(result);

    arrayList.forEach(function(list) {
      $(".list").append("<li>"+list+"</li>");
    });
    // $("#output").text(result);
    console.log(arrayList);
  });
});
