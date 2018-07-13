$(document).on('turbolinks:load',function(){
    event.preventDefault();
    $('.genre').click(function(){
    	if ($(this).css('border') = 'none'){
    		$(this).css('border') = 'yellow 2px solid';
    		<%= @genre.selected %> = true;
    	}
    	else{
    		$(this).css('border') = 'none';
    		<%= @genre.selected %>  = false;
    	}
    });

    $('#selection').click(function(){
    	if ($(this).css('border') = 'none'){
    		$(this).css('border') = 'yellow 2px solid';
    	}
    	else{
    		$(this).css('border') = 'none';
    	}
    });

    






    var toggling = $('.genre').css('border');
      if (toggling = 'none'){
        $('.mainmenu').slideToggle(1000);
        $('.navigation').animate({bottom: "-=150px"});
        toggling = 'block';
      }
      else{
       $('.mainmenu').slideToggle(1000);
        $(this).css({'z-index':'0', 'opacity':'1'}, 4)
        $('.navigation').animate({bottom: "+=150px"});
        toggling = 'none';
        $("body").css({'z-index':'1', 'opacity':'1'})
      }
  })
