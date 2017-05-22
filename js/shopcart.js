$(function(){
	//搜索栏聚焦和失焦
	$(':text').focus(function(){
		$('.search').css({display:'none'})
	}).blur(function(){
		$('.search').css({display:'block'})
	})
	$('div.find').mouseover(function(){
		$(this).css({background:'#f00'})
	}).mouseleave(function(){
		$(this).css({background:'#000'})
	})
})



$(function(){
	// 导航栏下拉效果
	$('.ls1').mouseover(function(){
		$('.ls1>#lis').slideDown();
	})
	
	$('.ls1').mouseleave(function(){
		$('.ls1>#lis').slideUp();
	})
	$('.char').mouseover(function(){
		$('.char>#lis2').slideDown();
	})
	
	$('.char').mouseleave(function(){
		$('.char>#lis2').slideUp();
	})
	
})


$(function(){
	//右边侧边栏
	 $('.rightaside1').hover(
	 	function(){
	 		$('.show1',this).css({display:'block'})
	 		$('.rightaside1 a span').css({display:'inline-block',color:'#fff',lineHeight:'34px'})
	 		$('.rightaside1>a').css({background:''})
	 		$('.rightaside1>a>i').css({display:'none'})
	 		$('.rightaside1').css({background:'#47A1ED'})
	 		
	 	},function(){
	 		$('.show1',this).css({display:'none'})
	 		$('.rightaside1>a>i').css({display:'block'})
	 			$('.rightaside1').css({background:'#fff'})
	 	})
	  $('.rightaside2').hover(
	 	function(){
	 		$('.show2',this).css({display:'block'})
	 		$('.rightaside2>a>i').css({display:'none'})
	 		$('.rightaside2>a').css({background:''})
	 		$('.rightaside2').css({background:'#47A1ED'})
	 		$('.rightaside2 a span').css({display:'inline-block',color:'#fff',lineHeight:'34px'})
	 	},function(){
	 		$('.show2',this).css({display:'none'})
	 		$('.rightaside2>a>i').css({display:'block'})
	 		$('.rightaside2 a span').css({display:'none'})
	 		$('.rightaside2').css({background:'#fff'})
	 	})

	   $('.rightaside3').hover(
	 	function(){
	 		$('.rightaside3>a>i').css({display:'none'})
	 		$('.rightaside3>a').css({background:''})
	 		$('.rightaside3').css({background:'#47A1ED'})
	 		$('.rightaside3 a span').css({display:'inline-block',color:'#fff',lineHeight:'34px'})
	 	},function(){
	 		$('.rightaside3>a>i').css({display:'block'})
	 		$('.rightaside3 a span').css({display:'none'})
	 		$('.rightaside3').css({background:'#fff'})
	 	})

	   $('.rightaside4').hover(
	 	function(){
	 		$('.rightaside4>a>i').css({display:'none'})
	 		$('.rightaside4>a').css({background:''})
	 		$('.rightaside4').css({background:'#47A1ED'})
	 		$('.rightaside4 a span').css({display:'inline-block',color:'#fff',lineHeight:'34px'})
	 	},function(){
	 		$('.rightaside4>a>i').css({display:'block'})
	 		$('.rightaside4 a span').css({display:'none'})
	 		$('.rightaside4').css({background:'#fff'})
	 	});
	   	var animated=true;

	   	var timer = null;

	   	var scronum = 0;

	   	$('#gotop').click(function(){
	   		clearInterval(timer);

	   		timer = setInterval(function(){
	   			console.log(scronum);
	   			scronum = $(window).scrollTop() - 40;
	   			$(window).scrollTop(scronum);

	   			if(scronum <= 0){
	   				clearInterval(timer);
	   			}

	   		},100);

	   		
	   	})

})

$(function(){
	//放大镜效果
	$('.simg_list').bind('click',function(){
		$(this).next().fadeIn('slow').click(function(){
			$(this).fadeOut('slow')
		})
	})
})

$(function(){
	//商品评论的选项卡
	var $mdl=$('.div3_title>dd');

	$mdl.bind('click',function(){
		$(this).css({background:'#999',color:'#fff'})
		.siblings().css({background:'#F3F3F3',color:'#000'})
		
		$('.ns_list').eq($mdl.index($(this))).show()
		.siblings().hide();
	})	

	$('#tab li').bind('click',function(){

		$('.tav>ul').eq($('#tab li').index($(this))).show().siblings().hide();

	})

})


$(function(){
	$('.sec-box>span').hover(function(){
		$(this).css({color:'#f00',border:'1px solid #f00'})
		$(this).next('ul').css({display:'block',})
		
		},function(){
		$(this).css({color:'#847b7b',border:'1px solid #847b7b'})
		
	})

	$('.sec-box').mouseleave(function(){
		$(this).children('ul').css({display:'none'})
	})

	$('.sec-box>span').next().hover(function(){
		$(this).css({color:'#f00',border:'1px solid #f00'})
	},function(){
		$(this).css({color:'#847b7b',border:'1px solid #847b7b',display:'none'})
	})
})

