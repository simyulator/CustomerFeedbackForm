const Customer = require('../model/customers');

class CustomerRepository {
    getAllCustomers() {
        return Customer.find({}).then(users => users);
    }


    addNewTopic(data){
        return Customer.create(data)
        .then(p=>p).catch(error=>console.log(error))
    }

    getCustomerById(id){
        console.log("IN Repository");
        console.log(id);
        return Customer.find({"topicID":id}).then((custo => custo));
        }

    update(topic, id){
        console.log(topic);
        return Customer.findOneAndUpdate(
            {"topicID":id},
            {$set:topic}
        )
    }

}

module.exports = new CustomerRepository();