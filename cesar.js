const Alphabet = require('./alphabet');

class Cesar
{
    constructor(string, key)
    {
        this.string = string;
        this.key = key;
    }

    encrypt()
    {
        const result = [];
        const shift = this.key - Alphabet.countLetters() * Math.floor(this.key / Alphabet.countLetters());

        this.string.split('').forEach(letter => {
            if(Alphabet.indexByLetter(letter) != 0) {
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
        const shift = -this.key + Alphabet.countLetters() * Math.floor(this.key / Alphabet.countLetters());

        this.string.split('').forEach(letter => {
            if(Alphabet.indexByLetter(letter) != 0) {
                if (Alphabet.indexByLetter(letter) + shift <= 0) {
                    result.push(Alphabet.letterByIndex(Alphabet.indexByLetter(letter) + shift + Alphabet.countLetters()));
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
}

module.exports = Cesar;