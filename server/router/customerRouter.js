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
    app.get('/users/:id',(req,res)=>{
        console.log("In GET");
        customerRepository.getCustomerById(req.params.id)
        .then(cust =>{
            console.log(cust);
            res.json(cust)})
        })
        app.put('/products/:feedID',(req,res)=>{
            console.log(req.params.id);
            // productRepository.update(req.body,req.params.id)
            // .then(product=>res.json(product))
            })
}

