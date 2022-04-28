"use strict";
/// <reference path="form-namespace.ts" />
var Form;
(function (Form) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state,
            };
        }
    }
    Form.myForm = new MyForm('d.a@gmail.com');
})(Form || (Form = {}));
console.log(Form.myForm);
