module.exports = a => {
  let b = [];

  for (let i = 0; i < a.length; i++) {
    let obj2 = {};

    // this is the easy way and I don't think that this question is for this
    //     b.push({...a[i]})
    for (let key in a[i]) {
      const obj1 = a[i];
      if (obj1.hasOwnProperty(key)) {
        obj2[key] = obj1[key];
        console.log(key, obj1[key]);
      }
    }
    b.push(obj2);
  }
  return b;
};


