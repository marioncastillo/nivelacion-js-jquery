$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"

	renderHighlightedRecipes(recipesArray);


});
//funcion para eliminar la flecha 
$(".js-back").toggle();

//imprime nuevas recetas

$(".printNews").append('<p> NUEVAS RECETAS </P>');

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {

	var receta=recipesArray;
	for(var item in recipesArray){
		if(recipesArray == true){
			$(".printNews").append('<div>' +recipesArray+ '</div>');
	}
	console.log('Recipes: ', recipesArray);
	}
}


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


