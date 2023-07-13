export const ITEMS_PER_PAGE = 10;
export function discountedPrice(item){
    return Math.round(item.price*(1-item.discountPercentage/100),2)
}

//json-server --watch data.json --port 8080 
//to start the json server