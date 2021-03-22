var basket = document.getElementById('basket');
var basketTemplate = document.getElementById("base-option");
var basketContains = [];

function optionSelect(tag) {
    let optionTag = tag.parentElement;
    console.log(optionTag.children);
    if (tag.checked) {
        let newBasketItem = basketTemplate.cloneNode(true);
        caption = optionTag.children[0].innerHTML
        newBasketItem.children[0].innerHTML = caption;
        newBasketItem.children[1].innerHTML = optionTag.children[2].innerHTML;
        newBasketItem.removeAttribute("id");
        basket.appendChild(newBasketItem);
        basketContains.push({ caption, newBasketItem });
        console.log(basketContains);
    } else {
        let caption = optionTag.children[0].innerText;
        console.log("Caption:", caption);
        let deleteElement = 0;
        for (let i = 0; i < basketContains.length; i++) {
            if (basketContains[i].caption === caption)
                deleteElement = basketContains[i];
        }
        console.log(deleteElement);
        deleteElement.newBasketItem.remove();
    }
}

function removeItem(tag) {
    let optionTag = tag.parentElement;
    let caption = optionTag.children[0].innerText;
    console.log("Caption:", caption);
    let deleteElement = 0;
    for (let i = 0; i < basketContains.length; i++) {
        if (basketContains[i].caption === caption)
            deleteElement = basketContains[i];
    }
    console.log(deleteElement);
    deleteElement.newBasketItem.remove();

    let option = document.getElementById(caption.toLowerCase());
    option.querySelector("div.option-content input.add").checked = false;
}