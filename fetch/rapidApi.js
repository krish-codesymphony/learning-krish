let options = {
    method: 'GET',
    url: 'https://star-wars-quotes-api-character-collection.p.rapidapi.com/quote',
    /*
    yoda
    darthvader
    obiwan
    leia
    lukeskywalker
    hansolo
    emperor
    c3po
    */
    params: { character: 'yoda' },
    headers: {
        'x-rapidapi-key': 'fd3b680e22msh65a2fd60b6f0cc8p1f41b5jsn8601dc9cca22',
        'x-rapidapi-host': 'star-wars-quotes-api-character-collection.p.rapidapi.com'
    }
};


async function getQuote(opts) {
    try {
        const response = await axios.request(opts);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getQuote(options);