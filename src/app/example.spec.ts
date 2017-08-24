function add(a, b) {
  return a + b;
}

fdescribe('Add', () => {
  it('should add two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });

  it('should concat number and string', () => {
    const result = add(1, '2');
    expect(result).toBe('12');
  });
});
