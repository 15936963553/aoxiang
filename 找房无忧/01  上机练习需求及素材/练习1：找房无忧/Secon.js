$('.nav1').on('touchstart',function(){
    $('.mengban').show()
    var display=$('.quyu').css('display');
   if( display=='none'){
      $('.quyu').show()
   }
   if(display=='block'){
    $('.quyu').hide()
   }
    
    $('.fangxing').hide()
    $('.more').hide()
    $('.price').hide()
})

$('.nav2').on('touchstart',function(){
    $('.mengban').show()
    var display=$('.price').css('display');
    if( display=='none'){
       $('.price').show()
    }
    if(display=='block'){
     $('.price').hide()
    }


    $('.quyu').hide()
   
    $('#price').toggleClass('price')
    $('.fangxing').hide()
    $('.more').hide()
})
$('.nav3').on('touchstart',function(){
    $('.mengban').show()
    var display=$('.fangxing').css('display');
    if( display=='none'){
       $('.fangxing').show()
    }
    if(display=='block'){
     $('.fangxing').hide()
    }

    $('.quyu').hide()
    $('.price').hide()
   
    $('#fangxing').toggleClass('fangxing')
    $('.more').hide()
})
$('.nav4').on('touchstart',function(){
    $('.mengban').show()
    var display=$('.more').css('display');
    if( display=='none'){
       $('.more').show()
    }
    if(display=='block'){
     $('.more').hide()
    }

    $('.quyu').hide()
    $('.price').hide()
    $('.fangxing').hide()
})
$('.mengban').on('touchstart',function(){
    $('.mengban').hide()
})




$('nav span').on('touchstart',function(){
    
   


    var display=$(this).find('.red_').css('display');
     if(display=='none'){
        $('.red_').hide()
        $(this).find('.red_').show()
     }else{$(this).find('.red_').hide()}

     var display=$(this).find('.gray').css('display');
     if(display=='block'){
        $('.gray').show()
        $(this).find('.gray').hide()
     }else{$(this).find('.gray').show()}
   
})
