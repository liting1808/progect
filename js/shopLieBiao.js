window.onload=function(){
		top1();
		header();
		//nine_span();
		//console.log("9:"+jiSuan());
		jiSuan();
		navs();
		//right_rig();
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
			//console.log(i);
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
//展示(滑过之后图片放大)
function header(){
	$(".head_top").hover(
		function(){
			$(this).children(".heads").children("a").children("img").css({
				"transform": "scale(1.1)",
				"transition":"all 1s"
			},300)
		},
		function(){
			$(this).children(".heads").children("a").children("img").css({
				"transform":"scale(1)"
			},300)
		})
	}

//活动即将开始span
	let index = "";
    $(".nine_span").children("p").click(
        function(){
        	index = $(this).index();//获取下表
        	//console.log(index);
            if(index==0){
            	$(".spanOne").css({
            		"display":"block"
            	});
            	$(".s1").css({
	                "border-bottom":"4px solid #000000"
	            });
            }else{
            	$(".spanOne").css({
            		"display":"none"
            	})
            	$(".s1").css({
	                "border-bottom":"none"
	            });
            }
            if(index==1){
            	$(".spanTwo").css({
            		"display":"block"
            	})
            	$(".s2").css({
	                "border-bottom":"4px solid #000000"
	               
	            });
            }else{
            	$(".spanTwo").css({
            		"display":"none"
            	})
            	$(".s2").css({
	                "border-bottom":"none"
	            });
            }
            if(index==2){
            	$(".spanThree").css({
            		"display":"block"
            	})
            	$(".s3").css({
	                "border-bottom":"4px solid #000000"
	               
	            });
            }else{
            	$(".spanThree").css({
            		"display":"none"
            	})
            	$(".s3").css({
	                "border-bottom":"none"
	            });
            }
            if(index==3){
            	$(".spanFore").css({
            		"display":"block"
            	})
            	$(".s4").css({
	                "border-bottom":"4px solid #000000"
	               
	            });
            }else{
            	$(".spanFore").css({
            		"display":"none"
            	})
            	$(".s4").css({
	                "border-bottom":"none"
	            });
            }
            if(index==4){
            	$(".spanFive").css({
            		"display":"block"
            	})
            	$(".s5").css({
	                "border-bottom":"4px solid #000000"
	               
	            });
            }else{
            	$(".spanFive").css({
            		"display":"none"
            	})
            	$(".s5").css({
	                "border-bottom":"none"
	            });
            }
            jiSuan();
        })

//计算盒子的高
function jiSuan(){
	var sum1=$(".one").height();
	var sum2=$(".two").height();
	var sum3=$(".three").height();
	var sum4=$(".fore").height();
	var sum5=$(".five").height();
	var sum6=$(".six").height();
	var sum7=$(".seven").height();
	var sum8=$(".eight").height();
	var sum9=$(".nine").height();
	var sum=sum1+sum2+sum3+sum4+sum5+sum6+sum7+sum8+sum9;
	$(".header").height(sum+115);
}

//function right_rig(){
//	$(".right_rig").hover(
//		function(){
//			$(".shop").css({
//				"display":"block"
//			},1000)
//	}),
//	$(".right_rig").hover(
//		function(){
//			$(".shop").css({
//				"display":"none"
//			},1000)
//		}
//	)
//}
