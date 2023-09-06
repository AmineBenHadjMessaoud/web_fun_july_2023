function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5 && attempts <100){
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped in attempt ${attempts}`)
            if(result === 'heads'){
                headsCount ++;
            }else{
                headsCount=0;
            }
        }
        if(headsCount==5){
            resolve(`You got 5 heads in a row after ${attempts} `);
        }else {
            reject(`you reached max attempts wich is ${attempts} with no 5 heads in a row`);
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" )


