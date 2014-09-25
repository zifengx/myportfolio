/* 图片轮播 */
$(function ($) {
	var that = this,
		$picScrollDiv = $('#picScrollWrap'),
		$picScrollUl = $('#picScroll'),
		$picScrollLi = $picScrollUl.find('li'),
		nLen = $picScrollLi.length,
		sHand = '',
		t = 0,
		n = 0 ;
	for (var i = 0;i<nLen ;i++ )
	{
		sHand += '<span class="'+( !i && "on" )+'"><a title="" href="javascript:;"></a></span>'
	}
	var sHandler = '<div id="Handler">'+sHand+'</div>';
	$picScrollDiv.append(sHandler);
	var $handlerSpan = $('#Handler span');
	$picScrollLi.not(':first-child').hide();
	$handlerSpan.click(function() {
		var i = $(this).index();
		n = i;
		if ($(this).hasClass('on')) return;
		$picScrollLi.eq(i).stop(true,true).fadeIn(1000).addClass('on').siblings().stop(true,true).fadeOut(1000).removeClass('on');
		$(this).addClass('on').siblings().removeClass('on');
	});
	that.showAuto = function (){
		n = n >=(nLen - 1) ? 0 : ++n;
		$handlerSpan.eq(n).trigger('click');
	}
	t = setInterval(that.showAuto, 3000);
	$picScrollLi.hover(function(){clearInterval(t)}, function(){t = setInterval(that.showAuto, 3000);});
	$handlerSpan.hover(function(){clearInterval(t)}, function(){t = setInterval(that.showAuto, 3000);});
});

/*Validate Input*/
function validateForm() {
   var x = document.getElementById("autoPlace").value;
   var y = document.getElementById("data").value;
   
  if (x==null || x==""){		
		document.getElementById("area").innerHTML = "Area must be filled out";
        return false;
	}
	
  if (y==""){
		document.getElementById("area").innerHTML = "Please upload data file";
        return false;
	}
}



