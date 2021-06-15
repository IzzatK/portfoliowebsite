
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
