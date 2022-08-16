const promise=require('promise')

function getName(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
    resolve("sree")
        },3000)
    })
}

function getPhone(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
    resolve("66663666463626")
        },3000)
    })
}





//promise.all([getName(),getPhone()]).then((result)=>{
   // console.log(result)
//
//})

async function getUser(){
    let name=await getName()
    console.log(name)
    let phone=await getPhone()
    console.log(phone)

}
getUser()
