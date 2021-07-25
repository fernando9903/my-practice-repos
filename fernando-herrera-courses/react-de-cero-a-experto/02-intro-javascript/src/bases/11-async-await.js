const getImage = async () => {
    const {REACT_APP_GIPHY_APY_KEY:GIPHY_APY_KEY} = process.env;
    const request = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${GIPHY_APY_KEY}`);
    const {data} = await request.json();
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

getImage();