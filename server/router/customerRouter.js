const customerRepository = require('../repository/customerRepository');
const custLoginRepo = require('../repository/customerLoginRepository');
const sendMail = require('../mailSender');

module.exports = (app) => {
    app.get('/users', (req, res)=> {
        console.log("Users");
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

    app.post('/users/sendmail', (req, res) => {
        console.log(req.body);
        console.log(req.params.receipt);
        sendMail(req.body);
        
    })

    // app.post('/users/:receipt', (req, res) => {
    //     sendMail().then(dd => res.json(dd));
    // })

    app.delete('/users/:id', (req, res) => {
        customerRepository.remove(req.params.id)
        .then(data => res.json(data))
    })
    app.put('/users/:id', (req, res)=> {
        sendMail()
        customerRepository.update(req.body, req.params.id)   //req.body will give us the json object and param.id will give us the value
        .then(data=> res.json(data));
    })
    
    // app.get('/users/:id',(req,res)=>{
    //     console.log("In GET");
    //     console.log(req.params.id);
    //     a = customerRepository.getCustomerById(req.params.id).then(cust =>{
    //         // console.log("In Get In" + cust);
    //         res.json(cust)})

    //         // console.log("After Get " + a);
    //     }
            
        // )
        // app.put('/users/:id',(req,res)=>{
        //     console.log("In put");
        //     console.log(req.params.id);
        //     customerRepository.update(req.body,req.params.id)
        //     .then(custo=>{
        //         console.log(custo)
        //         res.json(custo)})
        //     })



//    ______________________            LOGIN FUNCS             ________________



            app.get('/logins', (req, res)=> {
                console.log("Logins");
                custLoginRepo.getAllLogins().then(users=>res.json(users))
            })

            

                app.post('/logins', (req, res) => {
                    console.log(req.body);
                    custLoginRepo.addNewLogin(req.body)
                    .then(data => res.json(data))
                })

                app.get('/logins/:email',(req,res)=>{
                    console.log("In Mail GET");
                    console.log(req.params.email);
                    a = custLoginRepo.getLoginByMail(req.params.email).then(mail =>{
                        // console.log("In Get In" + cust);
                        res.json(mail)})
            
                        // console.log("After Get " + a);
                    }
                        
                    )
}

