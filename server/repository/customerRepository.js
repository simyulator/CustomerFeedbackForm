const Customer = require('../model/customers');
const Mail = require('../model/mailModel');

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
  
    remove(id) {
        return Customer.findOneAndDelete({"topicID" : id});
    }


    addNewTopic(data){
        return Customer.create(data)
        .then(p=>p).catch(error=>console.log(error))
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