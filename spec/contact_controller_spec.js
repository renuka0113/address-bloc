const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;
describe("ContactController", () => {

  beforeEach((done)=>{
    this.book=new ContactController();

    // #1

    sequelize.sync({force:true}).then((res)=>{
      done();
    }) //sequelize close

.catch((err)=>{
  done();
  }); //catch close
}); //beforeEach close

//#2
 describe("#addContact()",()=>{
   it("should add a single contact into the book",(done)=>{
    // expect(this.books.contact.length).toBe(0);
     //this.book.addContact("Alice","001-101-1010");
     //expect(this.books.contacts.length).toBe(1);
     this.book.addContact("Alice","001-101-1010")
     .then ((contact)=>{
       expect(contact.name).toBe("Alice");
       expect(contact.phone).toBe("001-101-1010");
       expect(contact.email).toBe("alice@gmail.com");
       done();
     })//.then close
     .catch((err)=>{
       done();
     });//catch close
   });//it close

 });//addContact close
})//ContactController close
