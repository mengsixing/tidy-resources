'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//父类，点赞后count+1
var PraiseButton = function () {
	function PraiseButton() {
		_classCallCheck(this, PraiseButton);

		this.count = 0;
	}

	_createClass(PraiseButton, [{
		key: 'addPraise',
		value: function addPraise() {
			this.count += 1;
		}
	}]);

	return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb(_ref) {
		var element = _ref.element,
		    limit = _ref.limit,
		    fn = _ref.fn;

		_classCallCheck(this, Thumb);

		var _this2 = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));

		_this2.element = element;
		_this2.limit = limit;
		_this2.createThumb(fn);
		return _this2;
	}

	_createClass(Thumb, [{
		key: 'createThumb',
		value: function createThumb(fn) {
			var handHtml = '<div class="hand">\n\t\t<div class="hand-left"></div>\n\t\t<div class="hand-right">\n\t\t\t<div class="hand-right-finger finger1"><div class=\'finger1-press\'></div></div>\n\t\t\t<div class="hand-right-finger finger2"></div>\n\t\t\t<div class="hand-right-finger finger3"></div>\n\t\t\t<div class="hand-right-finger finger4"></div>\n\t\t\t<div class="hand-right-finger finger5"></div>\n\t\t\t<div class="hidden"></div>\n\t\t</div>\n\t</div>';
			$(this.element).html(handHtml);
			//绑定点击事件
			var _this = this;
			$(this.element).find('.hand').click(function () {
				if (_this.count + 1 >= _this.limit) {
					//变为灰色
					$(this).find(".hand-right-finger,.hand-left,.hidden,.finger1-press").css({ 'background': 'gray', 'border': 'none', 'box-shadow': 'none' });
					$(this).unbind("click");
				}
				_this.addPraise();
				_this.showAnimate();
				//把点赞数字暴露出去
				fn(_this.count);
			});
		}
	}, {
		key: 'showAnimate',
		value: function showAnimate() {
			var addone = $('<div class="hand-small">+' + this.count + '</div>');
			$(this.element).find('.hand').append(addone);
			$(addone).addClass('animate');
		}
	}]);

	return Thumb;
}(PraiseButton);

exports.default = Thumb;
