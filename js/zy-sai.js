jQuery(function($){
	/*
		球员名字限字数
		data:2014-09-10
		Update:zhongyan
	*/
	
	for(var i=0; i<$('.manMuser>i').length;i++){
		if( $('.manMuser>i').eq(i).text().length <=5){
			//console.log($('.manMuser>i').eq(i).text().length)
			$('.manMuser>i').eq(i).prepend('<big class="pt15"></big>');
		}
	}
	/*
		滑过用户 弹出介绍 高亮头像(console.log)
		data：2014-8-29
		author：zhongyan
	*/
	$('.manMlist').on('mouseover', function(){
		$(this).find('.user-introduce').css({'display':'block'});
		var h = $(this).find('i').outerHeight();
		$(this).children().css('zIndex',100);
		//console.log($(this).position().top);
		
		if($(this).position().top < 160){
			$(this).find('.user-jiao').css({'top': "30px"});
			$(this).children().children('i').addClass('active');
			$(this).find('.user-introduce').css({'top': 0-$(this).position().top});
		}else if($(this).position().top < 320){
			var t = ($(this).find('.user-introduce').outerHeight() - $(this).find('.user-jiao').outerHeight())/2
			$(this).find('.user-jiao').css({'top': '30px'});
			$(this).children().children('i').addClass('active');
			$(this).find('.user-introduce').css({'top': 150-$(this).position().top});
		}else{
			$(this).find('.user-jiao').css({'top': "50px"});
			$(this).children().children('i').addClass('active');
			$(this).find('.user-introduce').css({'top': 290-$(this).position().top});
		};

		if($(this).position().left-iNum*726 < 300){
			$(this).find('.user-introduce').css({"right":"-218px"});
			$(this).children().children('i').addClass('active');
		}else{
			$(this).find('.user-introduce').css({"right":"138px"});
			$(this).children().children('i').addClass('active');
			$(this).find('.user-jiao').css({'left': "204px"}).addClass('user-jiaoR');
		};
	});
	$('.manMlist').on('mouseout',function(){
		 $(this).find('.user-introduce').css({'display':'none'});
		 $(this).children().css('zIndex',5);
		 $(this).children().children('i').removeClass('active');
	})
	
	/*
		点击用户 选择一个用户
		data：2014-8-29
		author：zhongyan
	*/
	$('.manMlist').on('click',function(){
		var name = $(this).children().children('i').text();
		for(var i=0; i<$('.manMuser>i').length; i++){
			$('.manMuser>i').eq(i).removeClass('act');
			$('.manMuser>b').eq(i).hide();
		};
		$(this).children().children('i').addClass('act');
		$(this).children().children('.manOpt').show();
		$('.manBtn-Y02').html(name);	
	});
	
	/*
		点击左右切换  改变透明度和display
		data：2014-8-29
		author：zhongyan
	*/
	var iNum = 0;
	var iw = $('.manLi').outerWidth();
	for(var i=1; i<=$('.manWidth li').length; i++){
		var str ='<a href="#" class="b">'+i+'</a> ';
		$('.manPage').append(str);
	}
	$('.manPage a').first().removeClass('b').addClass('k');
	$('.manPrev').on('click',function(){
		iNum--;
		
		if( iNum <0){
			iNum=$('.manWidth li').length-1;
		}
		$('.manSum').animate({'left':-iNum*726})
		$('.manPage a').removeClass('k').addClass('b');
		$('.manPage a').eq(iNum).removeClass('b').addClass('k');
	})
	$('.manNext').on('click',function(){
		iNum++;
		
		if( iNum >$('.manWidth li').length-1){
			iNum=0;
		}
		$('.manSum').animate({'left':-iNum*726});
		$('.manPage a').removeClass('k').addClass('b');
		$('.manPage a').eq(iNum).removeClass('b').addClass('k');
	})
	/*
		主题页面，展开、收缩
		data：2014-09-01
		author：zhongyan
	*/
	$('.open-btn').on('click',function(){
		$('.zy-open').slideToggle();
	});
	
})
