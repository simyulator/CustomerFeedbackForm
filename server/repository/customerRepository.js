const Customer = require('../model/customers');

class CustomerRepository {
    getAllCustomers() {
        return Customer.find({}).then(users => users);
    }

    addNewTopic(data){
        return new Product().save(data)
        .then(p=>p).catch(error=>console.log(error))
    }

    update(topic, id){
        return Product.findOneAndUpdate(
            {"productId":id},
            {$set:product}
        )
    }
}

module.exports = new CustomerRepository();