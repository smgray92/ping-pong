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
      arrayNumber.push(i)
    }
  }
  return arrayNumber;
}


$(document).ready(function() {
  $("#button").click(function() {
    $("#output").hide();
    $(".list").empty();
    var number = $("input#number").val();
    var result = num(number);
    console.log(result);

    result.forEach(function(item) {
      $(".list").append("<li>"+item+"</li>");
    });

    $("#output").show(result);
  });
});
