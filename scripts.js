$(document).ready(function(){
  $("#lname").hide()
  $("#fname").change(function(){
  alert("The first name was changed at " + new Date().getTime());
  $("#lname").show()
});
  
    $("#lname").change(function(){
  alert("The last name was changed at " + new Date().getTime());
});
  
  
});
