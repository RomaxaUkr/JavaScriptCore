// .keys

let keysObject = _.keys({name:'Ivan', age:22});
// console.log(keysObject);

//.values

let valuesObject = _.values({name:'Ivan', age:22});
// console.log(valuesObject);

// .mapObject add function to each value

let mapObjectObject = _.map({brand:'Honda', model: 'CRV', year:2016}, function(value, key){
return value +1;
});

// console.log(mapObjectObject);

// .pairs make separeate array with pair key and value
let myObject = {brand:'Honda', model: 'CRV', year:2016}
let pairsObject = _.pairs(myObject)
// console.log(pairsObject);

// .invert change key with values
let invertedObject = _.invert(myObject);
// console.log(invertedObject);

//.create

function Person(name){
    this.name = name;
}
let createObject =_.create(Person.prototype, {name:'Oleg', age:20});
console.log(createObject);

// .functions. show all function which is in object

// console.log(_.functions(_));

// .extend add addditional pait to object

let extendedObject = _.extend(myObject,{gear:'manual'});
// console.log(extendedObject);

// .pick showing only that pair what we ask

let pickedObject = _.pick(myObject, 'brand');
// console.log(pickedObject);

// .omit showing all Object without pair what we mention

let omitedObject = _.omit(myObject, 'brand');
// console.log(omitedObject);

// .has

let hasObject = _.has(myObject, 'name');
// console.log(hasObject);

// .defaults

let defaultsObject = _.defaults({isCar:true},myObject);
// console.log(defaultsObject);

// .isEqual
let equalObject = _.isEqual(myObject,{});
// console.log(equalObject);

// .isMatch

let isMatch = _.isMatch(myObject,{model:'CRV'});
// console.log(isMatch);

// .isEmpty

let isEmptyObject = _.isEmpty(myObject);
// console.log(isEmptyObject);

// .isArray

let isArrayObgect = _.isArray(myObject);
// console.log(isArrayObgect);

// .isElement

let isDomElement = _.isElement(myObject);
// console.log(isDomElement);

let isDomEleme = _.isElement(document.getElementById('start'));
// console.log(isDomEleme);

// .is Function

let isFunctionObj = _.isFunction(myObject);
// console.log(isFunctionObj);

// .isObject

let isObjectObject = _.isObject(myObject);
// console.log(isObjectObject);

// .isString

let isStringThis = _.isString(myObject);
// console.log(isStringThis);

// .isFinite

let isFiniteNumb= _.isFinite(-333);
// console.log(isFiniteNumb);

// .isBoolean

// console.log(_.isBoolean(2>3));

// .isDate
// .isNan
// .isUnderfined
// .isNull
// .



