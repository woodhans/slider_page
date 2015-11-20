/*! author Hans.Wu http://www.hanswu.com
 require jquery 1.6+*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function ($) {
	function createSlider(url,direction,width,height,bgcolor,radius,id,zIndex){
		width=typeof (width)=="number"?width+"px":width;
		height=typeof (height)=="number"?height+"px":height;
		maskDiv=$('<div class="popup_layer" id="mask_'+id+'" style="z-index:'+zIndex+'"></div>').appendTo('body');
		popDiv=$('<div class="popup" id="popup_'+id+'" style="z-index:'+zIndex+'"><div class="frame '+direction+'" style="background-color:'+Hex2Color(bgcolor)+';width:'+width+'; height:'+height+'; -webkit-border-radius:'+radius+'px; border-radius:'+radius+'px; padding:'+radius+'px"><iframe src="'+url+'"></iframe><div class="close" id="close_'+id+'" style="z-index: '+zIndex+'">X</div></div></div>').appendTo('body');
		$('.popup_layer,.close').on('click',function(){
			$.removePopup(id,direction);
		});
	}
	$.removePopup=function(id,direction){
		direction=direction||"down";
		if(id){
			$('#popup_'+id).find('.frame').addClass('remove_'+direction);
		setTimeout(function(){
			$('#mask_'+id).remove();
			$('#popup_'+id).remove();
		},600)
		}else{
			$('div[id*=mask_]').remove();
			$('div[id*=popup_]').remove();
		}
	}
	var config = $.slider = function (options) {
		options = $.extend({}, config.defaults, options);
		if(!options.id)options.id=randomString(4,12);
		return createSlider(options.url,options.direction,options.width,options.height,options.bgcolor,options.radius,options.id,options.zIndex);
	}
	config.defaults={
		url:'',
		direction:'down',
		width:'100%',
		height:'100%',
		bgcolor:0xffffff,
		radius:0,
		id:'',
		zIndex:9000
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