function sum(a,b){
return a+b;
}
function sumWithMsg(call_back,msg){
    const result=call_back(10,20);
    const fresult="HI "+msg+ "Your Score Is: "+result;
    console.log(fresult);
}
sumWithMsg(sum,"MR.Deepak");