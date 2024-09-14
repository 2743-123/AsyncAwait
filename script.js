async function fetchData(params) {
    let mypromise = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("data fetch sucesfully");

        },2000);
    });
    let result = await mypromise;
    console.log(result)

}
fetchData();
