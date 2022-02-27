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
            <button onclick="singleCocktailDetail('${cocktail.idDrink}')">Drinks Detail</button>
        `
        root.append(div)
    });
}

const singleCocktailDetail = (cocktailId) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
    .then(res => res.json())
    .then(data => displaySingleCocktail(data.drinks[0]))
}

const displaySingleCocktail = (cocktail) => {
    console.log(cocktail)
    const item = document.getElementById('item')
    item.textContent = ''
    const div = document.createElement('div')
    div.className = 'cocktail-item'
    div.innerHTML = `
        <img src="${cocktail.strDrinkThumb}" />
        <h3>${cocktail.strDrink}</h3>
        <p>${cocktail.strInstructions}</p>
    `
    item.append(div)
}