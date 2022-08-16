var read=require('readline-sync')

value=read.question("Enter 2 number")

value2=read.question()

if(value<value2){
    console.log('larger is'+value2)
}else{
    console.log('larger is '+value)
}

