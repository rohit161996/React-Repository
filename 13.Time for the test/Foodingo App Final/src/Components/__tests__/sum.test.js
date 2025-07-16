const { sum } = require("../sum");

test("Sum Function Should Calculate the Sum of Two Functions:-", () => {

    // Calculate the sum from the sum.js file
    const result = sum(3, 4);

    // Assertion of the result
    expect(result).toBe(7);   

});