//基于类的程序设计中最基本的模式是允许使用继承来扩展现有的类
// 使用extends 关键字创建子类
//包含构造函数的派生类必须调用super() 他会执行基类的构造方法


class Greeter{
	greeting: string; // 属性
	constructor() { // 构造函数
		this.greeting = message;
	}
	greet(){ //方法
		return "Hello ," + this.greeting;
	}
}
let greeter = new Greeter("world");  //基于类的继承  对象是由类创建出来的


class Animal {//定义基类
	name:string; //基类的属性
	constructor(theName : string) { //基类的构造函数
		this.name = theName;
	}
	move(distanceInMeters: number  = 0){ //基类的方法 基于基类的类都会使用该函数
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Snake extends Animal {
	
	constructor(name:string) { //继承父类中的属性
		super(name);   //super 函数是基于基类中下相同的属性
	}
	move(distanceInMeters = 5 ){//基于基类的函数 可以在子类中定义自己的方法
		console.log("Galloping...");
		super.move(distanceInMeters);//继承父类中的函数
	}
}

class Horse extends Animal {//父类中的属性和方法 子类中必须含有 但是子类可以对父类函数进行拓展
	
	constructor(name:string) { //每一个基于基类的子类
		super(name);
	}
	move(distanceInMeters = 45){
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}

let sam = new Snake("Sammy the python"); //根据类创建出对象
let tom:Animal = new Horse("Tommy the Palomino");//tom 被声明为Animal 类型

sam.move();//根据创建出来的对象 调用其中的函数 并可对参数进行赋值等
tom.move(34);
