export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FgnQWw7sz7qXcvQl8SLk7ir2j70IIHQ7`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });        
    return gifts;
}