window.onload=function(){
		top1();
		navs();
}
//头部
function top1(){
	$(".twos").mouseover(function(){
		$(".phone").css({
			"display":"block"
		});
	});
	$(".twos").mouseout(function(){
		$(".phone").css({
			"display":"none"
		});
	});
}
//导航栏的隐藏(出现)
function navs(){
	let i="";
	$(".navs").children("ul").children("li").mouseover(
		function(){
			i = $(this).index();
			console.log(i);
			if(i==1){
            	$(".n1").css({
            		"display":"block",
            		"left": "215px",
    				"top": "162px"
            	});
            	
            }else{
            	$(".n1").css({
            		"display":"none"
            	});	
            }
            if(i==2){
            	$(".n2").css({
            		"display":"block",
            		"left": "290px",
    				"top": "162px"
            	});
            	
            }else{
            	$(".n2").css({
            		"display":"none"
            	});	
            }
            if(i==3){
            	$(".n3").css({
            		"display":"block",
            		"left": "365px",
    				"top": "162px"
            	});
            	
            }else{
            	$(".n3").css({
            		"display":"none"
            	});	
            }
            if(i==4){
            	$(".n4").css({
            		"display":"block",
            		"left": "440px",
    				"top": "162px"
            	});
            	
            }else{
            	$(".n4").css({
            		"display":"none"
            	});	
            }
            if(i==5){
            	$(".n5").css({
            		"display":"block",
            		"left": "515px",
    				"top": "162px"
            	});
            	
            }else{
            	$(".n5").css({
            		"display":"none"
            	});	
            }
            if(i==6){
            	$(".n6").css({
            		"display":"block",
            		"left": "590px",
    				"top": "162px"
            	});
            	
            }else{
            	$(".n6").css({
            		"display":"none"
            	});	
            }
		}
	)
	
	$(".navs").children("ul").children("li").mouseout(
		function(){
			$(".nvshi").css({
				"display":"none"
			})
		}
	)
}


