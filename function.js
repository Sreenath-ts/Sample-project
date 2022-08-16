var Person={name:"sreenath",age:20,place:'thrissur',display:function(){
    var name="sreedharan"
    console.log(name)
}}

Person.dob="21-09-2001"
console.log(Person.display())

Person.displayAge=function(){
    console.log(this.age)
}

console.log(Person.displayAge())

