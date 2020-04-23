var HelloWorld = /** @class */ (function () {
    function HelloWorld(greeting, name) {
        this.id = Math.floor(Math.random() * 100) + 1;
        this.greeting = greeting;
        this.name = name;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log(this.greeting + ' ' + this.name + '! Your personal ID is: ' + this.id);
    };
    return HelloWorld;
}());
var hello = new HelloWorld('Welcome', 'Simon');
hello.sayHello();
