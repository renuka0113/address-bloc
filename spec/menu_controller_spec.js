describe("MenuController",()=>{
  describe("#getContactCount()",()=>{
    it("should return 0 when no contacts are found",()=>{
      const menu=new MenuController();
      expect(menu.(getContactCount()).toBe(0);
    });
  });
});
