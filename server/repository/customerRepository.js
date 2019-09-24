const Customer = require('../model/customers');

class CustomerRepository {
    getAllCustomers() {
        return Customer.find({}).then(users => users);
    }
}

module.exports = new CustomerRepository();