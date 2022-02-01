// object declaration 
const objectName = {
    arrayProperty: ['values1', 'values2', 'values3', '...'],
    normalProperty1: 'values',
    normalProperty2: 'values',
    normalProperty3: 'Values',
}

// get object value 
var objectValue = objectName.arrayProperty;
console.log(objectValue);

// set object value by property
objectName.normalProperty1 = "newValue";
console.log('Objectvalue: ', objectName);


// add value by specified 
objectName['values'] = "newValue";
console.log('new value in property list: ', objectName);


// set value in different way 
objectName["normalProperty3"] = 'newValues';
console.log('new value in property2: ', objectName);