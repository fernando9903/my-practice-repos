export const getGifs = async (category) => {
    const url = `https:api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=3pQAPPLxh9Udqc13iABPYlnMUXdVOUP1`;
    const response = await fetch(url);
    const {data} = await response.json();
    
    const gifs = data.map( gif => {
        return {
            id: gif.id,
            url: gif.images?.downsized_medium.url,
            title: gif.title,
        }
    });

    return gifs;
}