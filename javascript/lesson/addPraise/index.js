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
		this.element.onclick = function() {
			_this.addPraise();
			_this.showAnimate();
			fn(_this);
		}
	}
	showAnimate() {
		document.querySelector(".hand-small").style.transform = "translateY(-100px)";
		document.querySelector(".hand-small").style.opacity = "1";
		//动画完成还原状态
		setTimeout(function() {
			document.querySelector(".hand-small").style.opacity = "0";
			document.querySelector(".hand-small").style.transform = "translateY(0px)";
		}, 500);
	}

}

window.onload = function() {
	var ele = document.getElementById('hand');
	var a = new Thumb(ele, function(a) {
		console.log(a.count);
		if (a.count === 10) {
			for (let item of document.querySelectorAll(".hand-right-finger,.hand-left,.hidden")) {
				item.style.backgroundColor = "gray";
			}
			ele.onclick = null;
		};
	});
}

describe("这是测试2", function() {
  var a;
  it("and so is a spec", function() {
    a = true;
    expect(a).toBe(true);
  });
});