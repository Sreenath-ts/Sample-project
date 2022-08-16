
const { reject } = require('promise')
const promise=require('promise')

function add(num1,num2){

    return new promise((resolve,reject)=>{
        if(num1==0){
            reject('error')
        }
        resolve(num1+num2)
    })
}
function multiply(num1,num2){

    return new promise((resolve,reject)=>{
        if(num1==0){
            reject('error')
        }
        resolve(num1*num2)
    })
}
function division(num1,num2){

    return new promise((resolve,reject)=>{
        if(num1==0){
            reject('error')
        }
        resolve(num1/num2)
    })
}
add(10,20).then((sum)=>{
    console.log(sum)
    return multiply(sum,sum)
}).then((pro)=>{
    console.log(pro)
    return division(pro,10)
}).then((divi)=>{
    console.log(divi)
})
.catch((err)=>{
    console.log(err)
})