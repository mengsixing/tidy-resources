//父类，点赞后count+1
class PraiseButton {
	constructor() {
		this.count = 0;
	}
	addPraise() {
		this.count += 1;
	}

}
class Thumb extends PraiseButton {
	constructor({element,limit, fn}) {
		super();
		this.element = element;
		this.limit=limit;
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
			if ( (_this.count+1) >=_this.limit ) {
				//变为灰色
				$(this).find(".hand-right-finger,.hand-left,.hidden,.finger1-press").css({'background':'gray','border':'none','box-shadow':'none'});
				$(this).unbind("click");
			}
			_this.addPraise();
			_this.showAnimate();
			//把点赞数字暴露出去
			fn(_this.count);
		});
	}
	showAnimate() {
		let addone = $('<div class="hand-small">+'+this.count+'</div>');
		$(this.element).find('.hand').append(addone);
		$(addone).addClass('animate');
	}
}

 export default Thumb;
