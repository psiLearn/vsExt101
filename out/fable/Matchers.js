"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Matcher$00602$reflection = Matcher$00602$reflection;
exports.Matcher$00602$$$$002Ector$$686F6362 = Matcher$00602$$$$002Ector$$686F6362;
exports.Matcher$00602$$get_Mock = Matcher$00602$$get_Mock;
exports.Matcher$00602$$CalledWith$$2B595 = Matcher$00602$$CalledWith$$2B595;
exports.Matcher$00602$$LastCalledWith = Matcher$00602$$LastCalledWith;
exports.Matcher$00602$$LastCalledWith$$2B595 = Matcher$00602$$LastCalledWith$$2B595;
exports.Matcher$00602$$get_Calls = Matcher$00602$$get_Calls;
exports.Matcher$00602$$get_LastCall = Matcher$00602$$get_LastCall;
exports.Matcher2$00603$reflection = Matcher2$00603$reflection;
exports.Matcher2$00603$$$$002Ector$$39B49FA3 = Matcher2$00603$$$$002Ector$$39B49FA3;
exports.Matcher2$00603$$Mock = Matcher2$00603$$Mock;
exports.Matcher2$00603$$CalledWith = Matcher2$00603$$CalledWith;
exports.Matcher2$00603$$LastCalledWith = Matcher2$00603$$LastCalledWith;
exports.Matcher2$00603$$get_Calls = Matcher2$00603$$get_Calls;
exports.Matcher2$00603$$get_LastCall = Matcher2$00603$$get_LastCall;
exports.Matcher3$00604$reflection = Matcher3$00604$reflection;
exports.Matcher3$00604$$$$002Ector$$55D40D23 = Matcher3$00604$$$$002Ector$$55D40D23;
exports.Matcher3$00604$$Mock = Matcher3$00604$$Mock;
exports.Matcher3$00604$$CalledWith = Matcher3$00604$$CalledWith;
exports.Matcher3$00604$$LastCalledWith = Matcher3$00604$$LastCalledWith;
exports.Matcher3$00604$$get_Calls = Matcher3$00604$$get_Calls;
exports.Matcher3$00604$$get_LastCall = Matcher3$00604$$get_LastCall;
exports.toEqual = toEqual;
exports.toBe = toBe;
exports.toMatchSnapshot = toMatchSnapshot;
exports.toEqualSome = toEqualSome;
exports.toEqualNone = toEqualNone;
exports.Assertions$$$op_EqualsEquals = Assertions$$$op_EqualsEquals;
exports.Assertions$$$op_EqualsEqualsEquals = Assertions$$$op_EqualsEqualsEquals;
exports.Assertions$$$op_LessQmarkGreater = Assertions$$$op_LessQmarkGreater;
exports.Assertions$$$op_LessQmarkQmarkGreater = Assertions$$$op_LessQmarkQmarkGreater;
exports.Assertions$$$op_LessQmarkQmarkQmarkGreater = Assertions$$$op_LessQmarkQmarkQmarkGreater;
exports.Jesto$002ETest$reflection = Jesto$002ETest$reflection;
exports.Jesto$$$testList = Jesto$$$testList;
exports.Jesto$$$testFixture = Jesto$$$testFixture;
exports.Jesto$$$testFixtureDone = Jesto$$$testFixtureDone;
exports.Jesto$$$testFixtureAsync = Jesto$$$testFixtureAsync;
exports.Jesto$002ETest = exports.Matcher3$00604 = exports.Matcher2$00603 = exports.Matcher$00602 = void 0;

var _Types = require("../fable-library.2.1.8/Types");

var _Reflection = require("../fable-library.2.1.8/Reflection");

var _Array = require("../fable-library.2.1.8/Array");

var _Util = require("../fable-library.2.1.8/Util");

var _String = require("../fable-library.2.1.8/String");

var _Seq = require("../fable-library.2.1.8/Seq");

const Matcher$00602 = (0, _Types.declare)(function Fable_Import_Jest_Matchers_Matcher(impl) {
  const $this$$1 = this;

  if (impl == null) {
    $this$$1.fn = jest.fn();
  } else {
    const x = impl;
    $this$$1.fn = jest.fn(x);
  }
});
exports.Matcher$00602 = Matcher$00602;

function Matcher$00602$reflection($gen$$4, $gen$$5) {
  return (0, _Reflection.type)("Fable.Import.Jest.Matchers.Matcher`2", [$gen$$4, $gen$$5]);
}

function Matcher$00602$$$$002Ector$$686F6362(impl) {
  return this != null ? Matcher$00602.call(this, impl) : new Matcher$00602(impl);
}

