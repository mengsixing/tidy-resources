function fun(n,o){
	console.log(o);
	return {
		fun:function(m){
			return fun(m,n)
		}
	}
}


var a=fun(0);

//1,0


a.fun(1);  //0

a.fun(2);  //0

var b=fun(0).fun(1).fun(2).fun(3);

//undefind,0,1,2
//fun(1,0)

var c= fun(0).fun(1);

//undefind,0

c.fun(2) //1

//fun(2,1)

c.fun(3);  //1

// function outer(){
// 	var c=1;
// 	function inner(){
// 		var d=2;
// 		return c+d;
// 	}
// 	return inner();
// }

// console.log(outer());

