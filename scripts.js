$(document).ready(function(){
  var time1 = 0
  var time2 = 0
  var difference = 0
  
  $("#lname").hide();
  $("#fname").change(function(){
    time1 = new Date().getTime();
  alert("The first name was changed at " + time1);
  $("#lname").show();
});
  
    $("#lname").change(function(){
      time2 = new Date().getTime();
  alert("The last name was changed at " + time2);
      difference = time2-time1;
      $("#diff:text").val(difference);
});
  
  
});
