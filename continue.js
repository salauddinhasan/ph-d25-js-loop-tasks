// continue --> skip rest of the code for this iteration
// break --> i am done with this loop. loop end.

for (let i = 1; i <= 10; i++) {

    if(i % 2 === 0) {
        continue;
    }
    console.log(i);
}


// same jinis take ami jodi while diye korle jomon hobe 


let n = 0;
while (n < 15) {

    n++;

    if (n % 5 !== 0) {
        continue;
    }
    console.log(n);
}