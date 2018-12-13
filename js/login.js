$(".pho_1").blur(function(){

		var reg = /^1[3-9]\d{9}/i;
		var str=$(this).val();
		if(!reg.test(str)){
			$(".phone1").css({
				"display":"block"
			})
		}else{
			$(".phone1").css({
				"display":"none"
			})
		}
	}
)
$(".pho_2").blur(function(){
		var ret= /^[a-zA-Z0-9]{6,16}$/i;
		if(!ret.test($(this).val())){
			$(".phone3").css({
				"display":"block"
			})
		}else{
			$(".phone3").css({
				"display":"none"
			})
		}
	})