function Matcher$00602$$get_Mock(__) {
  return __.fn;
}

function Matcher$00602$$CalledWith$$2B595(__$$1, a) {
  expect(__$$1.fn).toBeCalledWith(a);
}

function Matcher$00602$$LastCalledWith(__$$2) {
  expect(__$$2.fn).lastCalledWith();
}

function Matcher$00602$$LastCalledWith$$2B595(__$$3, a$$1) {
  expect(__$$3.fn).lastCalledWith(a$$1);
}

function Matcher$00602$$get_Calls(__$$4) {
  return __$$4.fn.mock.calls;
}

function Matcher$00602$$get_LastCall(x$$1) {
  return (0, _Array.last)((0, _Array.last)(Matcher$00602$$get_Calls(x$$1)));
}

const Matcher2$00603 = (0, _Types.declare)(function Fable_Import_Jest_Matchers_Matcher2(impl$$1) {
  var x$$2;
  const $this$$2 = this;
  $this$$2.fn = (0, _Util.uncurry)(2, (0, _Util.curry)(2, impl$$1) == null ? jest.fn() : (x$$2 = impl$$1, jest.fn(x$$2)));
});
exports.Matcher2$00603 = Matcher2$00603;

function Matcher2$00603$reflection($gen$$6, $gen$$7, $gen$$8) {
  return (0, _Reflection.type)("Fable.Import.Jest.Matchers.Matcher2`3", [$gen$$6, $gen$$7, $gen$$8]);
}

function Matcher2$00603$$$$002Ector$$39B49FA3(impl$$1) {
  return this != null ? Matcher2$00603.call(this, impl$$1) : new Matcher2$00603(impl$$1);
}

function Matcher2$00603$$Mock(__$$5, a$$2, b) {
  return __$$5.fn(a$$2, b);
}

function Matcher2$00603$$CalledWith(__$$6, a$$3, b$$1) {
  expect((0, _Util.curry)(2, __$$6.fn)).toBeCalledWith(a$$3, b$$1);
}

function Matcher2$00603$$LastCalledWith(__$$7, a$$4, b$$2) {
  expect((0, _Util.curry)(2, __$$7.fn)).lastCalledWith(a$$4, b$$2);
}

function Matcher2$00603$$get_Calls(__$$8) {
  return (0, _Util.curry)(2, __$$8.fn).mock.calls;
}

function Matcher2$00603$$get_LastCall(x$$3) {
  return (0, _Array.last)(Matcher2$00603$$get_Calls(x$$3));
}

const Matcher3$00604 = (0, _Types.declare)(function Fable_Import_Jest_Matchers_Matcher3(impl$$2) {
  var x$$4;
  const $this$$3 = this;
  $this$$3.fn = (0, _Util.uncurry)(3, (0, _Util.curry)(3, impl$$2) == null ? jest.fn() : (x$$4 = impl$$2, jest.fn(x$$4)));
});
exports.Matcher3$00604 = Matcher3$00604;

function Matcher3$00604$reflection($gen$$9, $gen$$10, $gen$$11, $gen$$12) {
  return (0, _Reflection.type)("Fable.Import.Jest.Matchers.Matcher3`4", [$gen$$9, $gen$$10, $gen$$11, $gen$$12]);
}

function Matcher3$00604$$$$002Ector$$55D40D23(impl$$2) {
  return this != null ? Matcher3$00604.call(this, impl$$2) : new Matcher3$00604(impl$$2);
}

function Matcher3$00604$$Mock(__$$9, a$$5, b$$3, c) {
  return __$$9.fn(a$$5, b$$3, c);
}

function Matcher3$00604$$CalledWith(__$$10, a$$6, b$$4, c$$1) {
  expect((0, _Util.curry)(3, __$$10.fn)).toBeCalledWith(a$$6, b$$4, c$$1);
}

function Matcher3$00604$$LastCalledWith(__$$11, a$$7, b$$5, c$$2) {
  expect((0, _Util.curry)(3, __$$11.fn)).lastCalledWith(a$$7, b$$5, c$$2);
}

function Matcher3$00604$$get_Calls(__$$12) {
  return (0, _Util.curry)(3, __$$12.fn).mock.calls;
}

function Matcher3$00604$$get_LastCall(x$$5) {
  return (0, _Array.last)(Matcher3$00604$$get_Calls(x$$5));
}

function toEqual(expected, actual) {
  expect(expected).toEqual(actual);
}

function toBe(expected$$1, actual$$1) {
  expect(expected$$1).toBe(actual$$1);
}

function toMatchSnapshot(expected$$2) {
  expect(expected$$2).toMatchSnapshot();
}

