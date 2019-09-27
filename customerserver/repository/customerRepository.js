const Customer = require('../model/customers');

class CustomerRepository{
    getAllCustomers(){
        return Customer.find({}).then(users => users);
    }

    getCustomerById(id){
        console.log("IN Repository");
        return Customer.findOne({"topicID":id}).then((custo => {
            console.log(custo);
        }));
        }

    update(customer,id){
        console.log("In Update");
            return Customer.findOneAndUpdate(
            {"topicID":id},
            {$set:customer}
            )
        }

        save(product){
            return new Product().create(product).then(p=>p).catch(error=>console.log(error))
        }


}


module.exports = new CustomerRepository();