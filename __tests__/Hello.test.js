import Hello from "../src/Hello";


let f;

beforeEach(() => {
	f = new Hello();
});

test("Instanciacao", () => {
	expect(f.sayHello()).toBe("hello");
});