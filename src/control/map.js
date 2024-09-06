/**
 * Holds unique keys as the key value pairs
 * If more than one same key then last one is set
 * Same keys can not exist but same values can exist
 */

const map = new Map();

map.set(1,'a');
map.set(1,'b');
map.set(2,'c');
map.set(3,'c')

console.log('map is::::::::', map);
console.log("map value is*******", map.get(1));

for (const key of map) {
  console.log('Each value in map is:', key); 
}


for (const [key,value] of map) {
  console.log('key is:', key, 'value is:', value);
}
