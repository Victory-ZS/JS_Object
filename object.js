// JavaScript source code

function myFunction() {

    var person = {};
    person.name = 'John';
    person.name = {
        firstname: 'John',
        surname: 'Mike'
    };
    delete person.name;

    var fruit = {
        apple: 20,
        pear: 20,
        peach: 10
    };
    var num = fruit.apple + fruit.pear + fruit.peach;
    document.getElementById("demo").innerHTML = "All fruit have:" + num;
}