"use strict";
class HelloWorld {
    constructor(greeting, name) {
        this.id = Math.floor(Math.random() * 100) + 1;
        this.greeting = greeting;
        this.name = name;
    }
    sayHello() {
        console.log(this.greeting + ' ' + this.name + '! Your personal ID is: ' + this.id);
    }
}
var hello = new HelloWorld('Welcome', 'Simon');
hello.sayHello();
//# sourceMappingURL=hello-world.js.map