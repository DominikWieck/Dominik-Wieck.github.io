export namespace L04_HouseHold {

    export interface Item {
        name: string;
        price?: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

   export let data: Data = {

        Articles: [
            { name: "Butter", price: 20.00 },
            { name:"Milk", price: 69.00 },
            { name:"Eggs", price: 31.00 }
        ],

        Shop: [
            { name: "REWE" },
            { name: "ALDI" },
            { name: "LIDL" }

        ],

        Chores: [
            { name: "Cleaning", price: 6.00 },
            { name: "Cooking", price: 8.00 },
            { name: "Cleaning", price: 7.00 }
        ],

        Bank: [

            { name: "PayPal" },
            { name: "Transfer" },
            { name: "Cash" }

        ]
    };



}