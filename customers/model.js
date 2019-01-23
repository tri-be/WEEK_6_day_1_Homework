let customers = [
	{
        name: "Hugo",
        age: 27,
        gender: "male"
        likesCats: true,
        likesBeer: true,
        bicycleType: "urban"
    },
    {
        name: "Linda",
        age: 25,
        gender: "female",
        likesCats: true,
        likesBeer: true,
        bicycleType: "hybrid"
    },
    {
        name: "Cary",
        age: 33,
        gender: "unknown",
        likesCats: false,
        likesBeer: true,
        bicycleType: "mountain"
    },
    {
        name: "Tae-Hoon",
        age: 24,
        gender: "fluid",
        likesCats: true,
        likesBeer: false,
        bicycleType: "urban"
    }
]
module.exports = {
    getCustomers() {
        return customers.join(', ')
    },
    getCustomer(id) {
        return customers[id]
    }
}