let count = 0;

beforeEach(() => {
  count = 0;
});

test("increment once", () => {
  count++;
  expect(count).toBe(1);
});

test("increment twice", () => {
  count += 2;
  expect(count).toBe(2);
});


