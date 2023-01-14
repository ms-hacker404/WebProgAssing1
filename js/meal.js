//check for navigation bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  function calcCal () {
    // Get elements
    let calorie = parseInt(document.getElementById("calorie").value),
    results = document.getElementById("calorie-results");


// making a dummy list of food items to be chosen from
var food = {
    "Acai Bowl with Fruits" : 250,
    "Masala Omlette" : 212,
    "Choco Pancakes with Stawberries" : 275, 
    "Blueberry Smoothie" : 172,
    "Sausage and Egg Sandwiches" : 298,
    "Black Bean soup" : 550,
    "Chicken and Farro Salad": 650,
    "Pot Beef Curry with Rice" : 574,
    "Bolognese Pasta" : 520,
    "Pork Lettuce Wraps" : 425,
    "Rainbow Sushi" : 320,
    "Stuffed Butternut Squash" : 435,
    "Straberry and Cream Granola Bar" : 290 , 
    "BLT Eggs" : 310,
    "PB Choco Cookie" : 225,
    "Corn Zucchini Fritters" : 280,
    "Prezel" : 150,
}

// getting the length of the food list
var length = Object.keys(food).length
var count = 0

// creating an empty list to store chosen food items according to the calorie count
var food_list = [{}]

// for loop across the length of the food list
for (let i = 0; i < (length - 1); i++) { 

    //giving a 50 calorie range 
    if (calorie - count >= 50){
        //choosing random index for a recipe
        let index = Math.floor(Math.random() * 8)
        console.log(index)

        //getting the food item at that generated index
        var chosen_food = Object.keys(food)[index]    
        // getting the value to the key
        var chosen_food_value = food[chosen_food]

        //adding it to the final list is the different between the chosen food and the remaining calories is less that 50
        if (chosen_food_value - (calorie-count)<=50){
            //appending the list
            food_list.push({key: chosen_food, value: food[chosen_food]});
            //increamenting the counter
            count = count + chosen_food_value
        }
    }
    
}
  // removing the first empty element of the list
  food_list = food_list.slice(1)
  console.log(food_list)
  //results.innerHTML = JSON.stringify(food_list)
  results.innerHTML = ''

  for (let j = 0; j < food_list.length; j++){
    const food_item = food_list[j]
    
    // displaying the content on the screen
    const food_key = `<div class = "food-key">${food_item.key}</div>`
    const food_values = `<div  class = "food-value">${food_item.value} \xa0 <span> Calories</span></div>`
    //results.appendChild(element)

    results.innerHTML += food_key

    if ( food_item.key == "Acai Bowl with Fruits"){
        const food_image =`<div class = "images"><img src = "mealimages/acai-bowl.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Masala Omlette"){
        const food_image =`<div class = "images"><img src = "mealimages/omelet.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Choco Pancakes with Stawberries"){
        const food_image =`<div class = "images"><img src = "mealimages/pancake.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Blueberry Smoothie"){
        const food_image =`<div class = "images"><img src = "mealimages/smoothie.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Sausage and Egg Sandwiches"){
        const food_image =`<div class = "images"><img src = "mealimages/sandwiches.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Black Bean soup"){
        const food_image =`<div class = "images"><img src = "mealimages/soup.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Chicken and Farro Salad"){
        const food_image =`<div class = "images"><img src = "mealimages/chickensalad.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Pot Beef Curry with Rice"){
        const food_image =`<div class = "images"><img src = "mealimages/beefcurry.jpeg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Bolognese Pasta"){
        const food_image =`<div class = "images"><img src = "mealimages/bolognesepasta.jpeg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Pork Lettuce Wraps"){
        const food_image =`<div class = "images"><img src = "mealimages/lettucewrap.jpeg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Rainbow Sushi"){
        const food_image =`<div class = "images"><img src = "mealimages/ranbowsushi.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Stuffed Butternut Squash"){
        const food_image =`<div class = "images"><img src = "mealimages/stuffedbutternut.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Straberry and Cream Granola Bar"){
        const food_image =`<div class = "images"><img src = "mealimages/granola.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "BLT Eggs"){
        const food_image =`<div class = "images"><img src = "mealimages/blt.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "PB Choco Cookie"){
        const food_image =`<div class = "images"><img src = "mealimages/cookies.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Corn Zucchini Fritters"){
        const food_image =`<div class = "images"><img src = "mealimages/Fritterss.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }
    else if(food_item.key == "Prezel"){
        const food_image =`<div class = "images"><img src = "mealimages/pretzel.jpg" class = "image"></img></div>`
        results.innerHTML += food_image
    }

    else{
        ""
    }
   
    results.innerHTML += food_values
    const divider = `<hr class="rounded">`
    results.innerHTML += divider
   
  }
  const calorie_count = `<div class = "count">That's ${count} calories for today, for a better you tomorrow!</div>`
  results.innerHTML += calorie_count
  results.innerHTML += `<button class = "button" onclick="window.print()">Print this page</button>`
  
  return false
}