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

//#3
  describe("#getContacts()",()=>{
    it("should return an empty array when no contacts are available", (done)=>{
    this.book.getContacts()
    .then((contacts)=>{
      expect(contacts.length).toBe(0);
      done();
    })//then contacts close
     .catch((err)=>{
       console.log(err);
       done();
     });//catch error close
   });//it close
   it("should return an array of contacts when contacts are available", (done) => {
         this.book.addContact("Alice", "001-101-1010", "alice@example.com")
         .then(() => {
           this.book.getContacts()
           .then((contacts) => {
             expect(contacts.length).toBe(1);
             done();
           });//then contacts close
         })//then close
         .catch((err) => {
           console.log(err);
           done();
         });//catch error close
       });// it close
  });//getContacts close


//#4
describe("#iterativeSearch()", () => {

     const zelda = ["Zelda Smith", "000-100-111", "zelda@nintendo.com"];
     const snake = ["Solid Snake", "100-100-100", "snake@konami.com"];
     const magus = ["Magus Johnson", "101-010-101", "magus@squaresoft.com"];
     const alloy = ["Alloy Rodriguez", "111-111-111", "allow@guerrilla-games.com"];

     it("should return null when called with an empty array", () => {
       expect(this.book.iterativeSearch([], "Alloy")).toBeNull();
     });//it close. Here we are testing that when the iterativeSearch function is called with an empty array and any target name, not necessarily Alloy, then
     //it must return a null.So since we are passing an empty array, it is not going to have Alloy or any other string and must return null.


     it("should return null when contact is not found", (done) => {
       this.book.addContact(...zelda)
       .then(() => {
       this.book.getContacts()
       .then((contacts) => {
        expect(this.book.iterativeSearch(contacts, "Alloy Rodriguez")).toBeNull();
         done();
       })
      .catch((err) => {
        console.log(err);
      done();
    });
  });
});

it("should return the contact if found", (done) => {
  this.book.addContact(...alloy)
  .then(() => {
    this.book.addContact(...magus)
    .then(() => {
      this.book.getContacts()
      .then((contacts) => {
        let contact = this.book.iterativeSearch(contacts, "Magus Johnson");
        expect(contact.name).toBe("Magus Johnson");
        expect(contact.phone).toBe("101-010-101");
        expect(contact.email).toBe("magus@squaresoft.com");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });
  });
});

   });//iterativeSearch close

})//ContactController close
