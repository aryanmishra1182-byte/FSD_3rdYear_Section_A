function f2(){
    return new Promise((resolve,reject)=>{setTimeout(()=>{},2000)})
}
function f1(){
    return new Promise((resolve,reject)=>{setTimeout(()=>{console.log("Hii!!!");},4000)})
}
async function test(){
    try {
    await f1();
    await f2();
    } catch (error) {
    console.log("ERROR",error);
    }

}
test();