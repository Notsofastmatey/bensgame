$(document).ready(function(){
  $("#lname").hide();
  $("#fname").change(function(){
    var time1 = new Date().getTime();
  alert("The first name was changed at " + time1);
  $("#lname").show();
});
  
    $("#lname").change(function(){
      var time2 = new Date().getTime();
  alert("The last name was changed at " + time2);
      $("#diff:text").val("hi");
});
  
  
});
