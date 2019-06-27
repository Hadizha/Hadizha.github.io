new WOW().init();
$("a[href='#']").click(
    function (){
        $("html, body").animate({
            scrollTop: 0
    },1000);
    });
    function moreClick(event, cardNumber){
        event.preventDefault();
        cardNumber = cardNumber || "";
        var itemWindow = document.querySelector(".item-window" + cardNumber);
        var display = itemWindow.style.display;
        if(display == "" || display == "none"){
            $(".item-window" + cardNumber).fadeIn(600);
            itemWindow.style.display = "flex";       
        }else{
            $(".item-window").fadeOut(600) ;
        }
    }
    $(".item-close").click(
        function(){
    $(".item-window").fadeOut();
        }
    );
    
    $(".card-button.first").click(
        function(event){
            moreClick(event,".first");
        }
    );
    $(".card-button.second").click(
        function(event){
            moreClick(event,".second");
        }
    );
    $(".card-button.third").click(
        function(event){
            moreClick(event,".third");
        }
    );
    $(".card-button.fourth").click(
        function(event){
            moreClick(event,".fourth");
        }
    );

    $(".card-button.fifth").click(
        function(event){
            moreClick(event,".fifth");
        }
    );
    $(".card-button.six").click(
        function(event){
            moreClick(event,".six");
        }
    );
    $(".card-button.seven").click(
        function(event){
            moreClick(event,".seven");
        }
    );
    $(".card-button.eight").click(
        function(event){
            moreClick(event,".eight");
        }
    );
    