const burger = document.querySelector(".header__menu");
const burgerMenu = document.querySelector(".burger");
const close = document.querySelector(".burger__close");
const link = document.querySelectorAll(".menu__link")
const gardens = document.querySelector(".gardens_btn");
const lawn = document.querySelector(".lawn_btn");
const planting = document.querySelector(".planting_btn");
const gardenscard = document.querySelector(".gardens__card")
const gardenscard2 = document.querySelector(".gardens__card2")
const plantingcard = document.querySelector(".planting__card")
const plantingcard2 = document.querySelector(".planting__card2")
const plantingcard3 = document.querySelector(".planting__card3")
const lawncard = document.querySelector(".lawn__card")
const prises = document.querySelectorAll(".prices__name__wrapp");
const basicsvisible = document.querySelector(".basics__hide");
const standardvisible = document.querySelector(".standard__hide");
const provisible = document.querySelector(".pro__hide");
const basics = document.querySelector(".basics");
const standard = document.querySelector(".standard");
const pro = document.querySelector(".pro");
const arrowpro = document.querySelector(".arrow__pro");
const arrowstandard = document.querySelector(".arrow__standard");
const arrowbasics = document.querySelector(".arrow__basics");
const ptichkaDropUpB = document.querySelector(".ptichka__down_B");
const ptichkaDropUpS = document.querySelector(".ptichka__down_S");
const ptichkaDropUpP = document.querySelector(".ptichka__down_P");
const orderBTN = document.querySelector(".prices__btn__order");
const bg = document.querySelector(".black");
const contactCity = document.querySelector(".contacts__city__btn");
const contactCityAccordion = document.querySelector(".contacts__city__select__wrapp");
const ptichkaDownContact = document.querySelector(".ptichka__city");
const contactsCityName = document.querySelectorAll(".contacts__city__name");
const contactCitySelect = document.querySelector(".contacts__btn");
const contactCityCard = document.querySelector(".contact__city__card");
const infoNameCity = document.querySelector(".info__name__city");
const infoNamePhone = document.querySelector(".info__name__phone");
const infoNameAdress = document.querySelector(".info__name__adress");
const callNumber = document.querySelector(".call__us__btn");

const cities = [
    {
        city: "Yonkers, NY",
        phone: "+1 914 678 0003",
        adress: "511 Warburton Ave"
    },

    {
        city: "Canandaigua, NY",
        phone: "+1 585 393 0001",
        adress: "151 Charlotte Street"
    },

    {
        city: "Sherrill, NY",
        phone: "+1 315 908 0004",
        adress: "14 WEST Noyes BLVD"
    },

    {
        city: "New York City",
        phone: "+1 212 465 0002",
        adress: "9 East 91st Street"
    }
];







burgerMenu.addEventListener("click", () => {
    burger.classList.add("header__menu__active");
    bg.classList.add("black__burger")
})
close.addEventListener("click", () => {
    burger.classList.remove("header__menu__active");
    bg.classList.remove("black__burger")
})
bg.addEventListener("click", () => {
    burger.classList.remove("header__menu__active");
    bg.classList.remove("black__burger")
})



link.forEach(element => {
    element.addEventListener("click", () => {
        burger.classList.remove("header__menu__active");
        bg.classList.remove("black__burger")
    })
});


gardens.addEventListener("click", () => {
    if (lawn.classList.contains("button__click__service") && planting.classList.contains("button__click__service")) {
        return
    } else {

        gardens.classList.add("button__click__service"); //Эффект кнопки
        if (lawn.classList.contains("button__click__service") || planting.classList.contains("button__click__service"))
        {
        gardenscard.classList.remove("blur__effect");  
        gardenscard2.classList.remove("blur__effect")
        };
        if (lawn.classList.contains("button__click__service")) { return}
        else {lawncard.classList.add("blur__effect")};
        if (planting.classList.contains("button__click__service")) {return}
            else {plantingcard.classList.add("blur__effect");      
            plantingcard2.classList.add("blur__effect");     
            plantingcard3.classList.add("blur__effect")};
    };
});




lawn.addEventListener("click", () => {
    if (gardens.classList.contains("button__click__service") && planting.classList.contains("button__click__service")) {
        return
    } else {
        lawn.classList.add("button__click__service"); //Эффект кнопки
        if (gardens.classList.contains("button__click__service") || planting.classList.contains("button__click__service"))
        {
            lawncard.classList.remove("blur__effect")  
        };
        if (gardens.classList.contains("button__click__service")) { return}
        else {gardenscard.classList.add("blur__effect")
        gardenscard2.classList.add("blur__effect")};
        if (planting.classList.contains("button__click__service")) {return}
            else {plantingcard.classList.add("blur__effect");      
            plantingcard2.classList.add("blur__effect");     
            plantingcard3.classList.add("blur__effect")};
    };
});


