function show()
{console.log('my name is ravi');
console.log('i am engineer');
}
show();//function invocations

function checkType(value) //function with argument & no return value
{
    console.log('value is',value);
    console.log('type is ',typeof value);
    console.log('----------------------------');

}
checkType(100);
checkType("ravi");
checkType(true);
checkType(undefined);
checkType(null);
checkType();

function addition(arg1,arg2,arg3)
{ console.log('values are:',arg1,arg2,arg3);
var result=arg1+arg2+arg3;
return result;
}
var res=addition(100,23,456);
console.log('result is',res);
//addition(-56,239,677);
//addition('ravi',66,'pune');