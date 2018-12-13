$(".i1").blur(function(){

		var reg = /^1[3-9]\d{9}/i;
		var str=$(this).val();
		if(!reg.test(str)){
			$(".p1").css({
				"display":"block"
			})
		}else{
			$(".p1").css({
				"display":"none"
			})
		}
	}
)
$(".i2").blur(function(){
		if($(this).val()!=$("#btn").text()){
			$(".p2").css({
				"display":"block"
			})
		}else{
			$(".p2").css({
				"display":"none"
			})
		}
	})
	$(".i4").blur(function(){
		var ret= /^[a-zA-Z0-9]{6,16}$/i;
		if(!ret.test($(this).val())){
			$(".p4").css({
				"display":"block"
			})
		}else{
			$(".p4").css({
				"display":"none"
			})
		}
	})
