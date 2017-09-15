const Alphabet = require('./alphabet');

class Vizhener
{
    constructor(string, key)
    {
        this.string = string;
        this.key = key;
    }

    encrypt()
    {
        const result = [];

        this.string.split('').forEach((letter, index) => {
            const shift = Alphabet.indexByLetter(this.key.split('')[index % this.key.split('').length]);
            if(Alphabet.indexByLetter(letter) != 0 || shift != 0) {
                if (Alphabet.indexByLetter(letter) + shift > Alphabet.countLetters()) {
                    result.push(Alphabet.letterByIndex(Alphabet.indexByLetter(letter) + shift - Alphabet.countLetters()));
                }
                else {
                    result.push(Alphabet.letterByIndex(Alphabet.indexByLetter(letter) + shift));
                }
            }
            else {
                result.push(letter);
            }
        });

        return result.join('');
    }

    decrypt()
    {
        const result = [];

        this.string.split('').forEach((letter, index) => {
            const shift = Alphabet.indexByLetter(this.key.split('')[index % this.key.split('').length]);
            if(Alphabet.indexByLetter(letter) != 0 || shift != 0) {
                if (Alphabet.indexByLetter(letter) - shift <= 0) {
                    result.push(Alphabet.letterByIndex(Alphabet.indexByLetter(letter) - shift + Alphabet.countLetters()));
                }
                else {
                    result.push(Alphabet.letterByIndex(Alphabet.indexByLetter(letter) - shift));
                }
            }
            else {
                result.push(letter);
            }
        });

        return result.join('');
    }
}

module.exports = Vizhener;