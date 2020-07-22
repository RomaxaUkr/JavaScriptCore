//comment commit#1
//comment commit#2
//comment commit#3
//comment commit#4
let arrayOfData = [1,2,3,4,5,6,7,8,22, 24, 33,9,10];
let arrayOfCars = [{
    model:'BMW',
    year:2001
},{
    model:'Kia',
    year:2001
},{
    model:'Peugeot',
    year:2006
},{
    model:'Honda',
    year:2014
},{
    model:'Kia',
    year:2010
},{
    model:'Honda',
    year:2019
},{
    model:'Mercedes',
    year:2016
},
{
    model:'BMW',
    year:2011
},{
    model:'Peugeot',
    year:2014
}
];
// console.log(arrayOfCars);

// .first return first or 'n' elements from start
let firstValue = _.first(arrayOfCars);
// console.log(firstValue);

// .last. Return last of 'n' from the end
let lastValue = _.last(arrayOfCars,2);
// console.log(lastValue);

// .initial. return array without last or without 'n' last
let initialValue = _.initial(arrayOfCars,3);
// console.log(initialValue);

// .rest. Return array all without first or 'n' first 
let restCar = _.rest(arrayOfCars,2);
// console.log(restCar);

// .compact
let arrayWithFalseValues = [0,1, false,true, null,5,undefined, 'ghghh', null,77,120,0]
let compactArray = _.compact(arrayWithFalseValues);
// console.log(compactArray);

//.flatten return one array of all elements 
let arrayBeforeFlatten = [1,[[[2]], 1],[3,5],[[[5]],9]];
let arrayFlatten = _.flatten(arrayBeforeFlatten);
// console.log(arrayFlatten);

// .without return array without elements which we will write

let arrayWithout = _.without(arrayOfData, 2,5,22);
// console.log(arrayWithout);

// .union union few arrays

let unionArray = _.union([10,20,30],[22,33,44],[111,222,333]);
// console.log(unionArray);

//.intersection return array which is available in others arrays

let intersectionValues = _.intersection([1,2,3,4,5], [3,4], [2,3,5]);
// console.log(intersectionValues);

// . difference eturn array which is not available in others arrays
let differenceValues =_.difference([1,2,3,4,5], [3,4], [2,3,5]);
// console.log(differenceValues);

// .uniq remove from array all elements which repeat

let uniqValues = _.uniq([1,2,2,3,5,7,5,2]);
// console.log(uniqValues);

// .zip concat arrays by index
let zipArray =_.zip([20,30,50],['Anna', 'Petro'],[true, false]);
// console.log(zipArray);

// .unzip unconcat array by index

let unzipArray = _.unzip([['Petro', 30, true], ['anna', 20, false]]);
// console.log(unzipArray);

//.object create object from 2 arrays

let objectArray= _.object([20,40], ['bmw','mers']);
// console.log(objectArray);

// .indexOf show index of element in array
let indexOfValues = _.indexOf([1,2,2,3,5,7,5,2], 3);
// console.log(indexOfValues); 

//.lastIndexOf show last index of element in array
let lastIndexOfValues = _.lastIndexOf([1,2,2,3,5,7,5,2], 2);
// console.log(lastIndexOfValues); 

// .sortedIndex it show which index will be if we put this number in array

let sortedIndexValues = _.sortedIndex([10,20,30,40,50,60], 45);
// console.log(sortedIndexValues);

//.findIndex showing index of first result
let findIndex=_.findIndex([1,2,2,3,5,7,5,2],function(value){
    return value %2 == 0;
});
// console.log(findIndex);

// .findLastIndex showing index of last result
let findLastIndex=_.findLastIndex([1,2,2,3,5,7,5,2],function(value){
    return value %2 == 0;
});
// console.log(findLastIndex);

// .range
let rangedValues=_.range(0,50,5);
// console.log(rangedValues);

//.chunk devide array for few arrays each one will have n elements

let chunkArrays=_.chunk(arrayOfCars,3);
// console.log(chunkArrays);

let data = [{
    "name":Ivan
},{"age":38}];
console.log(data[0]['name']);
