const { NotImplementedError } = require("../extensions/index.js");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let position = 0;

    for (let i = 0; i < text.length; i++) {
      const symbol = text[i];
      if (alphabet.includes(symbol)) {
        const textIndex = alphabet.indexOf(symbol);
        const keySymbol = key[position % key.length];
        const distance = alphabet.indexOf(keySymbol);
        const encryptedSymbol = alphabet[(textIndex + distance) % 26];
        result += encryptedSymbol;
        position++;
      } else {
        // spaces, commas, dots, numbers, etc.
        result += symbol;
      }
    }

    if (!this.direct) {
      return result.split("").reverse().join("");
    }

    return result;
  }

  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let position = 0;

    for (let i = 0; i < text.length; i++) {
      const symbol = text[i];
      if (alphabet.includes(symbol)) {
        const textIndex = alphabet.indexOf(symbol);
        const keySymbol = key[position % key.length];
        const distance = alphabet.indexOf(keySymbol);
        const decryptedSymbol = alphabet[(textIndex - distance + 26) % 26];
        result += decryptedSymbol;
        position++;
      } else {
        // spaces, commas, dots, numbers, etc.
        result += symbol;
      }
    }

    if (!this.direct) {
      return result.split("").reverse().join("");
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