planting.addEventListener("click", () => {
    if (gardens.classList.contains("button__click__service") && lawn.classList.contains("button__click__service")) {
        return
    } else {
        planting.classList.add("button__click__service"); //Эффект кнопки
        if (gardens.classList.contains("button__click__service") || lawn.classList.contains("button__click__service"))
        {
            plantingcard.classList.remove("blur__effect"); 
            plantingcard2.classList.remove("blur__effect"); 
            plantingcard3.classList.remove("blur__effect"); 
        };
        if (gardens.classList.contains("button__click__service")) { return}
        else {gardenscard.classList.add("blur__effect")
        gardenscard2.classList.add("blur__effect")};
        if (lawn.classList.contains("button__click__service")) {return}
            else {lawncard.classList.add("blur__effect")};
    };
});


basics.addEventListener("click", () => {

    standardvisible.classList.remove("prices__order__visible");
    provisible.classList.remove("prices__order__visible");
    ptichkaDropUpS.classList.remove("ptichka__up_drop");
    ptichkaDropUpP.classList.remove("ptichka__up_drop");
    arrowpro.classList.remove("ptichka__up");
    arrowstandard.classList.remove("ptichka__up");
    standard.classList.remove("prices__name__wrapp__accord")
    pro.classList.remove("prices__name__wrapp__accord")
    basicsvisible.classList.toggle("prices__order__visible");
    basics.classList.toggle("prices__name__wrapp__accord");
    arrowbasics.classList.toggle("ptichka__up");
    ptichkaDropUpB.classList.toggle("ptichka__up_drop");
    basics.querySelector(".prices__btn__order__wrapp").addEventListener("click", element => {
        element.stopPropagation()})
});


standard.addEventListener("click", () => {
    basicsvisible.classList.remove("prices__order__visible");
    provisible.classList.remove("prices__order__visible");
    ptichkaDropUpB.classList.remove("ptichka__up_drop");
    ptichkaDropUpP.classList.remove("ptichka__up_drop");
    arrowpro.classList.remove("ptichka__up");
    arrowbasics.classList.remove("ptichka__up");
    basics.classList.remove("prices__name__wrapp__accord")
    pro.classList.remove("prices__name__wrapp__accord")




    standardvisible.classList.toggle("prices__order__visible");
    standard.classList.toggle("prices__name__wrapp__accord")
    arrowstandard.classList.toggle("ptichka__up");
    ptichkaDropUpS.classList.toggle("ptichka__up_drop");
    standard.querySelector(".prices__btn__order__wrapp").addEventListener("click", element => {
        element.stopPropagation()})
});
pro.addEventListener("click", () => {
    basicsvisible.classList.remove("prices__order__visible");
    standardvisible.classList.remove("prices__order__visible");
    ptichkaDropUpB.classList.remove("ptichka__up_drop");
    ptichkaDropUpS.classList.remove("ptichka__up_drop");
    arrowstandard.classList.remove("ptichka__up");
    arrowbasics.classList.remove("ptichka__up");
    basics.classList.remove("prices__name__wrapp__accord")
    standard.classList.remove("prices__name__wrapp__accord")



    provisible.classList.toggle("prices__order__visible");
    pro.classList.toggle("prices__name__wrapp__accord")
    arrowpro.classList.toggle("ptichka__up");
    ptichkaDropUpP.classList.toggle("ptichka__up_drop");
    pro.querySelector(".prices__btn__order__wrapp").addEventListener("click", element => {
        element.stopPropagation()})
});


orderBTN.addEventListener("click", () => {
    basicsvisible.classList.add("prices__order__visible");

});



contactCity.addEventListener("click", () => {
    contactCityAccordion.classList.toggle("contacts__city__select__active");
    contactCity.classList.toggle("contacts__city__btn__active");
    ptichkaDownContact.classList.toggle("ptichka__up__contact");
});


contactsCityName.forEach(element => {
    element.addEventListener("click", () => {
        contactCity.classList.remove("contacts__city__btn__active");
        contactCitySelect.textContent = element.innerHTML;
        ptichkaDownContact.classList.remove("ptichka__up__contact");
        contactCityAccordion.classList.remove("contacts__city__select__active");
        contactCity.classList.add("contacts__city__btn__active");
        contactCityCard.classList.add("contact__city__card__active");
        if (element.innerHTML === cities[0].city) {
            infoNameCity.innerHTML = cities[0].city;
            infoNamePhone.innerHTML = cities[0].phone;
            infoNameAdress.innerHTML = cities[0].adress;
            callNumber.href = "tel:+1 914 678 0003";
        }
         else if(element.innerHTML === cities[1].city) {
            infoNameCity.innerHTML = cities[1].city;
            infoNamePhone.innerHTML = cities[1].phone;
            infoNameAdress.innerHTML = cities[1].adress;
            callNumber.href = "tel:++1 585 393 0001";
        }
         else if(element.innerHTML === cities[2].city) {
            infoNameCity.innerHTML = cities[2].city;
            infoNamePhone.innerHTML = cities[2].phone;
            infoNameAdress.innerHTML = cities[2].adress;
            callNumber.href = "tel:+1 315 908 0004";
        }
        else {
            infoNameCity.innerHTML = cities[3].city;
            infoNamePhone.innerHTML = cities[3].phone;
            infoNameAdress.innerHTML = cities[3].adress;
            callNumber.href = "tel:+1 212 465 0002";
        };

    })


});


