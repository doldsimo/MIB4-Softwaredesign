class HelloWorld {
	greeting: string;
	name: string;
	id: number = Math.floor(Math.random() * 100) + 1;

	constructor(greeting: string, name: string) {
		this.greeting = greeting;
		this.name = name;
	}

	sayHello(): void {
		console.log(this.greeting + ' ' + this.name + '! Your personal ID is: ' + this.id);
	}
}

var hello: HelloWorld = new HelloWorld('Welcome', 'Simon');
hello.sayHello();