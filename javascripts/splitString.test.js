const splitString = require('./splitString');

test('splitString test case', () => {
    expect(splitString('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
    expect(splitString('world')).toEqual(['w', 'o', 'r', 'l', 'd']);
    expect(splitString('')).toEqual([]);
    expect(splitString('a')).toEqual(['a']);
    expect(splitString('ab')).toEqual(['a', 'b']);
})