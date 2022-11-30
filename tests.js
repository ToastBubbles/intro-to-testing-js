// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    // it('should return the string "Hello, " when executed', function() {
    //     expect(sayHello()).toBe("Hello, ");
    // });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it("should say 'Hello, Jane!'", function() {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it("should say 'Hello, Alex!'", function() {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it("should say 'Hello, Pat!'", function() {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it("should say 'Hello, World!'", function() {
        expect(sayHello('World')).toBe('Hello, World!');
    });
    it("should say 'Hello, World!'", function() {
        expect(sayHello(false)).toBe('Hello, World!');
    });
    it("should say 'Hello, World!'", function() {
        expect(sayHello(null)).toBe('Hello, World!');
    });
    it("should say 'Hello, World!'", function() {
        expect(sayHello(2.3)).toBe('Hello, World!');
    });
    it("should say 'Hello, World!'", function() {
        expect(sayHello("543")).toBe('Hello, World!');
    });
    it("should say 'Hello, World!'", function() {
        expect(sayHello(" ")).toBe('Hello, World!');
    });
    it("should say 'Hello, World!'", function() {
        expect(sayHello("")).toBe('Hello, World!');
    });
});


describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a bool when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed 5 when executed', function() {
        expect(isFive(5)).toBe(true);
    });
    it("should never return 'undefined' when called", function() {
        expect(isFive()).not.toBe(undefined);
    });
    it("should never return true when passed 5 as string", function() {
        expect(isFive("5")).toBe(true);
    });
    it("should return false when passed not 5", function() {
        expect(isFive(Math.ceil(Math.random() * 100) + 6)).toBe(false);
    });
});



describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a bool when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return a faslesbool when called', function() {
        expect(isEven()).toBe(false);
    });
    it('should return true when passed even', function() {
        expect(isEven(4)).toBe(true);
    });
    it('should return false when passed odd', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return true when passed even string', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed string', function() {
        expect(isEven("bananana")).toBe(false);
    });
    it('should return false w infin', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false w bool', function() {
        expect(isEven(true)).toBe(false);
    });
    it("should never return 'undefined' when called", function() {
        expect(isEven()).not.toBe(undefined);
    });
});


describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a bool when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return a true when passed A', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return f when passed y', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return t when passed a', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return false when passed bool', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed num', function() {
        expect(isVowel(4)).toBe(false);
    });
    it("should never return 'undefined' when called", function() {
        expect(isVowel()).not.toBe(undefined);
    });
    it("should ret f when passed banana", function() {
        expect(isVowel("banana")).toBe(false);
    });
});


describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return a num when called', function () {
        expect(typeof add()).toBe("number");
    });
    it('should return added values', function () {
        expect(add(5,2)).toBe(7);
    });
    it('should return added values', function () {
        expect(add(-2,-5)).toBe(-7);
    });
    it('should return added values', function () {
        expect(add("5", 12)).toBe(17);
    });
    it('should return added values', function () {
        expect(add("21","12")).toBe(33);
    });
    it('should return NaN', function () {
        expect(isNaN(add("baba",12))).toBe(true);
    });
    it('should return NaN when passed empty', function () {
        expect(isNaN(add())).toBe(true);
    });
});