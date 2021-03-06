async function getData(){
    try {
        var api_url = `https://raw.githubusercontent.com/FN-FAL113/FN_FAL113-Pages/main/src/json/fnItems.json`
        const response = await fetch(api_url);
        const dataObject = await response.json();

        dataObject.forEach((element, i) => {
            let item = element.item       
            let lore = element.lore.replace(/\[/g, "").replace(/\]/g, "").replace(/\, /g, "<br>").replace(/\?/g, "");
            let recipeArr = element.recipe.split(',');
        
            var li = document.createElement('div');
            if($(window).width() < 400){
                li.className = "col-6 mx-auto py-2";
            } else {
                li.className = "col-4 mx-auto py-2";
            }
            
            let num = i + 1;

            if(element.category == "FN Magical Items"){
                innerElement(li, item, element, recipeArr, document.getElementsByClassName('magicalitems')[0], num, lore)
            } else if(element.category == "FN Machinery Items"){
                innerElement(li, item, element, recipeArr, document.getElementsByClassName('machineryitems')[0], num, lore)
            } else if(element.category == "FN Material Generators"){
                innerElement(li, item, element, recipeArr, document.getElementsByClassName('materialgenitems')[0], num, lore)
            } else if(element.category == "FN Power Xpansion"){
                innerElement(li, item, element, recipeArr, document.getElementsByClassName('powerxitems')[0], num, lore)
            } else if(element.category == "FN Solar Generators"){
                innerElement(li, item, element, recipeArr, document.getElementsByClassName('solargenitems')[0], num, lore)
            } else if(element.category == "FN Machinery"){
                innerElement(li, item, element, recipeArr, document.getElementsByClassName('machineriesitems')[0], num, lore)
            } else if(element.category == "FN Mystery PVP/PVE Sticks"){
                innerElement(li, item, element, recipeArr, document.getElementsByClassName('mysteryitems')[0], num, lore)
            } else if(element.category == "FN Gears of Friction"){
                innerElement(li, item, element, recipeArr, document.getElementsByClassName('gearitems')[0], num, lore)
            } else if(element.category == "FN Miscellaneous"){
                innerElement(li, item, element, recipeArr, document.getElementsByClassName('miscitems')[0], num, lore)
            } else if(element.category == "FN Gems"){
                innerElement(li, item, element, recipeArr, document.getElementsByClassName('gemitems')[0], num, lore)
            } else if(element.category == "FN Staffs"){
                innerElement(li, item, element, recipeArr, document.getElementsByClassName('staffitems')[0], num, lore)
            } else if(element.category == "Metal Scrap Recipes"){
                innerElement(li, item, element, recipeArr, document.getElementsByClassName('scrapitems')[0], num, lore)
            } 
            
        });
    } catch (error) {
        console.log('error has occured: ' + error);
    }
}

async function innerElement(li, item, element, recipeArr, context, i, lore){
    li.innerHTML = `
        <button type="button" class="btn btn-sm btn-primary window-fill" data-toggle="modal" data-target="#exampleModal${i}">
        ${item}
        </button>
    
        <div class="modal" data-backdrop="false" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fill" role="document">
            <div class="modal-content bgOpaqueDarkModal">
                <div class="modal-header" style="border: none;">
                <h5 class="modal-title mx-auto" id="exampleModalLabel">${element.item}</h5>
                <button type="button" class="close btn btn-info" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">X</span>
                </button>
                </div>
                
                <div class="modal-body"><strong class="text-center">Item ID:</strong> <br>${element.id}</div>
                <div class="modal-footer"></div>
                <div class="modal-body"><strong class="text-center">Crafting Station:</strong> <br>${element.recipe_type}</div>
                <div class="modal-footer"></div>
                <div class="modal-body"><strong class="text-center">Category:</strong> <br>${element.category}</div>
                <div class="modal-footer"></div>
                <div class="modal-body"><strong class="text-center">Lore:</strong> <br>${lore}</div>
                <div class="modal-footer"></div>
                <div class="modal-body"><strong class="text-center">Enchantable:</strong> <br>${element.enchantable}<br><br><strong>Disenchantable:</strong> <br>${element.disenchantable}</div>
                <div class="modal-footer"></div>
                <div class="modal-body"><strong class="text-center">Recipe</strong><br>
                    <table class="table table-bordered border border-primary">
                        <tbody>
                            <tr>
                            <td>${recipeArr[0].replace(/\[/g, "")}</td>
                            <td>${recipeArr[1]}</td>
                            <td>${recipeArr[2]}</td>
                            </tr>
                            <tr>
                            <td>${recipeArr[3]}</td>
                            <td>${recipeArr[4]}</td>
                            <td>${recipeArr[5]}</td>
                            </tr>
                            <tr>
                            <td>${recipeArr[6]}</td>
                            <td>${recipeArr[7]}</td>
                            <td>${recipeArr[8].replace(/\]/g, "")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer"></div>
               </div>
            </div>
            </div>
        </div>`;

        context.appendChild(li);
}

getData();