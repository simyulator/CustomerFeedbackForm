const customerRepository = require('../repository/customerRepository');

module.exports = (app) => {
    app.get('/users', (req, res)=> {
        customerRepository.getAllCustomers().then(users=>res.json(users))       
        

})
}

