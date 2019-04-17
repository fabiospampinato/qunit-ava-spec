
/* DESCRIBE */

function describe ( name, hooks, tests ) {

  if ( typeof hooks === 'function' ) {

    tests = hooks;
    hooks = {};

  } else if ( !tests ) {

    tests = function () {};

  }

  QUnit.module ( name, hooks, function () {

    tests ( test );

  });

}

/* TEST */

function test ( name, callback, _method ) {

  var method = _method || 'test';

  QUnit[method]( name, function () {

    callback ( t );

  });

}

test.only = function ( name, callback ) {

  test ( name, callback, 'only' );

};

test.skip = function ( name, callback ) {

  test ( name, callback, 'skip' );

};

test.todo = function ( name, callback ) {

  test ( name, callback, 'todo' );

};

/* T */

const t = QUnit.assert as any;
t.is = t.strictEqual;
t.not = t.notStrictEqual;
t.true = function ( val ) {
  t.is ( val, true );
};
t.false = function ( val ) {
  t.is ( val, false );
};
t.truthy = function ( val ) {
  t.true ( !!val );
};
t.falsy = function ( val ) {
  t.false ( !!val );
};
t.pass = function () {
  t.true ( true );
};

/* EXPORT */

window['describe'] = describe;
window['it'] = test;
window['test'] = test;
