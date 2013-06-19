describe("Ouispecify", function() {
  it("exports a specify function", function() {
    expect(specify).not.toBe(null);
  });
});

describe("This library", function() {
  it("finds the specificity of 'h1'", function() {
    var expectedResult = [0,0,1];
    expect(specify('h1').specificity).toEqual(expectedResult);
  });

  it("finds the specificity & details of 'h1#id.class'", function() {
    var expectedSpecificity = [1,1,1];
    var expectedDetails = [['#id'],['.class'],['h1']];

    expect(specify('h1#id.class').specificity).toEqual(expectedSpecificity);
    expect(specify('h1#id.class').details).toEqual(expectedDetails);
  });

  it("finds the details of 'input[type=text]'", function() {
    var expectedResult = [[],['[type=text]'],['input']];
    expect(specify('input[type=text]').details).toEqual(expectedResult);
  });

  it("finds the details of this pseudo-class 'a:visited'", function() {
    var expectedResult = [[],[':visited'],['a']];
    expect(specify('a:visited').details).toEqual(expectedResult);
  });

  it("finds the details of this class 'h1.my-class'", function() {
    var expectedResult = [[],['.my-class'],['h1']];
    expect(specify('h1.my-class').details).toEqual(expectedResult);
  });

  it("finds the details of this class '* h1.my-class'", function() {
    var expectedResult = [[],['.my-class'],['h1']];
    expect(specify('* h1.my-class').details).toEqual(expectedResult);
  });

  it("finds the details of this class 'h1 + h2'", function() {
    var expectedResult = [[],[],['h1','h2']];
    expect(specify('h1 + h2').details).toEqual(expectedResult);
  });

  it("finds the specificity & details of the :not selector on ':not(p)'", function() {
    var expectedSpecificity = [0,0,1];
    var expectedDetails = [[],[],['p']];

    expect(specify(':not(p)').specificity).toEqual(expectedSpecificity);
    expect(specify(':not(p)').details).toEqual(expectedDetails);
  });

  it("finds the specificity & details of the pseudo-elements on 'p::first-letter'", function() {
    var expectedSpecificity = [0,0,2];
    var expectedDetails = [[],[],['p', '::first-letter']];

    expect(specify('p::first-letter').specificity).toEqual(expectedSpecificity);
    expect(specify('p::first-letter').details).toEqual(expectedDetails);
  });

  it("finds the specificity & details of 'p:after'", function() {
    var expectedSpecificity = [0,0,2];
    var expectedDetails = [[],[],['p', ':after']];

    expect(specify('p:after').specificity).toEqual(expectedSpecificity);
    expect(specify('p:after').details).toEqual(expectedDetails);
  });
});
