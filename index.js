const    {f1,f2,f3,f4} = require('./solutions/solutions');



//f1  teest example

console.log('F1  **************  Test')
console.log("Example       : ['aba', 'xzxb', 'ab'], ['aba', 'baba', 'aba', 'xzxb']");
console.log(  "Result ===>",f1(['aba', 'xzxb', 'ab'], ['aba', 'baba', 'aba', 'xzxb']));

//f2 test example

console.log('F2  **************  Test');
console.log("Example1      : ('a1 12 13.b -14.5+2')");
console.log("Result ===> ",f2('a1 12 13.b -14.5+2'));
console.log('F2  **************  Test');
console.log("Example2      : 'Hello world ! '");
console.log("Result ===> ",f2('hello world'));


//f3  test example   ...
console.log("F3 ************ Test")
a = [{a: 1, b: 'str'}];
 const b = f3(a);
  b[0].a = 2;
  console.log('original array : ',a);
  console.log('copied array :',b)
  //  f4  test  Exmples

 f4(()=>console.log("first attempt f4 "))
   setTimeout(()=>{
    f4(()=>console.log("after 100ms "))},100);
    setTimeout(()=>{
        f4(()=>console.log("after 200ms "))},200);
        setTimeout(()=>
            f4(()=>console.log("after 300ms ")),300);





