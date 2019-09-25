const inquirer = require('inquirer');
//const now=new Date();

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Exit",
          "Get current date and time"
        ]
      }
    ];
    this.contacts = [];
  }//constructor close

  main(){

  console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;
        case "Exit":
          this.exit();
          break;
        case "Get current date and time":
          this.getCurrentDate();
          break;
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
    console.log('addContact called');
    this.main();
  }

  getCurrentDate(){
    const now=new Date();
    console.log(now);
    this.main();
  };

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

}// close class
