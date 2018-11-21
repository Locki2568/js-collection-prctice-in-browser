'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA
        .filter(a => objectB.value.includes(a.key))
        .map(_ => _.key);
}
