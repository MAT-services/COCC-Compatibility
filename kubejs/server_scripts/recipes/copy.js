ServerEvents.recipes(event => {
    event.forEachRecipe({ type: "terra_curio:workshop" }, recipe => {
        const input = JSON.parse(`${recipe.json}`).ingredients;
        input.unshift("kubejs:workshop_mixer_adapter");
        const output = [JSON.parse(`${recipe.json}`).result];
        output.unshift("kubejs:workshop_mixer_adapter");

        event.recipes.create.mixing(output, input)
    }); 

    event.forEachRecipe({ type: "confluence:dye_vat" }, recipe => {
        const output = [JSON.parse(`${recipe.json}`).result, {"id": "kubejs:dye_filter"}];
        const input = [];
        const lenght = JSON.parse(`${recipe.json}`).ingredients.lenght;

        let n = 0;
        while (n<lenght) {
            input.unshift(JSON.parse(`${recipe.json}`).ingredients[x]);
            n++;
        };

        event.custom({
            "type": "create:mixing",
            "ingredients": input,
            "results": output
        })
    })
});

