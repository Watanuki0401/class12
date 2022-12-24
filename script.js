const person = {
    name: "Hiro" ,　　
    age: 16,
    sayHello: function() {
        document.write('Hello! My name is ' + this.name);
    } 　
};

document.write(typeof person);
document.write('<br>');
document.write('{name: "', person.name,'", age: ', person.age, ', sayHello: ', typeof person.sayHello, '}<br>');          // {name: "Hero", age: 15, sayHello: ƒ}

person.sayHello();

document.write('<br>');
document.write('<br>');
document.write('<br>');

const human = new Object();     // プロパティを持たない空のオブジェクトを生成
document.write('{} [[prototype]]:Object　とコンソールでは表示される', '<br>');             // {} human の中身　

human.name = 'Takesi';            // プロパティを追加
human.age = 16;
human.sayHello = function() {
        document.write('Hello! My name is ' + this.name,'<br>');
};

document.write(typeof human,'<br>');        // object
document.write(human,'<br>');
human.sayHello();
