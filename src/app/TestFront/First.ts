
describe("Going to write fisrt test",()=>{

    it("should pass without any issue",()=>{
      let a=12
        expect(a).toBe(12)
    })
    it("should not pass as the values area undefined",()=>{
      let u;
      expect(u).toBeDefined("not defined")
    })

})

