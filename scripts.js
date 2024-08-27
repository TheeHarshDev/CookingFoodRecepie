document.getElementById('generate-btn').addEventListener('click', function() {
    const language = document.getElementById('language-select').value;
    const recipeOutput = document.getElementById('recipe-output');
    
    let recipe;
    
    switch(language) {
        case 'python':
            recipe = 'Pancakes: Smooth, easy to flip, and works well with any topping!';
            break;
        case 'javascript':
            recipe = 'Java: A strong brew for those who need to stay awake all night debugging.';
            break;
        case 'java':
            recipe = 'Jambalaya: A spicy mix of flavors that keeps you coming back for more.';
            break;
        case 'csharp':
            recipe = 'Cheeseburgers: Classic comfort food with a bit of modern flair.';
            break;
        case 'ruby':
            recipe = 'Ruby Red Velvet Cake: Rich, sweet, and perfect for special occasions.';
            break;
        case 'php':
            recipe = 'Pasta: A versatile dish that adapts well to any sauce or topping.';
            break;
        case 'swift':
            recipe = 'Smoothie: Quick to make and packed with fresh fruits for a healthy boost.';
            break;
        case 'typescript':
            recipe = 'Tacos: A customizable meal with a range of fillings to choose from.';
            break;
        case 'go':
            recipe = 'Meow.';
            break;
        case 'kotlin':
            recipe = 'Put water in air and boom.';
            break;
        case 'rust':
            recipe = 'Kroepoek yummy and crisspy.';
            break;
        case 'sql':
            recipe = 'Chicken yummy cook him.';
            break;
        default:
            recipe = 'Select a language to generate a recipe!';
    }
    
    recipeOutput.innerHTML = `<h2>${recipe}</h2>`;
});
