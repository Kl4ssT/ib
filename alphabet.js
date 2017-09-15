class Alphabet
{
    
    constructor()
    {
        this.alphabet = [];

        for (let i = 'а'.charCodeAt(0); i <= 'я'.charCodeAt(0); ++i) {
            this.alphabet.push(String.fromCharCode(i));
        }
    }

    letterByIndex(index)
    {
        return this.alphabet[index - 1];
    }

    indexByLetter(letter)
    {
        return this.alphabet.indexOf(letter) + 1;
    }

    countLetters()
    {
        return this.alphabet.length;
    }
}

module.exports = new Alphabet();