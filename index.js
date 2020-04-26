let add = (num1,num2) => {
    return num1+num2;
};

let subtract = (num1,num2) => {
    return num2-num1;
};

let divide = (num1,num2) => {
    return num1/num2;
};

let multiply = (num1,num2) => {
    return num1*num2;
};

const describe = (desc, fn) => {
    console.log(desc);
    fn();
}
  
const it = (msg, fn) => describe('  ' + msg, fn)
  
const matchers = (exp) => ({
    toBe: (assertion) => {
        if (exp === assertion) {
            console.log('pass')
            return true
        } else {
            console.log('fail')
            return false
        }
    }
})
  
const expect = (exp) => matchers(exp)
  
describe('add', () => {
    it('adds two numbers', () => {
        const result = add(10, 2)
        expect(result).toBe(12)
    })
})
describe('subtract', () => {
    it('subtracts first number from second', () => {
        const result = subtract(2, 5)
        expect(result).toBe(3)
    })
})
describe('divide', () => {
    it('divides first number from second', () => {
        const result = divide(20, 4)
        expect(result).toBe(5)
    })
})
describe('multiply', () => {
    it('multiplies two numbers', () => {
        const result = multiply(5, 2)
        expect(result).toBe(10)
    })
});