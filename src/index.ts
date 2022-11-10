
/* DESCRIBE */

const describe = ( name, hooks, tests ) => {

  if ( typeof hooks === 'function' ) {

    tests = hooks;
    hooks = {};

  } else if ( !tests ) {

    tests = () => {};

  }

  QUnit.module ( name, hooks, () => {

    tests ( test );

  });

};

/* TEST */

const test = ( name, callback, _method ) => {

  const method = _method || 'test';

  QUnit[method]( name, () => {

    callback ( t );

  });

};

test.only = ( name, callback ) => {

  test ( name, callback, 'only' );

};

test.skip = ( name, callback ) => {

  test ( name, callback, 'skip' );

};

test.todo = ( name, callback ) => {

  test ( name, callback, 'todo' );

};

/* T */

const t = QUnit.assert as any;

t.is = t.strictEqual;

t.not = t.notStrictEqual;

t.true = value => {
  t.is ( value, true );
};

t.false = value => {
  t.is ( value, false );
};

t.truthy = value => {
  t.true ( !!value );
};

t.falsy = value => {
  t.false ( !!value );
};

t.pass = () => {
  t.true ( true );
};

/* EXPORT */

window['describe'] = describe;
window['it'] = test;
window['test'] = test;
