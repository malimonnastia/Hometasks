var myText ='London is the capital of Great Britain';
   emptyText = '';
   text1 = myText|| 'What is London?';
   text2 = emptyText|| 'What is London?';

   console.log(text1);
   console.log(text2);



var animal = {
name: 'Racoon',
age: 3,
color: 'gray',
mood: 'happy',
sayHi: function() {
return 'How are you doing?';
}
};

console.log(animal);
console.log(animal.sayHi());



var i;
for (i=2; i<=20; ++i) {
 if (i % 2 == 0) {
   console.log(i);
 }

}


var MenuItem='Coffee',
   Type;
switch(MenuItem) {
case 'Coffee': Type ='  Drink'; break;
case 'Pasta' : Type = '  Main Dish'; break;
case 'Cheesecake' : Type = ' Dessert'; break;
default: Type ='  Some Menu Item';
}

console.log(MenuItem + Type);


var x =27;
var text = x >= 20 ?'Today is your lucky day' : 'Try again';
console.log(text);



var i=0;
while (i<=7) {
 console.log(i);
 i++;
}

function myDigits(arg1, arg2, callback) {
    alert('Число ' + arg1 + ' в степени ' +arg2);
    var arg3 = Math.pow(arg1, arg2);
    callback(arg3);
}

myDigits(2, 4, function(num) {
 alert('Результат ' + num) ;  
});

