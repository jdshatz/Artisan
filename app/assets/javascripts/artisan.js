var ready = function(){
    $('.genre').click(function(event){
    	console.log("Genre clicked");
    	var color = $(this).name.h4.css('color');
    	console.log(color);
    	if (color == '#ffffff'){
    		$(this).h4.scss('color','#aaaaaa');
    		<%=@genre.selected = true %>;
    	}
    	else{
    		$(this).h4.scss('color','#ffffff');
    		<%=@genre.selected = false %>;
    	}
    })
};

$(document).ready(ready);
$(document).on('turbolinks:load',ready);

//Supposed to switch the selected status of the item.