var basket = document.getElementById('basket');
var basketTemplate = document.getElementById("base-option");
var basketContains = [];
var summaryPrice = 6000;
var summary = document.getElementById("value");

function optionSelect(tag) {
    let optionTag = tag.parentElement;

    if (tag.checked) {
        let newBasketItem = basketTemplate.cloneNode(true);
        let caption = optionTag.children[0].innerHTML
        newBasketItem.children[0].innerHTML = caption;
        let price = optionTag.children[2].innerHTML;
        newBasketItem.children[1].innerHTML = price;
        summaryPrice += Number(price.slice(0, 4));
        newBasketItem.removeAttribute("id");
        basket.appendChild(newBasketItem);
        basketContains.push({ caption, newBasketItem });
    } else {
        let caption = optionTag.children[0].innerText;
        let deleteElement = 0;
        for (let i = 0; i < basketContains.length; i++) {
            if (basketContains[i].caption === caption)
                deleteElement = basketContains[i];
        }
        summaryPrice -= (deleteElement.newBasketItem.getElementsByTagName("span")[0].innerText).slice(0, 4);
        deleteElement.newBasketItem.remove();
    }

    let discount = (basket.children.length - 2) * 1000;

    summary.innerText = (summaryPrice - discount).toString();
}

function removeItem(tag) {
    let optionTag = tag.parentElement;
    let caption = optionTag.children[0].innerText;
    let deleteElement = 0;
    for (let i = 0; i < basketContains.length; i++) {
        if (basketContains[i].caption === caption)
            deleteElement = basketContains[i];
    }
    summaryPrice -= (deleteElement.newBasketItem.getElementsByTagName("span")[0].innerText).slice(0, 4);
    deleteElement.newBasketItem.remove();

    let option = document.getElementById(caption.toLowerCase());
    option.querySelector("div.option-content input.add").checked = false;

    let discount = (basket.children.length - 2) * 1000;

    summary.innerText = (summaryPrice - discount).toString();
}