/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  let count=0;
    
 for(let i = 0; i < preferences.length; i++) {
    let b = preferences[i]-1;
    let c = preferences[b]-1;
    let a = preferences[c]-1;
    if (i == a) {
        count=count+1;
    }
        
 };
 
 count = Math.floor(count/3);
 return count;
 };

