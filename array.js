var friendsAge  = [15, 18, 20, 22, 30, 60];

var sumonAge    = friendsAge[3];

friendsAge[2]   = 50;

var position   = friendsAge.indexOf(60);

console.log(friendsAge);

friendsAge.push(40);
friendsAge.push(55);

console.log(friendsAge);
friendsAge.pop();
friendsAge.unshift(1);
friendsAge.shift();
console.log(friendsAge)