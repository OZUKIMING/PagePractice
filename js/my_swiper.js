$(function() {
			var mySwiper = new Swiper('.swiper-container', {				
				direction: 'horizontal',
				loop: true,
				autoplay: 5000,
				speed:800,
				//用户操作后   自动滚动会停止
				autoplayDisableOnInteraction:false,
				// 如果需要分页器，点点
				pagination: '.swiper-pagination',
				paginationClickable:true,
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
				// 如果需要滚动条
				//				scrollbar: {
				//					el: '.swiper-scrollbar',
				//				},
			})
		})