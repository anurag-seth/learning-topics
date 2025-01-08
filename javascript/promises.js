let pro = new Promise((resolve, reject) => {
    let x=5;
    setTimeout(() => {
        x = 10;
        console.log('timeout for 1s');
    }, 1000);
    if(x>5){
        resolve('complete');
    } else {
        reject('failed');
    }
})

pro.then(result => {
    console.log(result)
}).catch(error => {
    console.log('error: ' + error)
})


// suppose we move these consition in timeout then it will work
let pro1 = new Promise((resolve, reject) => {
    let x=5;
    setTimeout(() => {
        x = 10;
        if(x>5){
            resolve('complete');
        } else {
            reject('failed');
        }
        console.log('timeout for 1s');
    }, 1000);
    
})

pro1.then(result => {
    console.log(result)
}).catch(error => {
    console.log('error: ' + error)
})

// condition based promise
let pro2 = new Promise((resolve, reject) => {
    let x=Math.random();
    if(x>0.5){
        resolve('complete for ' + x);
    } else {
        reject('failed for ' + x);
    }
})

pro2.then(result => {
    console.log(result)
}).catch(error => {
    console.log('error: ' + error)
})


// pass value 
let x = function testPromise(num) {
    return new Promise((resolve, reject) => {
      let success = true;
      if (num>4) {
        resolve({ data: "Sample data", status: 200 });
      } else {
        reject({ error: "Failed to fetch data", status: 500 });
      }
    });
  }
  
  x(5)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error.error);
    });


