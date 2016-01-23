/*! author Hans.Wu http://www.hanswu.com
 * project: https://github.com/woodhans/slider_page
 require jquery 1.6+*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function ($) {
	function createSlider(url,direction,width,height,bgcolor,radius,id,zIndex,callback,closecallback){
		width=typeof (width)=="number"?width+"px":width;
		height=typeof (height)=="number"?height+"px":height;
		bgcolor=typeof(bgcolor)=="string"?bgcolor:Hex2Color(bgcolor);
		callback=typeof (callback)=="function"?callback:null;
		closecallback=typeof (closecallback)=="function"?closecallback:null;
		maskDiv=$('<div class="popup_layer" id="mask_'+id+'" style="z-index:'+zIndex+'"></div>').appendTo('body');
		popDiv=$('<div class="popup" id="popup_'+id+'" style="z-index:'+zIndex+'"><div class="frame '+direction+'" style="background-color:'+bgcolor+';width:'+width+'; height:'+height+'; -webkit-border-radius:'+radius+'px; -moz-border-radius:'+radius+'px; border-radius:'+radius+'px;"><iframe src="'+url+'" frameborder="no" scrolling="no"></iframe><div class="close" id="close_'+id+'" style="z-index: '+zIndex+'">X</div></div></div>').appendTo('body');
		$('.popup,.close').on('click',function(){
			$.removeSlider(id,direction,closecallback);
		});
		var docHeight=$(document).height(),windowHeight=$(window).height(),windowWidth=$(window).width(),popWidth=$('.frame').innerWidth(),popHeight=$('.frame').innerHeight();
		$('.popup_layer').height(docHeight);
		switch(direction){
			case "up":
			$('.popup').css('padding-left',(windowWidth-popWidth)/2);
			break;
			case "down":
			$('.popup').css('padding-left',(windowWidth-popWidth)/2);
			break;
			case "left":
			$('.popup').css('padding-top',(windowHeight-popHeight)/2);
			break;
			case "right":
			$('.popup').css('padding-top',(windowHeight-popHeight)/2);
			break;
			case "center":
			$('.popup').css('padding-left',(windowWidth-popWidth)/2).css('padding-top',(windowHeight-popHeight)/2);
			break;
		}
		if(callback){
			window.setTimeout(callback,600);
		}
	}
	$.removeSlider=function(id,direction,closecallback){
		direction=direction||"up";
		if(id){
			$('#popup_'+id).find('.frame').addClass('remove_'+direction);
		if(closecallback){
				setTimeout(closecallback,500);
			}
		setTimeout(function(){
			$('#mask_'+id).remove();
			$('#popup_'+id).remove();
		},600);
			
		}else{
			$('div[id*=mask_]').remove();
			$('div[id*=popup_]').remove();
			if(closecallback){
				setTimeout(closecallback,100);
			}
		}
	}
	var config = $.slider = function (options) {
		options = $.extend({}, config.defaults, options);
		if(!options.id)options.id=randomString(4,12);
		return createSlider(options.url,options.direction,options.width,options.height,options.bgcolor,options.radius,options.id,options.zIndex,options.Completed,options.Closed);
	}
	config.defaults={
		url:'',
		direction:'up',
		width:'100%',
		height:'100%',
		bgcolor:0xffffff,
		radius:0,
		id:'',
		zIndex:9000,
		Completed:null,
		Closed:null
	}
	function randomString(minlen,maxlen){
		maxlen=maxlen?maxlen:minlen;
		str=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		_arr=[];
		for(i=0;i<maxlen;i++){
			_rnd=Math.floor(Math.random()*26);
			if(i>minlen){
				if(Math.round(Math.random())){
					return _arr.join('')
				}
			}
			_arr.push(str[_rnd]);
		}
		return _arr.join('');
	}
	function Hex2Color(hex){
		return "#"+hex.toString(16);
	}
}))