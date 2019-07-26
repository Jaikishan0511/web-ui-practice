var map = new Map();
map.set("r1", "user").set("r2", "admin");
/*console.log(map);*/
/*console.log(map.has("r1"));*/
/*console.log(map.get("r1"));*/
/*console.log(map.size);
map.clear();
console.log(map.size);*/

/*console.log(map.has("r1"));
map.delete("r1");
console.log(map.has("r1"));*/

/*var itr = map.entries();
console.log(itr.next().value);
console.log(itr.next().value);*/
/*weak MAps*/
/*{
  let x = {
    a: [1, 2]
  };
  var map = new Map();
  map.set(x, "something");
}
console.log(map);*/

{
  let x = {
    a: [1, 2]
  };
  var map = new WeakMap();
  map.set(x, "something");
}
console.log(map);
