class sample{
    sampleHello(){
        console.log("arigatho")
    }
}




class Hello extends sample{
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
    }

    hello(){
        console.log("hey: " + (this.num1+this.num2))
    }
}

let hey=new Hello(20,30)

hey.hello()
hey.sampleHello()