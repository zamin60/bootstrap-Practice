  // $(document).ready(function(){
    //     $('[data-toggle="tooltip"]').tooltip();
    // });
    $(document).ready(function(){
        $(".carousel").carousel({interval:500});

        $("#carouselBtn").click(function(){
            console.log("button clicked");
             if($("#carouselBtn").children("span").hasClass('fa-pause')){
                $("#mycarousel").carousel('pause');
                console.log("in pause function");
                $("#carouselBtn").children('span').removeClass('fa-pause');
                $("#carouselBtn").children('span').addClass('fa-play');
             }
             else if($("#carouselBtn").children('span').hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselBtn").children('span').removeClass('fa-play');
                $("#carouselBtn").children('span').addClass('fa-pause');
            }else{console.log("in elase");}

             
        });
        
});