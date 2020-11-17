{
    let map = new Map();
    let set = new Set();
    let a = {age: 18};
    map.set('age',18);
    set.add(a);
    console.log('map',map,typeof map);
    console.log('set',set,typeof set);

}


{
    let arr = [{a: 1},{b: 2},{c: 3},{d: 4}];
     arr.forEach((v,i) => {
        console.log(111111111,v,i);
    })
    arr.map((v,i) => {
      return  console.log(22222222,v);
    })
}


{
    var arr = [0,2,4,6,8];
 var newArr = arr.map(function(item,index,arr){
            console.log(this);
            console.log(arr);
            return item/2;
 },this);
 console.log(newArr);
 console.log(arr);
 
}

{
    var arr1 = [0,2,4,6,8];
var newArr1 = arr1.forEach(function(item,index,arr1){
  console.log(this);
  console.log(arr1);
   arr1[index] = item/2; 
},this);
console.log(6666,arr1);
console.log(777,newArr1);
}