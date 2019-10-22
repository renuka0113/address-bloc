//const inquirer = require("inquirer");
 const Contact = require("../db/models").Contact;

module.exports = class ContactController {

  constructor(){
    this.contacts=[];
      this.addContactQuestions = [
       {
         type: "input",
         name: "name",
         message: "Contact's name - ",
         validate(val){
           return val !== "";
         }//validate val closed
       },//contact name close
       {
         type: "input",
         name: "phone",
         message: "Contact's phone number - ",
         validate(val){
           return val !== "";
         }//validate val closed
    },//phonenumber closed
        {
          type: "input",
          name:"email",
          message:"Contac's email - ",
          validate(val){
            return val!=="";
          }//validate val closed
        }//email closed
    ];//addContactQuestions closed
  }//constructor closed


addContact(name,phone,email){
//  this.contacts.push({name,phone});
return Contact.create({name, phone,email})
}//addContact closed

getContacts(){
  return Contact.findAll()
}//getContacts closed

iterativeSearch(contacts, target){
      //method definition
      for(let contact of contacts){
        if(contact.name.toLowerCase() === target.toLowerCase()){
          return contact;
        }
      }
      return null;
    }

}//class closed
