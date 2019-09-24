const Customer = require('../model/customers');

class CustomerRepository{
    getAllCustomers(){
        return Customer.find({}).then(users => users);
    }
    // editCustomer(req){
    //     return Customer.findById(req.params.feedId, (e, data) => {
    //         if(e){
    //             res.send(e);
    //         }
    //         data.title = req.body.title;
    //         data.count = req.body.count;
    //         data.save(function(err){
    //             if(err){
    //                 res.send(err);
    //                 res.json(data);
    //             }
    //         })
    //     })
    // }

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


}


module.exports = new CustomerRepository();