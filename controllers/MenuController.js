const inquirer = require('inquirer');
const ContactController = require("./ContactController");

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Exit"
        ]
      }
    ];
    //this.contacts = [];
     this.book = new ContactController(); //reference to instance of ContactController
  }//constructor close

  main(){
  //console.log('hello from main');
  console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

clear(){
//  console.log('hello from clear');
 console.log("\x1Bc");//to clear the console
  }

  addContact(){
    this.clear();
    //console.log('addContact called');
    inquirer.prompt(this.book.addContactQuestions).then((answers) => {
      this.book.addContact(answers.name, answers.phone).then((contact) => {
        console.log("Contact added successfully!");
        this.main();
         }).catch((err) => {
        console.log(err);
        this.main();
      });
    });
  //  this.main();
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  getContactCount(){
    //method definition
    return this.contacts.length;
  }

}// close class
