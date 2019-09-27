const customerRepository = require('../repository/customerRepository');

module.exports = (app) => {
    app.get('/users', (req, res)=> {
        customerRepository.getAllCustomers()
        .then(users=>res.json(users))
    })
    app.get('/users/:id', (req, res) => {
        customerRepository.getCustomerById(req.params.id)
        .then(cust => {
            console.log(cust);
            res.json(cust)
        })
    })
    app.post('/users', (req, res) => {
        console.log(req.body);
        customerRepository.addNewTopic(req.body)
        .then(data => res.json(data))
    })
    app.delete('/users/:id', (req, res) => {
        customerRepository.remove(req.params.id)
        .then(data => res.json(data))
    })
    app.put('/users/:id', (req, res)=> {
        customerRepository.update(req.body, req.params.id)   //req.body will give us the json object and param.id will give us the value
        .then(data=> res.json(data));
    })
}

