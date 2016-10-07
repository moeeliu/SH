$(function(){
	var n=2;

	$(document).on("click",".wI1",function(){
		if(n==2){
			$(".wI1").css('background-image','url(img/all/swap1.gif)');
			$(".warp1 ul").css("height","162px");
			$(".warp1 li").css("display","block");
			n=1;
			$(document).on("click",".warp1 li",function(){
				var t =this.innerHTML;
				$(".warp1 span").text(t);
			});
		}else{
			$(".wI1").css('background-image','url(img/all/swap2.gif)');
			n=2;
			$(".warp1 ul").css("height","0px");
			$(".warp1 li").css("display","none");
		}
		
	});
	$(document).on("click",".wI2",function(){
		if(n==2){
			$(".wI2").css('background-image','url(img/all/swap1.gif)');
			n=1;
			$(".warp2 ul").css("height","162px");
			$(".warp2 li").css("display","block");
			$(document).on("click",".warp2 li",function(){
				var t =this.innerHTML;
				$(".warp2 span").text(t);
			});
		}else{
			$(".wI2").css('background-image','url(img/all/swap2.gif)');
			n=2;
			$(".warp2 ul").css("height","0px");
			$(".warp2 li").css("display","none");
		}
		
	});
	$(document).on("click",".wI3",function(){
		if(n==2){
			$(".wI3").css('background-image','url(img/all/swap1.gif)');
			n=1;
			$(".warp3 ul").css("height","162px");
			$(".warp3 li").css("display","block");
			$(document).on("click",".warp3 li",function(){
				var t =this.innerHTML;
				$(".warp3 span").text(t);
			});
		}else{
			$(".wI3").css('background-image','url(img/all/swap2.gif)');
			n=2;
			$(".warp3 ul").css("height","0px");
			$(".warp3 li").css("display","none");
		}
		
	});
    $(document).on("click",".items li",function(){
    	$(this).siblings("li").removeClass("active");
    	$(this).addClass("active");
    	
    });
});