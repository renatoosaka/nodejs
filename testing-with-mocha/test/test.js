// const { assert } = require("chai")
const assert = require("assert")
const calculator = require("../calculator")

describe("Calulator Test", () => {
  describe("add() test", () => {
    it("add(1, 2) should return 3", () => {
      // assert.equal(calculator.add(1, 2), 3)
      assert.deepStrictEqual(calculator.add(1, 2), 3)
    })

    it("add('1', '2') should return 3", () => {
      // assert.equal(calculator.add("1", "2"), 3)
      assert.deepStrictEqual(calculator.add("1", "2"), 3)
    })    
  })
})