/* 闭包 */

/* 什么是闭包
  1.是一个密闭的容器，类似与set，map容器， 存储数据的
  2.闭包是一个对象，存放数据的格式：  key：value
  形成的条件：
  1.函数嵌套
  2.内部函数引用外部函数的局部变量
  闭包的优点：
  延长外部函数局部变量的生命周期
  闭包的缺点：
  长期不销毁会造成内存泄漏
  注意点：
  1.合理的使用闭包
  2.用完闭包及时的清除或者销毁
*/


function fun() {
  let count = 1
  return function () {
    count++
    console.log(count);
  }
}


var fun2 = fun()
fun2(); //2
fun2(); //3



function f(n, o) {
  // n=2  o = 1
  console.log(o);
  return {
     f: (m) => {
       // m = 2  n = 1
        return f(m, n)
     }
  }
}

var a = f(0)
a.f(1) // 0
a.f(2) // 0
a.f(3) // 0

var b = f(0).f(1).f(2).f(3)  //undefined 0 1 2

var c = f(0).f(1) //

c.f(2) //1
c.f(3) //1 