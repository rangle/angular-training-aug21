import { ExcerptPipe } from './excerpt.pipe';

fdescribe('ExcerptPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new ExcerptPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should limit string to 5 words', () => {
    const testString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
    const result = pipe.transform(testString);

    expect(result).toBe('Lorem ipsum dolor sit amet');
  });

  it('should limit string to specified word count', () => {
    const testString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
    const result = pipe.transform(testString, 3);

    expect(result).toBe('Lorem ipsum dolor');
  });

});
