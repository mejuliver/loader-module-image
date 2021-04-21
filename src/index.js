import './modernizr.js';
import LazyLoad from "vanilla-lazyload";

(function(){
	let image_api = {
		init(){
			const _this = this;
			
			Modernizr.on('webp', function(result) {
				if (result) {
				  	document.querySelectorAll('.webp').forEach(function(el){
				  		el.classList.remove('nowebp');
				  		el.classList.add('webp');
				  		if( el.classList.contains('lazy') ){
				  			if( el.getAttribute('data-webp-src') ){
				  				el.setAttribute('data-src',el.getAttribute('data-webp-src'));
				  			}else{
				  				el.setAttribute('data-src',el.getAttribute('data-original-src'));
				  			}
				  		}
				  	});
				} else {
				    document.querySelectorAll('.nowebp').forEach(function(el){
				    	el.classList.remove('webp');
				    	el.classList.add('nowebp');
				    	if( el.classList.contains('lazy') ){
				  			el.setAttribute('data-src',el.getAttribute('data-original-src'));
				  		}
				  	});
			  	}
			});

			window.onload = function(){
				var myLazyLoad = new LazyLoad();
				// After your content has changed...
				myLazyLoad.update();
			}
		}
	}

	image_api.init();
})();