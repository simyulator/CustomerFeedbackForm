const customerRepository = require('../repository/customerRepository');

module.exports = (app) => {
    app.get('/users', (req, res)=> {
        customerRepository.getAllCustomers()
        .then(users=>res.json(users))
    })
    app.post('/users', (req, res) => {
        customerRepository.addNewTopic(req.body)
        .then(data => res.json(data))
    })
}

