const loadCocktailData = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
    .then(res => res.json())
    .then(data => displayCocktailData(data.drinks))
}
loadCocktailData() 

const displayCocktailData = (cocktails) => {
    cocktails.forEach(cocktail => {
        console.log(cocktail)
    });
}