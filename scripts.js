$(document).ready(function(){
  $("#fname").change(function(){
  alert("The first name was changed at " + new Date().getTime());
});
  
    $("#lname").change(function(){
  alert("The last name was changed at " + new Date().getTime());
});
  
  
});
