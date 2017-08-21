class PraiseButton {
	constructor() {
		this.count = 0;
	}
	addPraise() {
		this.count += 1;
	}

}
class Thumb extends PraiseButton {
	constructor(element, fn) {
		super();
		this.element = element;
		this.createThumb(fn);
	}
	createThumb(fn) {
		var handHtml = `<div class="hand">
		<div class="hand-left"></div>
		<div class="hand-right">
			<div class="hand-right-finger finger1"><div class='finger1-press'></div></div>
			<div class="hand-right-finger finger2"></div>
			<div class="hand-right-finger finger3"></div>
			<div class="hand-right-finger finger4"></div>
			<div class="hand-right-finger finger5"></div>
			<div class="hidden"></div>
		</div>
	</div>`;
		$(this.element).html(handHtml);
		//绑定点击事件
		var _this = this;
		$(this.element).find('.hand').click(function() {
			if (_this.count >= 10) {
				//变为灰色
				$(this).find(".hand-right-finger,.hand-left,.hidden,.finger1-press").css({'background':'gray','border':'none','box-shadow':'none'});
				return;
			}
			_this.addPraise();
			_this.showAnimate();
			fn(_this);
		});
	}
	showAnimate() {
		let addone = $('<div class="hand-small">+'+this.count+'</div>');
		$(this.element).find('.hand').append(addone);
		$(addone).addClass('animate');
	}
}

 export default Thumb;
