/* 鼠标特效 */
var a_idx = 0;
jQuery(document)
	.ready(function($) {
		$("body")
			.click(function(e) {
				var a = new Array("❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法制❤", "❤爱国❤", "❤敬业❤", "❤诚信❤", "❤友善❤");
				var $i = $("<span></span>")
					.text(a[a_idx]);
				a_idx = (a_idx + 1) % a.length;
				var x = e.pageX,
					y = e.pageY;
				$i.css({
					"z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
					"top": y - 20,
					"left": x,
					"position": "absolute",
					"font-weight": "bold",
					"color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
				});
				$("body")
					.append($i);
				$i.animate({
						"top": y - 180,
						"opacity": 0
					},
					3000,
					function() {
						$i.remove();
					});
			});
	});
var mouse = document.querySelector('.mouse');
window.addEventListener('mousemove', function(event) {
	mouse.style.left = event.clientX - mouse.offsetWidth / 2 + 'px';
	mouse.style.top = event.clientY - mouse.offsetHeight / 2 + 'px';
})
