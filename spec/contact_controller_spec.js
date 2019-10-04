const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;
describe("ContactController", () => {

  it("should be defined", () => {
    expect(ContactController).toBeDefined();
  });

});
