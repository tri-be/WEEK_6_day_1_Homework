let products = [
	{
        name: "CityBlock Moisturizer",
        stock: 121,
        cost: 15,
        catApproved: true
    },
    {
        name: "CityBlock Cleanser",
        stock: 111,
        cost: 12,
        catApproved: true
    },
    {
        name: "Natrl Focus Oil",
        stock: 11,
        cost: 27,
        catApproved: true
    },
    {
        name: "Natrl Focus Shades",
        stock: 50,
        cost: 21,
        catApproved: true
    }
]

module.exports = {
    getProducts() {
        return products.join(', ')
    },
    getProduct(id) {
        return products[id]
    }
}