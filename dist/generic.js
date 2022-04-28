"use strict";
const cars1 = ['Ford', 'Audi'];
const cars2 = ['Ford', 'Audi'];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
});
promise.then((data) => {
    console.log(data);
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Dima' }, { age: 21 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`,
    };
}
console.log(withCount('Привет TypeScript')); // {value: 'Привет TypeScript', count: 'В этом объекте 17 символов'}
console.log(withCount(['I', 'Am', 'Array'])); // {value: Array(3), count: 'В этом объекте 3 символов'}
// console.log(withCount(20)) error
console.log(withCount({ length: 20 })); // {value: {…}, count: 'В этом объекте 20 символов'}
// ================================================================ //
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Dima',
    age: 21,
    job: 'JavaScript',
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
console.log(getObjectValue(person, 'job'));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter((i) => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'Am', 'Strings']);
strings.add('!');
strings.remove('Am');
console.log(strings.items);
const numbers = new Collection([1, 2, 3]);
numbers.add(5);
numbers.remove(3);
console.log(numbers.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
// ================================================================= //
const cars = ['Ford', 'Audi'];
// cars.shift()  //error
const ford = {
    model: 'Ford',
    year: 2020,
};
// ford.model = 'Ferrari' // error