$(function(){
	//遍历a的hover 
	$('.top-box a').each(function(i){
		$(this).mouseover(function(){
			$(this).css({color:'red',textDecoration:'none'})
		}).mouseout(function(){
			$(this).css({color:'#fff'});
		});
	})
	$('#main a').each(function(i){
		$(this).mouseover(function(){
			$(this).css({color:'red',textDecoration:'none'})
		}).mouseout(function(){
			$(this).css({color:'#000'});
		})
	})
	$('#logoboxs a').each(function(i){
		$(this).mouseover(function(){
			$(this).css({color:'red',textDecoration:'none'})
		}).mouseout(function(){
			$(this).css({color:'#000'});
		})
	})
	$('.footer1 a').each(function(i){
		$(this).mouseover(function(){
			$(this).css({color:'#000',textDecoration:'none'})
		}).mouseout(function(){
			$(this).css({color:'#555'});
		})
	})

	$('.footer2 a').each(function(i){
		$(this).mouseover(function(){
			$(this).css({color:'#555',textDecoration:'none'})
		}).mouseout(function(){
			$(this).css({color:'#555'});
		})
})

$(function(){
	//套餐的选项卡
	$('.col-tab>ul>li').mouseover(function(){

		 	$(this).css({background:'#fff',borderTop:'2px solid #f00',color:'#f00'})
		 	.siblings().css({background:'#eee',borderTop:0})
		 	$('.col-list>div').eq(	$('.col-tab>ul>li').index($(this))).css({display:'block'})
		 	.siblings().css({display:'none'})
		 	// $mli.index($(this))
	})

})

$(function(){
	var index = null;
	var n=0;
	var l=6;
	var r= $(".small>ul").offset().left;
	var t=$('.small>ul>li').eq(1).width();
	var img = $('.big li');
	var b = null;
	var a =6;

	//按钮事件
	$('.small>ul>li').click(function(){
		
		$(this).css({opacity:'1'})
		.siblings().css({opacity:'0.5'});

		index = $('.small>ul>li').index($(this));
		//console.log(index);
		//img.addClass('hidden').eq(index).removeClass('hidden');

		img.eq(index).removeClass('hidden').siblings().addClass('hidden');

		if(index > b){

			if(index == 2){

				$('.small>ul').stop(true).animate({left:-t},500);	
				$('.small>ul>li').eq(2).css({opacity:'1'}).siblings().css({opacity:'0.5'})
				img.addClass('hidden').eq(2).removeClass('hidden');

			}

			if(index >= 3){

				$('.small>ul>li').eq(index).css({opacity:'1'}).siblings().css({opacity:'0.5'})
				$('.small>ul').stop(true).animate({left:-t*2},500);
				img.addClass('hidden').eq(index).removeClass('hidden');

			}
		}

		if( index < a){

			if(index == 3){

				$('.small>ul').stop(true).animate({left:-t},500);	
				$('.small>ul>li').eq(3).css({opacity:'1'}).siblings().css({opacity:'0.5'})
				img.addClass('hidden').eq(3).removeClass('hidden');

			}else{

				$('.small>ul').stop(true).animate({left:0},500);	
				$('.small>ul>li').eq(index).css({opacity:'1'}).siblings().css({opacity:'0.5'})
				img.addClass('hidden').eq(index).removeClass('hidden');


			}


		}
		a = index;
		b = index;
		n=index;
		l=index;
	})
	
	
	// 右边的按钮
	$('.pro_next').click(function(){
		n+=1;

		
		
		if($('.small>ul>li').eq(6).css('opacity') == '1'){	
			n=0;
			$('.small>ul').stop(true).animate({left:0},500);
			$('.small>ul>li').eq(0).css({opacity:'1'}).siblings().css({opacity:'0.5'})
			img.addClass('hidden').eq(0).removeClass('hidden');
			l=n;
		}
		 else if(n>=3){
			$('.small>ul>li').eq(n).css({opacity:'1'}).siblings().css({opacity:'0.5'})
			$('.small>ul').stop(true).animate({left:-t*2},500);
			img.addClass('hidden').eq(n).removeClass('hidden');
			l=n;
		}else if(n==2){
			$('.small>ul').stop(true).animate({left:-t},500);	
			$('.small>ul>li').eq(2).css({opacity:'1'}).siblings().css({opacity:'0.5'})
			img.addClass('hidden').eq(2).removeClass('hidden');
			l=n;

		}else{
			img.addClass('hidden').eq(1).removeClass('hidden');
			$('.small>ul>li').eq(1).css({opacity:'1'}).siblings().css({opacity:'0.5'})
			l=n;
		}
	})
	//左边的按钮
	$('.pro_pre').click(function(){
		
		l-=1;
		if($('.small>ul>li').eq(0).css('opacity') == '1'){
			
			l=6;
			$('.small>ul').stop(true).animate({left:(-t*2)},500)
			$('.small>ul>li').eq(l).css({opacity:'1'}).siblings().css({opacity:'0.5'})
			img.addClass('hidden').eq(l).removeClass('hidden');
			n=l;

		}else if(l==3){
			
			$('.small>ul').stop(true).animate({left:(-t)},500);
			$('.small>ul>li').eq(l).css({opacity:'1'}).siblings().css({opacity:'0.5'})
			img.addClass('hidden').eq(3).removeClass('hidden');
			n=l;

			
		}else if(l==2){
			
			$('.small>ul').stop(true).animate({left:'0'},500);
			$('.small>ul>li').eq(l).css({opacity:'1'}).siblings().css({opacity:'0.5'})
			img.addClass('hidden').eq(2).removeClass('hidden');
			n=l;

		}
		else{
			
			$('.small>ul>li').eq(l).css({opacity:'1'}).siblings().css({opacity:'0.5'})
			img.addClass('hidden').eq(l).removeClass('hidden');
			n=l;
		}
	})

})

//商品详情的选项卡
$(function(){
	$('#tab li').bind('click',function(){
	$(this).css({background:'#fff',borderTop:'2px solid #f00',color:'#f00'}).siblings()
	.css({background:'#EEEEEE',borderTop:'none',color:'#000'})
	$('.tav>ul').eq($('#tab li').index($(this))).show().siblings().hide();
})});
})

