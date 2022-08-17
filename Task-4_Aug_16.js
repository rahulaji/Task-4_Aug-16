var obj1={
    name:"person1",
    age:5
};
var obj2={
    age:5,
    name:"person2"
    
};
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))
console.log(JSON.stringify(obj1)==JSON.stringify(obj2))
cosole.log(_.isEqual(obj1,obj2))

