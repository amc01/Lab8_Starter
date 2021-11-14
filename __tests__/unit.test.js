// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('isPhoneNumber(phoneNumber)', () => {
    let number1 = "11234567899";
    expect(functions.isPhoneNumber(number1)).toBe(true);
    let number2 = "15242357849";
    expect(functions.isPhoneNumber(number2)).toBe(true);
    let number3 = "12345678991234";
    expect(functions.isPhoneNumber(number3)).toBe(false);
    let number4 = "123499";
    expect(functions.isPhoneNumber(number4)).toBe(false);
});

test('isEmail(email)', () => {
    let email1 = "and@gmail.com";
    expect(functions.isEmail(email1)).toBe(true);
    let email2 = "asfgjg@yahoo.com";
    expect(functions.isEmail(email2)).toBe(true);
    let email3 = "andgmail.com";
    expect(functions.isEmail(email3)).toBe(false);
    let email4 = "and@aol";
    expect(functions.isEmail(email4)).toBe(false);
});

test('isStrongPassword(password)', () => {
    let pass1 = "Avjdss3"
    expect(functions.isStrongPassword(pass1)).toBe(true);
    let pass2 = "Enfnsd_32"
    expect(functions.isStrongPassword(pass2)).toBe(true);
    let pass3 = "Avj#$s3"
    expect(functions.isStrongPassword(pass3)).toBe(false);
    let pass4 = "vjjaiugbwiuenfiuasfdss3"
    expect(functions.isStrongPassword(pass4)).toBe(false);
});

test('isDate(date)', () => {
    let date1 = "01 / 11 / 2001";
    expect(functions.isDate(date1)).toBe(true);
    let date2 = "12 / 21 / 1934";
    expect(functions.isDate(date2)).toBe(true);
    let date3 = "012 / 11 / 201";
    expect(functions.isDate(date3)).toBe(false);
    let date4 = "01 /  / 20031";
    expect(functions.isDate(date4)).toBe(false);
});

test('isHexColor(color)', () => {
    let hex1 = "#C4462B";
    expect(functions.isHexColor(hex1)).toBe(true);
    let hex2 = "#fc9";
    expect(functions.isHexColor(hex2)).toBe(true);
    let hex3 = "#C44f462B";
    expect(functions.isHexColor(hex3)).toBe(false);
    let hex4 = "#f9";
    expect(functions.isHexColor(hex4)).toBe(false);
});