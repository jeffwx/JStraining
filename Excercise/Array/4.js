var arr2 = new Array(4);
arr2[1] = 1;
arr2[2] = undefined;
arr2.forEach((item, idx) => console.log(`${idx}.${item}`));