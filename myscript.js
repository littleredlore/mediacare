$(document).ready(function(){

	var windowWidth = $(window).width();
	if (windowWidth < 1025){
		var contentPadding = 20;
		var contentWidth = windowWidth - contentPadding;
		$('div.content_wrapper').css('width', contentWidth);

	} else if (windowWidth >= 1025){
		
		var menuWidth = $('div.menu').width();
		var contentPadding = 60;
		var contentWidth = windowWidth - (menuWidth + contentPadding);
		$('div.content_wrapper').css('width', contentWidth);
	}
	


	$('li').click(function(event){
    event.stopImmediatePropagation();
	});
	//to determine submenu position based on window width, as defined by max_large
	if (windowWidth < 1025){

		$("div.menu_outer").hover(function(){
			var outer = $(this);
			var position = outer.position();
			var outerLeft = position.left;
			$(this).find('div.sub_menu').css({'position': 'absolute', 'left': outerLeft, 'display': 'block'});
		}, function(){
			$(this).find('div.sub_menu').css({'display': 'none'});
		});

		//click to view submenus
		$("div.menu_innerSub").toggle(function(){
			$(this).addClass("tap");
			$("div.menu_innerSub.tap").parent().addClass("tapOuter");
			var outer = $("div.tapOuter");
			var position = outer.position();
			var outerLeft = position.left;
			outer.find('div.sub_menu').css({'position': 'absolute', 'left': outerLeft, 'display': 'block'});
		}, function(){
			$("div.menu_innerSub.tap").parent().find('div.sub_menu').css({'display': 'none'});
			$("div.menu_innerSub.tap").parent().removeClass("tapOuter");
			$(this).removeClass("tap");
		});

	} else if (windowWidth >= 1025){

		$("div.menu_outer").hover(function(){
		var outer = $(this);
		var position = outer.position();
		var outerTop = position.top;
			$(this).find('div.sub_menu').css({'position': 'absolute', 'top': outerTop, 'display': 'block'});
		}, function(){
			$(this).find('div.sub_menu').css({'display': 'none'});
		});

		//click to view submenus
		$("div.menu_innerSub").toggle(function(){
			$(this).addClass("tap");
			$("div.menu_innerSub.tap").parent().addClass("tapOuter");
			var outer = $("div.menu_innerSub.tap").parent();
			var position = outer.position();
			var outerTop = position.top;
			outer.find('div.sub_menu').css({'position': 'absolute', 'top': outerTop, 'display': 'block'});
		}, function(){
			$("div.menu_innerSub.tap").parent().find('div.sub_menu').css({'display': 'none'});
			$("div.menu_innerSub.tap").parent().removeClass("tapOuter");
			$(this).removeClass("tap");
		});
	}

	//media content manager toggles
    $('div.tvTog').click(function(){
        if($(this).hasClass("selectTog")){

        }else{
            $(this).parent().find('div.selectTog').removeClass('selectTog');
            $(this).addClass("selectTog");
            $('table#group').toggle();
            $('table#tv').toggle("fast");

        }
    });
     $('div.groupTog').click(function(){
        if($(this).hasClass("selectTog")){

        }else{
            $(this).parent().find('div.selectTog').removeClass('selectTog');
            $(this).addClass("selectTog");
            $('table#group').toggle("fast");
            $('table#tv').toggle();

        }
    });

     $('div.control_button_left').click(function(){
     	if($(this).hasClass("toggle")){

     	}else{
     		$(this).parent().find('div.toggle').removeClass('toggle');
            $(this).addClass("toggle");
     	}
     });
     $('div.control_button_right').click(function(){
     	if($(this).hasClass("toggle")){

     	}else{
     		$(this).parent().find('div.toggle').removeClass('toggle');
            $(this).addClass("toggle");
     	}
     });
     $('div.control_button_middle').click(function(){
     	if($(this).hasClass("toggle")){

     	}else{
     		$(this).parent().find('div.toggle').removeClass('toggle');
            $(this).addClass("toggle");
     	}
     });

     $('div.sort_indicator').toggle(function(){
     	$(this).empty();
     	$(this).append('<img src="images/sort_ascending.png">');
     }, function(){
     	$(this).empty();
     	$(this).append('<img src="images/sort_descending.png">');
     }, function(){
     	$(this).empty();
     	$(this).append('<img src="images/sort.png">');
     });

 $('div.control_image').click(function(){
     	if($(this).hasClass("hit")){

     	}else{
     		$(this).parent().parent().find('div.control_item div.hit').removeClass('hit');
     		alert('derp');
            $(this).addClass("hit");
     	}
     });

});

