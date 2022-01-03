class Grand_Parent {
    constructor(){
        this.gparea=" Delhi "
    }
     gp(){
            return "Hello, My GrandParents are at" + this.gparea
    }
}
class Parent extends Grand_Parent {
    constructor(){
        super();
        this.parea=" Banglore "
    }
    pm(){
        return "And parents are at" + this.parea
    }
}
class Child extends Parent {
    constructor(){
        super();
        this.area=" Rent ."
        console.log(this.gp()+this.pm()+"And I am paying my own"+this.area);
    }
}
new Child();