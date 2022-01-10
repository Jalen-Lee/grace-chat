interface obj  {
  name:string,
  age:number,
}


function pickSingleValue<T>(obj:T,key:keyof T):T[keyof T]{
  return obj[key]
}


let obj1:obj = {
  name:'jaylen',
  age:18
}

console.log(pickSingleValue<obj>(obj1,'name'));

export default obj1