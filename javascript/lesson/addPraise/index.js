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
		//绑定点击事件
		var _this = this;
		this.createThumb();
		$('#hand').click(function () {
			if(_this.count>=10){
				return;
			}
			_this.addPraise();
			_this.showAnimate();
			fn(_this);
		});
	}
	createThumb() {
		var handHtml = `<div class="hand" id="hand">
		<div class="hand-left"></div>
		<div class="hand-right">
			<div class="hand-right-finger finger1"></div>
			<div class="hand-right-finger finger2"></div>
			<div class="hand-right-finger finger3"></div>
			<div class="hand-right-finger finger4"></div>
			<div class="hand-right-finger finger5"></div>
			<div class="hidden"></div>
		</div>
	</div>`;
		$(this.element).html(handHtml);
	}
	showAnimate() {
		let addone= $('<div class="hand-small">+1</div>');
		$('#hand').append(addone);
		$(addone).addClass('animate');
	}
}

$(function () {
	var ele = document.getElementById('hand-wrapper');
	var a = new Thumb(ele, function (a) {
		console.log(a.count);
		if (a.count === 10) {
			$(".hand-right-finger,.hand-left,.hidden").css('background','gray');
			ele.onclick = null;
		};
	});
});



// describe("这是测试2", function() {
//   var a;
//   it("and so is a spec", function() {
//     a = true;
//     expect(a).toBe(true);
//   });
// });