$(document).ready(function(){
  var time1 = 0
  var time2 = 0
  var difference = 0
  
  $("#q2").hide();
  $("#diff").hide();
  $("#yourName").change(function(){
    time1 = new Date().getTime();
  //alert("The first name was changed at " + time1);
  $("#q2").show();
});
  
    $("#q2").change(function(){
      time2 = new Date().getTime();
  //alert("The last name was changed at " + time2);
      difference = (time2-time1)/1000;
      $("#diff").show();
      $("#diff:text").val(difference);
});
  
  
});
