
         $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 3377, pause:"false" } );

            $("#carouselButton").click(function(){
                   $("#mycarousel").carousel('pause');
                    if($('#carouselButton').children('span').hasClass('fa-pause')){
                        $('#mycarousel').carousel('pause');
                        $("#carouselButton").children('span').removeClass('fa-pause')
                        $('#carouselButton').children('span').addClass('fa-play')
                        alert("carousel is paused");
                    }  
                    else if($('#carouselButton').children('span').hasClass('fa-play')){
                        $('#mycarousel').carousel('cycle');
                        $('#carouselButton').children('span').removeClass('fa-play')
                        $('#carouselButton').children('span').addClass('fa-pause')
                        alert("carousel is resuming");
                    }  
                   
               });

         });
         $(document).ready(function(){
            $("#reservetableButton").click(function(){
                $("#reservetableModal").modal('toggle')
            });
            
         });

         $(document).ready(function(){
             $("#logintableButton").click(function(){
                $("#loginModal").modal('toggle')
             });
         });

         var element = document.getElementById("display1sttab");
         var element2 = document.getElementById("display2ndtab");
         var element3 = document.getElementById("display3rdtab");
         var element4 = document.getElementById("display4thtab");



function displayfreelance1(){ 
 
  if(element.Id="display1sttab") {
    element.style.display="block";
    element2.style.display="none";
    element3.style.display="none";
    element4.style.display="none";
    }

}
function displayfreelance2(){ 
 
    if(element2.Id="display2ndtab") {
      element.style.display="none";
      element2.style.display="block";
      element3.style.display="none";
      element4.style.display="none";
      }
  
  }
  function displayprojects(){ 
 
    if(element2.Id="display2ndtab") {
      element.style.display="none";
      element2.style.display="none";
      element3.style.display="block";
      element4.style.display="none";
      }
  
  }
  function displaycompany(){ 
 
    if(element2.Id="display2ndtab") {
      element.style.display="none";
      element2.style.display="none";
      element3.style.display="none";
      element4.style.display="block";
      }
  
  }
