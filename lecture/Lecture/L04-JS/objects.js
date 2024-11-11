document.write('<p>Check the console for custom objects evaluation</p>');

//single object definition
var obj = new Object();
obj.prop1 = 7;
obj.prop2 = "8";
console.info(obj.prop1 * obj.prop2);

//class of objects definition
/* ECMA 5 style */
function NumberHolder(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
    this.mulProps = function () {
        return this.prop1 * this.prop2;
    }
}

NumberHolder.prototype.addProps = function () {
    return Number(this.prop1) + Number(this.prop2);
}

var obj2 = new NumberHolder(7, "8");
console.info(obj2.prop1 * obj2.prop2);
console.info(obj2.mulProps());
console.info(obj2.addProps());

/* ECMA 6 style */
class NumberHolder6 {
    constructor (prop1, prop2) {
        this._prop1 = prop1;
        this._prop2 = prop2;
    }

	set prop1  (prop1)  { this._prop1 = prop1;               }
    get prop1  ()       { return this._prop1;                }
	set prop2  (prop2)  { this._prop2 = prop2;               }
    get prop2  ()       { return this._prop2;                }
    get mulProps   ()       { return this._prop1 * this._prop2; }
}

class ExtendedNumberHolder6 extends NumberHolder6 {
    constructor (prop1, prop2) {
        super(prop1, prop2);
    }
		get addProps   ()       { return Number(this._prop1) + Number(this._prop2); }

}

var obj3 = new NumberHolder6(7, "8");
console.info(obj3.prop1 * obj3.prop2);
console.info(obj3.mulProps);

var obj4 = new ExtendedNumberHolder6(obj3.prop1,obj3.prop2);
console.info(obj4.prop1 * obj4.prop2);
console.info(obj4.mulProps);
console.info(obj4.addProps);

