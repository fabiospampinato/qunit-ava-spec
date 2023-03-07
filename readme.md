# QUnit AVA Spec

Helper functions for using [QUnit](https://api.qunitjs.com/) as if it was [ava](https://github.com/avajs/ava)/[ava-spec](https://github.com/sheerun/ava-spec).

## Install

```sh
npm install --save-dev qunit-ava-spec
```

## Usage

Load it after having loaded QUnit:

```html
<script src="./node_modules/qunit-ava-spec/dist/index.js"></script>
```

Then use it like you would use [ava](https://github.com/avajs/ava):

```js
test ( 'Foo', t => {
  t.is ( true, false );
});
```

Or [ava-spec](https://github.com/sheerun/ava-spec):

```js
describe ( 'Foo', it => {
  it ( 'does something useful', t => {
    t.true ( false );
  });
});
```

If you need [hooks](https://api.qunitjs.com/QUnit/module) you can pass them as a second optional argument to `describe`.

## License

MIT © Fabio Spampinato
