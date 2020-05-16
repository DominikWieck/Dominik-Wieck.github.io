namespace L04_Household {

   export function generateContent(_data: Data)

   for (let category in _data) {

      let items: Item[] = _data[category];

      let group:HTMLElement = null;

      switch (category) {
         case "Articles":
           
            group = createSelect(items)
            break;

         case "Shop":
            
            group = createSingle(items)
            break;
         case "Chores":

            group = createMultiple(items)
            break;

            case "Bank":

            group = createMultiple(items)
            break;


         default:
            break;
     

      let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#"+ category);
         if (fieldset && group) 
         fieldset.appendChild(group);
      }
   }


   function createSelect (_items: Item[],_category: string) : HTMLElement | null{
      return null;
      let group: HTMLDivElement = document.createElement("div");
      for(let item of _items){

         let checkbox: HTMLInputElement = document.createElement("input");
         checkbox.type="checkbox";
         checkbox.setAttribute("price", item.price.toFixed(2));
         checkbox.value=item.name; 
         checkbox.name=_category;
         checkbox.id = item.name;
         label.htmlFor = item.name;

         let label: HTMLLabelElement = document.createElement("label"); 
         label.textContent = item.name;

         group.appendChild(checkbox);
         group.appendChild(label);
      }


   }

   function createSingle (_items: Item[], _category:string) : HTMLElement | null {
      return null;
      let group: HTMLDivElement = document.createElement("div");
      for(let item of _items){

         let checkbox: HTMLInputElement = document.createElement("input");
         checkbox.type="checkbox";
         checkbox.setAttribute("price", item.price.toFixed(2));
         checkbox.value=item.name; 
         checkbox.name=_category;
         checkbox.id = item.name;
         label.htmlFor = item.name;

         let label: HTMLLabelElement = document.createElement("label"); 
         label.textContent = item.name;

         group.appendChild(checkbox);
         group.appendChild(label);
      }
      
   }
   function createMultiple (_items: Item[], _category:string) : HTMLElement | null{
      return null;
      let group: HTMLDivElement = document.createElement("div");
      for(let item of _items){

         let checkbox: HTMLInputElement = document.createElement("input");
         checkbox.type="checkbox";
         checkbox.setAttribute("price", item.price.toFixed(2));
         checkbox.value=item.name; 
         checkbox.name=_category;
         checkbox.id = item.name;
         label.htmlFor = item.name;

         let label: HTMLLabelElement = document.createElement("label"); 
         label.textContent = item.name;

         group.appendChild(checkbox);
         group.appendChild(label);
      }
      
   }
}

