const inquirer = require('inquirer');

const MenuController = require('./controllers/MenuController');
const menu = new MenuController();//instance of MenuController is stored in menu

//calling clear and main methods on menu
menu.clear();
menu.main();
