async function getData(tipo){
    console.log('https://my.api.mockaroo.com/'+tipo+'.json?key=19321ce0');
    let response = await fetch('https://my.api.mockaroo.com/'+tipo+'.json?key=19321ce0');

    //console.log(response);

    response = await response.json()
    console.log(response);

    return response;
}

export default getData;