
$(function() { 
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



				//左边的导航栏
				 $('.main1-l>ul>li').hover(function() {
				 		$(this).css({background:'#e6e6e6'})
				 		$('.main1-l>ul>li>a').eq($(this).index()).css({color:'red'})
					 	// $('#tab').show();
						$('.tab-box').eq($(this).index()).show().css({background:'#e6e6e6'});
						},function() {
						$(this).css({background:'#fff'})
						$('.main1-l>ul>li>a').eq($(this).index()).css({color:'#000'})
						$('.tab-box').hide();}

						);

				})

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

				//文字滚动效果
				var a = 0;
				setInterval(function(){
					a -= 60;
					 $('#js-text-bg').animate({top:a},600);

					 if($('#js-text-bg').position().top == -180){
					 		a = 0;
					 		$('#js-text-bg').animate({top:a},0);
					 			
					 }


				},3000);
				//图片hover阴影效果
				$('.main3-5 img').mouseover(function(){
					$(this).css({boxShadow:'8px 5px 15px #555'})
					
				}).mouseout(function(){
					$(this).css({boxShadow:'8px 5px 15px #fff'})
				})

				//图片移动效果
				
					$('a img').not('.main3-5 img').mouseover(function(){
						$(this).animate({
							left:'10px'});
						
					})
					$('a img').not('.main3-5 img').mouseleave(function(){
						$(this).animate({
							left:'0px'
						})
					})


					var lasideFlag = 0;

					function checkLeftFlag(){

						$('.leftaside1 li').eq(lasideFlag).find('a').css({display:'none'}).siblings().css({display:'block',color:'##4AC0E0'});

					}


					 $('.leftaside1>li>a').mouseover(function(){
					 	$(this).css({display:'none'}).siblings().css({display:'block'})
					 })
					 $('.leftaside1>li>span').mouseout(function(){
					 		$(this).css({display:'none'}).siblings().css({display:'block'})
					 		checkLeftFlag();
					 })

					 $(window).scroll(function(){
					 	var target=($(window).scrollTop());
					 	
						if(target>3100){
							$('.leftaside').css({display:'block'});
							$('.leftaside1 li').find('a').css({display:'block'}).siblings().css({display:'none'}).end().end().eq(4).find('a').css({display:'none'}).siblings().css({display:'block',color:'##4AC0E0'})
							lasideFlag = 4;
						}else if(target>2450 && target<=2600 ){
							// 3楼
							lasideFlag = 3;
							$('.leftaside').css({display:'block'});
							$('.leftaside1 li').find('a').css({display:'block'}).siblings().css({display:'none'}).end().end().eq(3).find('a').css({display:'none'}).siblings().css({display:'block',color:'##4AC0E0'})
							
						}else if(target >1800 &&target<=1900){
							lasideFlag = 2;
							// 2楼
							$('.leftaside').css({display:'block'});
							$('.leftaside1 li').find('a').css({display:'block'}).siblings().css({display:'none'}).end().end().eq(2).find('a').css({display:'none'}).siblings().css({display:'block',color:'##4AC0E0'})
						}
						else if(target > 1120 &&target <= 1200){
							lasideFlag = 1;
							// 1楼
							$('.leftaside').css({display:'block'})
							$('.leftaside1 li').find('a').css({display:'block'}).siblings().css({display:'none'}).end().end().eq(1).find('a').css({display:'none'}).siblings().css({display:'block',color:'##4AC0E0'})
							
						}else if(target >= 500 &&target <= 800){
							lasideFlag = 0;
							// 明星单品
							$('.leftaside').css({display:'block'})
							$('.leftaside1 li').find('a').css({display:'block'}).siblings().css({display:'none'}).end().end().eq(0).find('a').css({display:'none'}).siblings().css({display:'block',color:'##4AC0E0'})
						}else if(target < 500){

							$('.leftaside').css({display:'none'});

						}


					 })


					 // 左边侧边栏
					 $('.leftaside1 li').on('click', function() {


					 })

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
	//hover时main2出现红色上border
	$( '.zw > .box1 > li').mouseover(function(){
		$(this).css({borderTop:'1px solid #f00'})
	}).mouseout(function(){
		$(this).css({border:'1px solid #e6e6e6'})
	})
	//文字的显示
	$('.main3-5>div').hover(function(){
		
			$(this).children('div').slideDown();
	
	},function(){
		$(this).children('div').slideUp();
		
	})
	})			
					 

		
