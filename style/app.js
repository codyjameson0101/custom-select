// parallax timeline
jQuery(function($){
	var win = $(window);
	var slide = $('.slide');
	var fixedYear = slide.find('.fixed-year');
	var slideHeight = slide.height();
	var winHeight = win.height();
	$(window).scroll(function(){

		var inview = $('.inview .fixed-year');
		inview.css('opacity', 1);
		inview.each(function(){
			var ele = $(this).parent();
			var n = (ele.position().top - win.scrollTop() + ele.height());
			var i = (n + slide.height());
			var r = 2 * slide.width();
				$(this).css({ clip: "rect(" + n + "px " + r + "px " + i + "px auto)" })
		});

	});

});

//hover select
jQuery(function($){

function customScrollSelect(container){

	var selectPropertyList = container.find('ul');
	var listItem = selectPropertyList.find('li');
	var activeIndex = selectPropertyList.children('li.active').index();
	var listItemHeight = listItem.outerHeight() * 2;


	selectPropertyList.css({
			marginTop: -(activeIndex * listItemHeight)
		});


	selectPropertyList.click(function(){
		$(this).toggleClass('expanded');
		container.toggleClass('expanded');
	});

	listItem.hover(function(){
		var ele = $(this);
		var index = ele.index();
		ele.addClass('active').siblings().removeClass('active');
		ele.parent().css({
			marginTop: -(index * listItemHeight)
		})
	});

}

customScrollSelect($('.option-container'));

});


jQuery(function(){
	
	$(window).scroll(function(){
		var title = $('.main-title');
		var scrollPosition = $(window).scrollTop();
		title.css({
			marginTop:  - scrollPosition/1.5,
			// letterSpacing: scrollPosition/2
			// '-webkit-transform' : 'scale('+ scrollPosition/50 +')'

		})
	});
});