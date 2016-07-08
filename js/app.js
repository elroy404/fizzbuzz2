$(document).ready(function(){
  $(".submit-button").click(function(event){
    event.preventDefault();
    var boxString = $(".txt-box").val();
    var boxNum = parseInt(boxString);
    numCheck(boxNum);
    if(boxNum === typeof NaN){
      console.log("did not execute");
    }
    else{
      fizzBuzz(boxNum);
    }
  });

function numCheck(number){
  var numchk = number % 1;
  if(numchk != 0 || number > 100){
    $(".txt-box").css("background-color","#F44336"),
    $(".txt-box").css("color","white"),
    $(".txt-box").val("");
    $(".error").show();
  }
  else{
    $(".error").hide();
    $(".txt-box").css("background-color","white");
    $(".txt-box").css("color","black");
    $(".txt-box").val("");
    console.log(number);
  }
}

  function fizzBuzz(number){
    $(".output").show();
    // $(".output").append("You entered: " + number);
    for(var i = 1;i <= number; i++){
      var fizz = i % 3;
      var buzz = i % 5;
      // console.log(fizz);
      if (fizz === 0 && buzz === 0){
        $(".output").append("fizz buzz</br>");
      }
      else if(buzz === 0){
        $(".output").append("buzz</br>");
      }
      else if(fizz === 0){
        $(".output").append("fizz</br>");
      }
      else{
        $(".output").append(i + "</br>");
      }
    }
  }

});



// function diviThree(number){
//   var fizz = number % 3;
//   if (fizz === 0){
//     $("body").append("fizz");
//   }
// }
//
// function diviFive(number){
//   var buzz = number % 5;
//   if(buzz === 0){
//     $("body").append("buzz");
//   }
// }
