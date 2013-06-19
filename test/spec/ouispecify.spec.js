describe("Ouispecify", function() {
  it("exports a specify function", function() {
    expect(specify).not.toBe(null);
  });

  it("finds the specificity of 'h1'", function() {
    var expectedResult = [0,0,1];
    expect(specify('h1').specificity).toEqual(expectedResult);
  });

  it("finds the specificity of 'h1#id.class'", function() {
    var expectedResult = [1,1,1];
    expect(specify('h1#id.class').specificity).toEqual(expectedResult);
  });

  it("finds the details of 'h1#id.class'", function() {
    var expectedResult = [['#id'],['.class'],['h1']];
    expect(specify('h1#id.class').details).toEqual(expectedResult);
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

  it("finds the details of the :not selector on ':not(p)'", function() {
    var expectedResult = [[],[],['p']];
    expect(specify(':not(p)').details).toEqual(expectedResult);
  });

  it("finds the specificity of the :not selector on ':not(p)'", function() {
    var expectedResult = [0,0,1];
    expect(specify(':not(p)').specificity).toEqual(expectedResult);
  });

  it("finds the specificity of the pseudo-elements on 'p::first-letter'", function() {
    var expectedResult = [0,0,2];
    expect(specify('p::first-letter').specificity).toEqual(expectedResult);
  });

  it("finds the details of the pseudo-elements on 'p::first-letter'", function() {
    var expectedResult = [[],[],['p', '::first-letter']];
    expect(specify('p::first-letter').details).toEqual(expectedResult);
  });

  it("finds the specificity of 'p:after'", function() {
    var expectedResult = [0,0,2];
    expect(specify('p:after').specificity).toEqual(expectedResult);
  });

  it("finds the details of 'p:after'", function() {
    var expectedResult = [[],[],['p', ':after']];
    expect(specify('p:after').details).toEqual(expectedResult);
  });

});
