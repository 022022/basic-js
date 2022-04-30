const { NotImplementedError } = require("../extensions/index.js");

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
  machineType = "";
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(directMachine = true) {
    if (directMachine) {
      this.machineType = "direct";
    } else {
      this.machineType = "reverse";
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();

    key = key.toUpperCase();
    while (key.length < message.length) {
      key = key + key;
    }

    let result = "";
    let indexInKey = 0;

    for (let i = 0; result.length < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let row = this.alphabet.indexOf(key[indexInKey]);
        let shiftedAlphabet =
          this.alphabet.slice(row) + this.alphabet.slice(0, row);
        result = result + shiftedAlphabet[this.alphabet.indexOf(message[i])];

        indexInKey++;
      } else {
        result = result + message[i];
      }
    }

    if (this.machineType === "reverse") {
      result = result.split("").reverse().join("");
    }

    return result;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();

    key = key.toUpperCase();
    while (key.length < encryptedMessage.length) {
      key = key + key;
    }

    let result = "";
    let indexInKey = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.alphabet.includes(encryptedMessage[i])) {
        let shift = this.alphabet.indexOf(key[indexInKey]);
        let shiftedAlphabet =
          this.alphabet.slice(shift) + this.alphabet.slice(0, shift);
        let decryptedIndex = shiftedAlphabet.indexOf(encryptedMessage[i]);
        result = result + this.alphabet[decryptedIndex];

        indexInKey++;
      } else {
        result = result + encryptedMessage[i];
      }
    }

    if (this.machineType === "reverse") {
      result = result.split("").reverse().join("");
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
