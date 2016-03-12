
$(document).ready(function () {
	$("#fullpage").fullpage({
		navigation:true,
		loopBottom:true,
		verticalCentered:false,
		afterLoad:function (al,idx) {
			var one = $('#square-one'),
			two = $('#square-two'),
			three = $('#square-three'),
			four = $('#square-four');
			if(idx==1){
				one.addClass("bounceInDown");
				
					two.addClass('bounceInRight');
				
		
		three.addClass('bounceInLeft');
		four.addClass('bounceInUp');
				
			}else{
				one.removeClass("bounceInDown");
		two.removeClass('bounceInRight');
		three.removeClass('bounceInLeft');
		four.removeClass('bounceInUp');
			}
		}
	})
})
	
function init () {		
		
}
function remove () {
	var m_name = $('#m-name');
	m_name.removeClass('bounce');
}