//明星单品的点击效果
var lbtn=document.getElementsByClassName('lbtn')[0];
var rbtn=document.getElementsByClassName('rbtn')[0];
var box1=document.getElementsByClassName('box1')[0];
var li=box1.getElementsByTagName('li');
var cbtn1=document.getElementsByClassName('cbtn1')[0];
var cbtn2=document.getElementsByClassName('cbtn2')[0];
var pics1=document.getElementsByClassName('pics2-1')[0];
var pics2=document.getElementsByClassName('pics2')[0];
var li2=pics1.getElementsByTagName('li');



lbtn.onclick=function(){
	box1.style.transition='all 3s';
	box1.style.left=parseInt(box1.style.left)-li[0].offsetWidth+'px';
}
rbtn.onclick=function(){
	box1.style.transition='all 3s'
	box1.style.left=parseInt(box1.style.left)+li[0].offsetWidth+'px';
}
pics2.onmouseover=function(){
	cbtn1.style.display="block";
	cbtn2.style.display="block";
}
pics2.onmouseout=function(){
	cbtn1.style.display="none";
	cbtn2.style.display="none";
}	
pics1.innerHTML += pics1.innerHTML;
pics1.style.width = li2.length * li2[0].offsetWidth + 'px';
var cflag = true;
cbtn1.onclick=function(){
	if(cflag == true){
		cflag = false;
		if(pics1.offsetLeft == -pics1.offsetWidth/2){
			pics1.style.left = 0;
		}
		move(pics1,{left:pics1.offsetLeft-li2[0].offsetWidth},function() {
			cflag = true;
		})
	}
}
cbtn2.onclick=function(){
	if(cflag == true){
		cflag = false;
		if(pics1.offsetLeft>=0){
			pics1.style.left = -pics1.offsetWidth/2+ 'px'; 
		}
		move(pics1,{left:pics1.offsetLeft+li2[0].offsetWidth},function() {
			cflag = true;
		})
	}
}


//焦点轮播图
	
	
        window.onload = function () {
        	
            var tain = document.getElementById('tain');
            var list3 = document.getElementById('list3');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prevs = document.getElementById('prevs');
            var nexts = document.getElementById('nexts');
            var index = 1;
            var len = 3;
            //标志位   
            var animated = false;
//          var interval = 3000;
            var timer = null;


            function animate (offset) {

                animated = true;
                var time = 300;//走完一张图片需要的时间
                var inteval = 10;//每走一段路程需要的时间
                var speed = offset/(time/inteval);//步长
                //目标值
                var target = parseInt(list3.style.left) + offset;

                var go = function (){
                	
                    if ( (speed > 0 && parseInt(list3.style.left) < target) || (speed < 0 && parseInt(list3.style.left) > target)) {
                    	
                        list3.style.left = parseInt(list3.style.left) + speed + 'px';
                        //闭包
                        setTimeout(go, inteval);
                    }
                    else {
                    	
                        list3.style.left = target + 'px';
                        
                        if(target>-800){
                            list3.style.left = -800 * len + 'px';
                        }
                        if(target<(-800 * len)) {
                            list3.style.left = '-800px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
            	//初始化小图标
                for (var i = 0; i < buttons.length ; i++) {
//                  
                        buttons[i].className = '';
//                   
                }
                //使当前小图标变色
                buttons[index - 1].className = 'on';
            }

            function play() {
            	//清除定时器,避免产生定时器叠加效果
            	clearInterval(timer);
            	
                timer = setTimeout(function () {
                    nexts.onclick();
                    play();
                    
                }, 3000);
            }


            function stop() {
            	
                clearTimeout(timer);
            }

            nexts.onclick = function () {
                
                if (index == 3) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                

                if(!animated){
                	
                	animate(-800);
                }
                
                showButton();
            }


            prevs.onclick = function () {
            	
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 3;
                }
                else {
                    index -= 1;
                }
                if(!animated){
                	
                	animate(800);
                }
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    //获取每个小图标的index属性
                    var myIndex = parseInt(this.getAttribute('index'));
                    //图片每次移动的距离
                    var offset = -800 * (myIndex - index); 
                    
                    if(!animated){
            
                    	//调用动画函数,使图片移动
                    	animate(offset);
                    }
					
                    //将当前小图标的index属性值赋值给index
                    index = myIndex;
                    showButton();
                }
            }

            tain.onmouseover = stop;
            tain.onmouseout = play;

            play();

        }