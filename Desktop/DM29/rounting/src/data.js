const products = [
    {
        id: 1,
        name: "Broom",
        price:"5.99"
    },
    {
        id: 2,
        name: "Towel",
        price:"6.99"
    },
    {
        id: 3,
        name: "Sponge",
        price:"7.99"
    },
    {
        id: 4,
        name: "Sheets",
        price:"8.99"
    },
    {
        id: 5,
        name: "Pilow",
        price:"9.99"
    }
]

export function getProducts(){
    return products;
}

export function getItem(id){
    //return the object from the array of products that matches the ID parameter
    //use Filter(), or forEach(), or For loop
    let item = products.filter(e => {
        return e.id === +id;
    })
    return item[0]
}