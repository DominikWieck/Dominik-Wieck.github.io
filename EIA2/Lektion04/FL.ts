namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let arti: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Articels");
        let shop: HTMLDivElement = <HTMLDivElement>document.querySelector("div#shop");
        let chores: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Chores");


        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");


        arti.addEventListener("change", handleChange);
        shop.addEventListener("change", handleChange);
        chores.addEventListener("change", handleChange);


    }

    function handleChange(_event: Event): void {
        let article: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        let inputs: HTMLInputElement = <HTMLInputElement>document.querySelector("input");
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";




        let formData[]: string[] = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            let price: number = Number(item.getAttribute("price"));

            order.innerHTML += item.name + "  € " + price;
        }
    }


    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }


}