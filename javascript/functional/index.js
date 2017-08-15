// //函数式编程

// //1、柯里化

// function cury(fn){
// 	return function(x){
// 		return fn(x);
// 	}
// }
// var add1 = x=>x+1;
// var sss=cury(add1)(5);
// console.log('柯里化：',sss);

// //2、函数组合

// function compose(fn1,fn2){
// 	return function(x){
// 		return fn1(fn2(x));
// 	}
// }
// var multiply2=x=>x*2;
// var afterCompose=compose(add1,multiply2);
// console.log('函数组合',afterCompose(5));

// //3、一个普通的函子

class Functor{
	constructor(value){
		this.value=value;
	}
	map(fn){
		return Functor.of(fn(this.value));
	}
}
Functor.of = function(value) {
	return new Functor(value);
};

// var f1=new Functor(2).map(x=>x+10);
// console.log('简单的函子',f1);

// //maybe函子

class Maybe extends Functor{
	map(fn){
		return this.value ? Maybe.of(fn(this.value)) : this.value; 
	}
}
Maybe.of = function(value) {
	return new Maybe(value);
};

// var maybenull= new Maybe(null).map(add1);
// var maybenotnull= new Maybe(10).map(add1);
// console.log('maybenull',maybenull);
// console.log('maybenotnull',maybenotnull);


// //either函子

// class Either extends Functor{
// 	constructor(left,right){
// 		super();
// 		this.left=left;
// 		this.right=right;
// 	}
// 	map(fn){
// 		return  this.right? Either.of(this.left,fn(this.right)) : Either.of(fn(this.left),this.right);
// 	}
// }

// Either.of = function (left, right) {
//   return new Either(left, right);
// };

// var eitherright= new Either(10,20).map(add1);
// var eitherleft= new Either(10,null).map(add1);
// console.log('eitherright',eitherright);
// console.log('eitherleft',eitherleft);


//ap函子

// class Ap extends Functor{
// 	ap(fn){
// 		console.log(this);
// 		return new Ap(this.value(fn.value));
// 	}
// }
// Ap.prototype.of = function(value) {
// 	return new Ap(value);
// };
// console.log(new Ap(x=>x+1).ap(new Functor(2)));

//monad函子

class Monad extends Functor {
  join() {
    return this.value;
  }
  flatMap(fn) {
  	var sss=this.map(fn);
    return this.map(fn).join();
  }
  map(fn){
		return new Monad(fn(this.value));
	}
}




var ss= Maybe.of(
  Maybe.of(
    Maybe.of({name: 'Mulburry', number: 8402})
  )
).map(x=>x+1);
var fff=new Monad(2).flatMap(x=>x+1);
console.log(fff);

















