// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
class Neighborhood{
  constructor(name){
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
  }
  
  deliveries(){
    return store.deliveries;
  }
  customers(){
    return store.customers;
  }
  meals(){
    return store.meals;
  }
}

let mealId=0
class Meal{
  constructor(title,price){
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    store.meals.push(this);
}
 deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.mealId === this.id; 
    });
  }
  customers(){
    return store.customers;
  }
  static byPrice(){
    return store.meals.sort((a,b) => a.price < b.price)
  }
}

let customerId = 0;
class Customer{
  constructor(name){
    this.name = name;
    this.id = ++customerId;
    this.neighborhoodId = this.id;
    store.customers.push(this);
  }
  deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.customerId === this.id; 
    });
  }
  meals(){
    return store.meals.filter(meal =>{
      return this.deliveryId === this.id;
    });
  }
  totalSpent(){
    return this.meals().reduce((total,meal) => (total += meal.price),0)
  }
}


let deliveryId = 0;
class Delivery{
   constructor(mealId,neighborhoodId,customerId){
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    this.id = ++deliveryId;
    store.deliveries.push(this);
}
 neighborhood(){
    return store.neighborhoods[0];
  }
  customer(){
    return store.customers[0];
  }
  meal(){
    return store.meals[0];
  }
}

