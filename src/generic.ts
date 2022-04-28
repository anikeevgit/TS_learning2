const cars1: string[] = ['Ford', 'Audi']
const cars2: Array<string> = ['Ford', 'Audi']

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise resolved')
  }, 2000)
})

promise.then((data) => {
  console.log(data)
})

function mergeObjects<T extends Object, R extends Object>(a: T, b: R) {
  return Object.assign({}, a, b)
}

const merged = mergeObjects({ name: 'Dima' }, { age: 21 })
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 })

// const merged3 = mergeObjects({a: 1}, 'bbb')
// console.log(merged3)

                       // ================================================================ //

interface ILength {
  length: number
}

function withCount<T extends ILength>(
  value: T
): {
  value: T
  count: string
} {
  return {
    value,
    count: `В этом объекте ${value.length} символов`,
  }
}

console.log(withCount('Привет TypeScript')) // {value: 'Привет TypeScript', count: 'В этом объекте 17 символов'}
console.log(withCount(['I', 'Am', 'Array'])) // {value: Array(3), count: 'В этом объекте 3 символов'}
// console.log(withCount(20)) error
console.log(withCount({ length: 20 })) // {value: {…}, count: 'В этом объекте 20 символов'}

                     // ================================================================ //

function getObjectValue<T extends Object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: 'Dima',
  age: 21,
  job: 'JavaScript',
}

console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
console.log(getObjectValue(person, 'job'))

class Collection<T extends number | string | boolean> {
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter((i) => i !== item)
  }

  get items(): T[] {
    return this._items
  }
}

const strings = new Collection<string>(['I', 'Am', 'Strings'])
strings.add('!')
strings.remove('Am')
console.log(strings.items)

const numbers = new Collection<number>([1, 2, 3])
numbers.add(5)
numbers.remove(3)
console.log(numbers.items)

// const objs = new Collection([{ a: 1 }, { b: 2 }])
// objs.remove({ b: 2 })
// console.log(objs.items)

                    //  ================================================================= //

interface Car {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {}
  if (model.length > 3) {
    car.model = model
  }
  if (year > 2000) {
    car.year = year
  }
  return car as Car
}

                     // ================================================================= //

const cars: Readonly<Array<string>> = ['Ford', 'Audi']
// cars.shift()  //error

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020,
}

// ford.model = 'Ferrari' // error
