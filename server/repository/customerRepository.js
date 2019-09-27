const Customer = require('../model/customers');

class CustomerRepository {
    getAllCustomers() {
        return Customer.find({}).then(users => users);
    }
    getCustomerById(id) {
        console.log("IN repository");
        return Customer.findOne(
            {"topicID" : id}
        ).then(user => user);
    }
    addNewTopic(data) {
        return Customer.create(data)
        .then(p=>p).catch(error=>console.log(error))
    }
    update(topic, id){
        return Customer.findOneAndUpdate(
            {"productId":id},
            {$set:product}
        )
    }
    remove(id) {
        return Customer.findOneAndDelete({"topicID" : id});
    }
}

module.exports = new CustomerRepository();