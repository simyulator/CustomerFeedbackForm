const Customer = require('../model/mailModel');

class MailRepository {
    
    // sendMails() {
    //     Customer.
    //     Customer.find({}).then(users => users);
    // }

   
    addNewLogin(data){
        return Customer.create(data)
        .then(p=>p).catch(error=>console.log(error))
    }

    getLoginByMail(email){
        console.log("In Mail Repository");
        console.log(email);
        return Customer.find({"email": email}).then((mail => mail))
    }
}

module.exports = new CustomerLoginRepository();