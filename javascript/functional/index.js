//函数式编程

//高阶函数
var add=function(a,b){
	return a+b;
}

function math(func,array){
	return func(array[0],array[1]);
}
match(add,[1,2]);

//函数尾调用
var number=0;
//递归吃内存(返回的不是一个函数，不是尾递归)
function jia(n){
	if(n==1){
		return 1;
	}
	return n + jia(n-1);
}
//尾递归
function jia2(n,total=0){
	if(n===1){
		return total+n;
	}
	return jia2(n-1,n+total);
}
console.log(jia2(3));

//1、柯里化
function curry(fn){
	return function(x){
		return fn(x);
	}
}
var add1 = x=>x+1;
var curryTest=curry(add1)(5);
console.log('柯里化：',curryTest);

//2、函数组合
function compose(fn1, fn2) {
	return function(x) {
		return fn1(fn2(x));
	}
}
var multiply2=x=>x*2;
var afterCompose=compose(add1,multiply2);
console.log('函数组合',afterCompose(5));

 //3、一个普通的函子
class Functor {
	constructor(value) {
		this.value = value;
	}
	map(fn) {
		return Functor.of(fn(this.value));
	}
}
Functor.of = function(value) {
	return new this(value);
};

var functorTest=new Functor(2).map(x=>x+10);
console.log('简单的函子',functorTest);

 //maybe函子
class Maybe extends Functor {
	map(fn) {
		return this.value ? Maybe.of(fn(this.value)) : this.value;
	}
}
Maybe.of = function(value) {
	return new Maybe(value);
};
var maybenull= new Maybe(null).map(add1);
var maybenotnull= new Maybe(10).map(add1);
console.log('maybenull',maybenull);
console.log('maybenotnull',maybenotnull);


//Either函子
class Either extends Functor{
	constructor(left,right){
		super();
		this.left=left;
		this.right=right;
	}
	map(fn){
		return  this.right? Either.of(this.left,fn(this.right)) : Either.of(fn(this.left),this.right);
	}
}
Either.of = function (left, right) {
  return new Either(left, right);
};

var eitherright= new Either(10,20).map(add1);
var eitherleft= new Either(10,null).map(add1);
console.log('eitherright',eitherright);
console.log('eitherleft',eitherleft);

//ap函子
class Ap extends Functor{
	ap(fn){
		return new Ap(this.value(fn.value));
	}
}
Ap.of = function(value) {
	return new Ap(value);
};
console.log('ap函子',new Ap(x=>x+1).ap(new Functor(2)));


//IO操作，用Monad 函子解决层层嵌套问题 (需在服务端运行)
// class IO extends Functor {
// 	join() {
// 		return this.value;
// 	}
// 	map(fn) {
// 		return new IO(fn(this.value));
// 	}
// 	flatMap(fn) {
// 		return this.map(fn).join();
// 	}
// }

// var fs = require('fs');
// var readFile = function(filename) {
// 	return new IO(function() {
// 		var sss = fs.readFileSync(filename, 'utf-8');
// 		console.log(sss);
// 		return sss;
// 	});
// };
// var print = function(x) {
// 	return new IO(function() {
// 		return x;
// 	});
// }
// var sss = readFile('./index.html').flatMap(print);
// setTimeout(function() {
// 	console.log(sss.value()());
// }, 1000);