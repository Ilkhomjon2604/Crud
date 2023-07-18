let cars = [
    {id:1 , year:1997 , engine : 1, name: 'Tico'},
    {id:2 , year:2005 , engine : 1.2, name: 'Damas'},
    {id:3 , year:2018 , engine : 1.5, name: 'Tracker'},
    {id:4 , year:2010 , engine : 1.2, name: 'Lacetti'},
    {id:5 , year:2012 , engine : 1.9, name: 'Malibu'},
    {id:6 , year:2022 , engine : 1.6, name: 'Tesla'},
    {id:7 , year:2009 , engine : 2, name: 'Matzi'},

]


// CRUD => CREAT , READ , UPDATE , DELETE 

// Methods : Map(), fill(), ForEach(),  flat(), sort(), filter(), reduce(), every(), some(), copyWith(), Array.from(), newSet(), new Map(), flatMap(); 

// Creat 

let addCar = (car) =>{
    cars = [...cars, car]
}
addCar({id: cars.length +1, year: 2018, engine: 1.8, name: 'Nexia 3'})

let addCar2 = () => {
    cars = [...cars , {id: cars.length +1, year: 2012, engine: 1.6, name: 'Nexia 2'}]
}
addCar2()
console.log(cars);

// Read 

cars.map(({id, name, year, engine}) => {
    console.log( id, name , engine, year);
})
console.log('---------------------------------------------------------------');
cars.forEach(({id, name, year, engine}) => {
    console.log( id, name , engine, year);
})

// Update 

const onUpdate = (car) =>{
    let updated = cars.map(value => value.id === car.id ? {...value, [car.key] : car.value} : value)
    // let updated = cars.map(value => value.id === car.id ? {...value, [car.key] : car.value, [car.koy]: car.vol} : value)
    console.log(updated);
}
onUpdate({id :1, key: 'status', value: 'Sold'})
// onUpdate({id :1, key: 'status', value: 'Sold', koy : 'engine', vol : 1.3})

