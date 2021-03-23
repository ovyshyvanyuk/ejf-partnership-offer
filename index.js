var basket = document.getElementById('basket');
var basketTemplate = document.getElementById("base-option");
var basketContains = [];
var summaryPrice = 6000;
var summary = document.getElementById("value");
var messageBox = {
    base: {
        heading: "Базовий пакет",
        text: `1. Компанія отримує можливість створення власної сторінки на платформі Hopin, де буде представлено її опис та відео.
        
        У визначений проміжок часу, представники компанії матимуть змогу вийти у відеоконференцію з зацікавленими студентами.

        2. Промоція базового пакета включає: 1 згадку в Instagram story, по 1 посту в Facebook та Linkedin, а також пост-дайджест у Telegram каналі.
        *соціальні мережі студентської організації BEST Lviv

        3. На сайті ІЯК-у буде створена окрема сторінка з детальним описом діяльності компанії та розміщений її логотип у розділі “Партнери”.
        * сторінка та логотип будуть знаходитись на сайті протягом 1-го року.`
    },
    trainer: {
        heading: 'Опція "Trainer"',
        text: `Мінікурс від представника компанії на тему, яка знадобиться студентам у їх професійному розвитку. Складається з:

        1.  Воркшоп - навчальний захід від представника компанії на довільну тему. Компанія проводить воркшопи у перший та другий дні. 
             Тривалість - до 90 хвилин.
        
        2.  Після проведення першого воркшопу, компанія надає завдання учасникам, які будуть перевірені наступного дня представником компанії.
        
        3.  За  результатами виконання завдання, студенти матимуть можливість відвідати офіс вашої компанії.
        
        ** Обмеження: 2 компанії`
    },
    pitcher: {
        heading: 'Опція "Pitcher"',
        text: `1. Сесія - це один з основних каналів комунікації з учасниками, де представник компанії ділиться корисними знаннями щодо певної теми, та може поспілкуватись із зацікавленими студентами. 
            
        Максимальна кількість відвідувачів сесії - 500, 9 з яких мають змогу одночасно бути на відеозв’язку. Наповнення сесії - на власний розсуд.
        
        Тривалість - близько 40 хв.
            
        2. Протягом всієї події, у перервах між сесіями на вкладці Stage будуть відтворюватись ролики партнерів ІЯК-у.
        
        Тривалість кожного ролика — до 1 хв.`

    },
    headhunter: {
        heading: 'Опція "HeadHunter"',
        text: `1. Протягом тижня після завершення проєкту, компанія отримає базу CV зацікавлених у роботі студентів.
        
        2. Протягом року, компанія отримує можливість самостійно розміщати вакансії у Telegram-бот.`
    },
    promoter: {
        heading: 'Опція "Promoter"',
        text: `1. Перед початком проєкту, спільно з командою ІЯК-у, буде створено контент для промоції компанії в Instagram-stories сторінки організації*. 
        Приклади інтерактиву: рубрика “Питання-відповідь”; рубрика “Як проходить день нашого працівника” та інше.
        
        *Сторінка - @best_lviv 
        
        2. У день проведення “Company day” у соціальних мережах Telegram, Facebook та Linkedin буде розміщено пост про вашу компанію із закликом перегляду інтерактивних сторіс.`
    }
}

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

    if (discount < 0) discount = 0;

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

    if (discount < 0) discount = 0;

    summary.innerText = (summaryPrice - discount).toString();
}

function showInfo(type) {
    swal(messageBox[type].heading, messageBox[type].text);
}