"use strict";
var L02_HelloWorld;
(function (L02_HelloWorld) {
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
})(L02_HelloWorld || (L02_HelloWorld = {}));
//# sourceMappingURL=main.js.map