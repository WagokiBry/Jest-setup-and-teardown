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

let items = [];

beforeEach(() => {
  items = [];
});

test("adds item", () => {
  items.push("apple");
  expect(items.length).toBe(1);
});

test("starts empty", () => {
  expect(items.length).toBe(0);
});

let counted = 0;

beforeEach(() => {
  counted = 1;
});

describe("inner block", () => {
  beforeEach(() => {
    counted = 2;
  });

  test.only("test A", () => {
    expect(counted).toBe(2);
  });
});

test("test B", () => {
  expect(counted).toBe(1);
});
