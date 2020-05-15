"use strict";
var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        let arti = document.querySelector("div#Articels");
        let shop = document.querySelector("div#shop");
        let chores = document.querySelector("div#Chores");
        let slider = document.querySelector("input#amount");
        arti.addEventListener("change", handleChange);
        shop.addEventListener("change", handleChange);
        chores.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        let article = document.querySelector("select");
        let inputs = document.querySelector("input");
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData, [] = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            let price = Number(item.getAttribute("price"));
            order.innerHTML += item.name + "  € " + price;
        }
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=FL.js.map