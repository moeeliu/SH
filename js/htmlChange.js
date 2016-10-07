var n = 1;
$(function(){
	var text1,text2;
	$(".logo").on("click",function(){
	
		$("#contain").load("main.html");
		
	});
	
	$("#checkTo").on("click",function(){
		text2 = "new arrivals";
		$("#contain").load("comming.html",function(){
			$(".commingContain h1").text(text2);
		});
	});
	$("#woman").on("click",function(){
		text1 = "woman";
		$("#contain").load("woman.html",function(){
			text1 = "woman";
		});
	});
	$("#men").on("click",function(){
		
		$("#contain").load("people.html",function(){
			text1 = "men";
		});
	});
	$("#kids").on("click",function(){
		
		$("#contain").load("kid.html",function(){
			text1 = "kids";
		});
	});
	$("#about").on("click",function(){
		
		$("#contain").load("about.html");
	});
	$("#commingsoon").on("click",function(){
		text2 = "commingsoon";
		$("#contain").load("comming.html",function(){
			init();
			$(".commingContain h1").text(text2);
		});
		
	});
	$(document).on("click","#product",function(){
		$("#contain").load("allproduct.html",function(){
			$(".allContain h1").text(text1);
		});
		scroll(0,0);
	});
	
})
function init(){
	$(".list li:eq(0)").addClass("f0");
	$(".list li:eq(1)").addClass("f1");
	$(".list li:eq(2)").addClass("f2");
	$(".list li:eq(3)").addClass("f3");
	$(".list li:eq(4)").addClass("f4");
}
function rightC(a){
	var r = -1;
	if(a==0){
		rA(a,-a,r);
		rA(a+1,-a,r);
		rA(a+2,-a,r);
		rA(a+3,-a,r);
		rA(a+4,-a,r);
	}
	if(a==1){
		rA(a-1,-a,r);
		rA(a,-a,r);
		rA(a+1,-a,r);
		rA(a+2,-a,r);
		rA(a+3,-a,r);
	}
	if(a==2){
		rA(a-2,-a,r);
		rA(a-1,-a,r);
		rA(a,-a,r);
		rA(a+1,-a,r);
		rA(a+2,-a,r);
	}
	if(a==3){
		rA(a-3,-a,r);
		rA(a-2,-a,r);
		rA(a-1,-a,r);
		rA(a,-a,r);
		rA(a+1,-a,r);
	}
	if(a==4){
		rA(a-4,-a,r);
		rA(a-3,-a,r);
		rA(a-2,-a,r);
		rA(a-1,-a,r);
		rA(a,-a,r);
	}
}
function leftC(a){
	var r = 1;
	if(a==0){
		rA(a,a,r);
		rA(a+1,a,r);
		rA(a+2,a,r);
		rA(a+3,a,r);
		rA(a+4,a,r);
	}
	if(a==1){
		rA(a-1,a,r);
		rA(a,a,r);
		rA(a+1,a,r);
		rA(a+2,a,r);
		rA(a+3,a,r);
	}
	if(a==2){
		rA(a-2,a,r);
		rA(a-1,a,r);
		rA(a,a,r);
		rA(a+1,a,r);
		rA(a+2,a,r);
	}
	if(a==3){
		rA(a-3,a,r);
		rA(a-2,a,r);
		rA(a-1,a,r);
		rA(a,a,r);
		rA(a+1,a,r);
	}
	if(a==4){
		rA(a-4,a,r);
		rA(a-3,a,r);
		rA(a-2,a,r);
		rA(a-1,a,r);
		rA(a,a,r);
	}
}
function rA(arg,i,r){
	var a = arg+ i;
	var b=a+r;
	if(a>=5){a -=5; }
	if(b>=5){b -=5; }
	if(a<0){a += 5;}
	if(b<0){b += 5;}
	$(".list li:eq("+arg+")").removeClass("f"+a);
	$(".list li:eq("+arg+")").addClass("f"+b);
}          
   
