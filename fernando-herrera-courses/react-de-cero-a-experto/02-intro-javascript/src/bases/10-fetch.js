require('dotenv').config();

const {REACT_APP_GIPHY_APY_KEY:GIPHY_APY_KEY} = process.env;

const petition = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${GIPHY_APY_KEY}`);

petition
    .then( (response) => 
        response.json()
    )
    .then(({data}) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);