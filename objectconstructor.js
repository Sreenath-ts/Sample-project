function Person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("name: "+this.name+ "age:" +this.age )
    }
}

var sreenath=new Person("Sreenath",20,"Thrissur")

var sreedharan=new Person("sreedharan",55,"calicut")

sreenath.display()

sreedharan.display()