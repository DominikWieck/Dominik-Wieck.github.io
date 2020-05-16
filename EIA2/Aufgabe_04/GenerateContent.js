"use strict";
var L04_Household;
(function (L04_Household) {
    for (let category in _data) {
        let items = _data[category];
        let group = null;
        switch (category) {
            case "Articles":
                group = createSelect(items);
                break;
            case "Shop":
                group = createSingle(items);
                break;
            case "Chores":
                group = createMultiple(items);
                break;
            case "Bank":
                group = createMultiple(items);
                break;
            default:
                break;
                let fieldset = document.querySelector("fieldset#" + category);
                if (fieldset && group)
                    fieldset.appendChild(group);
        }
    }
    function createSelect(_items, _category) {
        return null;
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            label.htmlFor = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
    }
    function createSingle(_items, _category) {
        return null;
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            label.htmlFor = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
    }
    function createMultiple(_items, _category) {
        return null;
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            label.htmlFor = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
    }
})(L04_Household || (L04_Household = {}));
//# sourceMappingURL=GenerateContent.js.map