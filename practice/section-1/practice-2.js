'use strict';

function collectSameElements(collectionA, collectionB) {

//var aInBElement = collectionB.forEach(array => array.includes(a))

return collectionA.filter(a => collectionB.forEach(array => array.includes(a)))
}

