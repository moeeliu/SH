$(function(){
	init();
	var i = 0;
	$(document).on("click",".btnleftC",function(){
		leftC(i);
		if(i==4){
			i=-1;
		}
		i++;
	});
	$(document).on("click",".btnrightC",function(){
		rightC(i);
		if(i==4){
			i=-1;
		}
		i++;
	});
});
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
   
