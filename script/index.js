      //gotop點擊滑動至頂
      $('#gotop').click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    //捲軸滑動觸發事件
    var scroll = $(window).scroll(function () {
        if (scroll.scrollTop() > $('#skill').offset().top) {
            $('#gotop').css('display', 'block')
        } else {
            $('#gotop').css('display', 'none')
        };

    });

    //作品區塊點擊另開網頁
    $('#collection>div').click(function(){
        var name = $(this).attr("id")
        switch(name){
            case "casino": window.window.open('https://cheenlam.github.io/casino/');
            break;

            case "roulette": window.window.open('https://cheenlam.github.io/Roulette_Casino/')
            break;

            case "football": window.window.open('https://cheenlam.github.io/sport_football/')
            break;

            case "acetic": window.window.open('https://cheenlam.github.io/acetic/')
            break;

            case "factory": window.window.open('https://cheenlam.github.io/factory/')
            break;

            case "film": window.window.open('https://cheenlam.github.io/film/')
            break;

            case "wedding": window.window.open('https://cheenlam.github.io/wedding/')
            break;

            case "farm": window.window.open('https://cheenlam.github.io/farm/')
            break;

            case "rearEnd": window.window.open('https://cheenlam.github.io/creative_TIM/')
            break;

            case "game": window.window.open('https://cheenlam.github.io/game_space/')
            break;

            case "computer": window.window.open('https://cheenlam.github.io/computer/')
            break;

        }
        
    })




