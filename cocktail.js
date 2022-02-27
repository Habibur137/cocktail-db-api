const loadCocktailData = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
    .then(res => res.json())
    .then(data => displayCocktailData(data.drinks))
}
loadCocktailData() 

const displayCocktailData = (cocktails) => {
    console.log(cocktails)
    const root = document.getElementById('root')
    cocktails.forEach(cocktail => {
        const div = document.createElement('div')
        div.className = 'cocktail-item'
        div.innerHTML = `
            <img src="${cocktail.strDrinkThumb}" />
            <h3>${cocktail.strDrink}</h3>
            <p>${cocktail.strInstructions}</p>
        `
        root.append(div)
    });
}