(function () {
  const value = expect.extend({
    toEqualSome(x$$6, y) {
      if (x$$6 == null) {
        return {
          message: "Expected Some Got None",
          pass: false
        };
      } else {
        const z = x$$6;
        const this$ = this;
        const isEqual = this$.equals(z, y);
        return isEqual ? {
          message: (0, _String.toText)((0, _String.printf)("Expected %A not to equal %A"))(this$.utils.printExpected(x$$6))(this$.utils.printReceived(y)),
          pass: true
        } : {
          message: (0, _String.toText)((0, _String.printf)("Expected %A  to equal %A"))(this$.utils.printExpected(x$$6))(this$.utils.printReceived(y)),
          pass: false
        };
      }
    },

    toEqualNone(x$$7) {
      return x$$7 == null ? {
        message: "Expected not to get None",
        pass: true
      } : {
        message: "Expected None Got some",
        pass: false
      };
    }

  });
})();

function toEqualSome(x$$8, y$$1) {
  expect(x$$8).toEqualSome(y$$1);
}

function toEqualNone(x$$9) {
  expect(x$$9).toEqualNone();
}

function Assertions$$$op_EqualsEquals(e, a$$8) {
  toEqual(e, a$$8);
}

function Assertions$$$op_EqualsEqualsEquals(e$$1, a$$9) {
  toBe(e$$1, a$$9);
}

function Assertions$$$op_LessQmarkGreater(m, a$$10) {
  Matcher$00602$$LastCalledWith$$2B595(m, a$$10);
}

function Assertions$$$op_LessQmarkQmarkGreater(m$$1, a$$11, b$$6) {
  Matcher2$00603$$LastCalledWith(m$$1, a$$11, b$$6);
}

function Assertions$$$op_LessQmarkQmarkQmarkGreater(m$$2, a$$12, b$$7, c$$3) {
  Matcher3$00604$$LastCalledWith(m$$2, a$$12, b$$7, c$$3);
}

const Jesto$002ETest = (0, _Types.declare)(function Fable_Import_Jest_Matchers_Jesto_Test(tag, name, ...fields) {
  _Types.Union.call(this, tag, name, ...fields);
}, _Types.Union);
exports.Jesto$002ETest = Jesto$002ETest;

function Jesto$002ETest$reflection() {
  return (0, _Reflection.union)("Fable.Import.Jest.Matchers.Jesto.Test", [], Jesto$002ETest, () => [["Test", [_Reflection.string, (0, _Reflection.lambda)(_Reflection.unit, _Reflection.unit)]], ["TestDone", [_Reflection.string, (0, _Reflection.lambda)((0, _Reflection.type)("Fable.Import.Jest.Bindings.DoneStatic"), _Reflection.unit)]], ["TestAsync", [_Reflection.string, (0, _Reflection.lambda)(_Reflection.unit, (0, _Reflection.type)("Fable.Import.JS.Promise`1", [_Reflection.unit]))]]]);
}

function Jesto$$$testList(name, xs) {
  describe(name, function () {
    (0, _Seq.iterate)(function action(_arg1) {
      switch (_arg1.tag) {
        case 1:
          {
            const s$$1 = _arg1.fields[0];
            const fn$$1 = _arg1.fields[1];
            test(s$$1, fn$$1);
            break;
          }

        case 2:
          {
            const s$$2 = _arg1.fields[0];
            const fn$$2 = _arg1.fields[1];
            test(s$$2, fn$$2);
            break;
          }

        default:
          {
            const s = _arg1.fields[0];
            const fn = _arg1.fields[1];
            test(s, fn);
          }
      }
    }, xs);
  });
}

function Jesto$$$testFixture(fixture, xs$$1) {
  return (0, _Seq.map)(function mapping(tupledArg) {
    return new Jesto$002ETest(0, "Test", tupledArg[0], (0, _Util.partialApply)(1, fixture, [tupledArg[1]]));
  }, xs$$1);
}

function Jesto$$$testFixtureDone(fixture$$1, xs$$2) {
  return (0, _Seq.map)(function mapping$$1(tupledArg$$1) {
    return new Jesto$002ETest(1, "TestDone", tupledArg$$1[0], function (x$$10) {
      fixture$$1(tupledArg$$1[1], x$$10);
    });
  }, xs$$2);
}

function Jesto$$$testFixtureAsync(fixture$$2, xs$$3) {
  return (0, _Seq.map)(function mapping$$2(tupledArg$$2) {
    return new Jesto$002ETest(2, "TestAsync", tupledArg$$2[0], (0, _Util.partialApply)(1, fixture$$2, [tupledArg$$2[1]]));
  }, xs$$3);
}