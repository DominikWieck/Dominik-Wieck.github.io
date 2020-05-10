var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        var arti = document.querySelector("div#Articels");
        var shop = document.querySelector("div#shop");
        var chores = document.querySelector("div#Chores");
        var slider = document.querySelector("input#amount");
        arti.addEventListener("change", handleChange);
        shop.addEventListener("change", handleChange);
        chores.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        var article = document.querySelector("select");
        var inputs = document.querySelector("input");
        var order = document.querySelector("div#order");
        order.innerHTML = "";
        var formData = new FormData(document.forms[0]);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            var item = document.querySelector("[value='" + entry[1] + "']");
            var price = Number(item.getAttribute("price"));
            order.innerHTML += item.name + "  € " + price;
        }
    }
    function displayAmount(_event) {
        var progress = document.querySelector("progress");
        var amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=FL.js.map