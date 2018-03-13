$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#radius',
		scrollingSpeed: 1000,
		css3:false,
		// scrollOverflow: false,
		easing: 'easeInOutCubic',
		// easing: 'easeOutBounce',  //尾巴彈彈
		// easing: 'easeInOutBounce',  //彈、彈、停一下、彈、彈
		// easing: 'easeOutElastic',  //超快加速、彈、彈
		// easing: 'easeInOutElastic',  //彈、彈、加速、彈、彈
		// easing: 'easeInElastic',  //彈、彈、加速
		// easing: 'easeInBounce',  //跳、跳、跳
		// easing: 'easeInOutCirc',  //慢、超快加速
		// easing: 'easeInBack',  //往回彈、加速
			// easing: 'easeOutCirc',  //子彈加速、減速
		// easing: 'easeInOutBack',  //往回彈、彈超過回位
		// easing: 'easeInCirc'  //慢、過半加速

		
	});
});