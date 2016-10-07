$(function(){
	
	state();
	
	$(".btnleft img").click(function(){
		left();
	});
	$(".btnright img").click(function(){
		right();
	});
	
	
});
function state(){
	$("#img-0").css("left","-197px");
	$("#img-1").css("left","0px");
	$("#img-2").css("left","197px");
	$("#img-3").css("left","394px");
	$("#img-4").css("left","591px");
	$("#img-5").css("left","788px");
	$("#img-6").css("left","985px");
	$("#img-7").css("left","1182px");
}
function left(){
	var x=-197;
	leftTo("img-1",x);
	leftTo("img-2",x);
	leftTo("img-3",x);
	leftTo("img-4",x);
	leftTo("img-5",x);
	leftTo("img-6",x);
	leftTo("img-7",x);

}
function right(){
	var x = 197;
    leftTo("img-7",x);
	leftTo("img-1",x);
	leftTo("img-2",x);
	leftTo("img-3",x);
	leftTo("img-4",x);
	leftTo("img-5",x);
	leftTo("img-6",x);
	
	
}
function leftTo(img,x){
	var x1=getleft(img,x);
	animate("#"+img,x1);
}
function animate(img,x){
	$(img).stop(true,true).animate({"left":x+"px"},1500,function(){
		if(x<0){
            changeleft(img);			
		}
		if(x>=1182){
			changeright(img);
		}
	});
}
function getleft(img,x){
	var n = document.getElementById(img);
	
	return parseInt(getStyle(n,"left").replace("px",""))+x;
}
function getStyle(obj, property){
	if (obj.style[property]){
	 	return obj.style[property];
	}
	else if (obj.currentStyle){
	 	return obj.currentStyle[property];
	}
	else if (document.defaultView && document.defaultView.getComputedStyle){
		var style = document.defaultView.getComputedStyle(obj, null);
		return style.getPropertyValue(property);
	}
	return null;
}
function changeleft(img){
	$(img).css("left","1182px");
}
function changeright(img){
	$(img).css("left","0px");
}

