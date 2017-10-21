const emptyValue = '*';
const space = ' ';
const underLine = '_';

class Skitala
{

    constructor(string, size)
    {
        this.string = string.split('');
        this.size = [size, Math.trunc((this.string.length - 1)/size) + 1];
    }

    encrypt()
    {
        const matrix = [];
        for(let i = 0; i < this.size[0]; i++) {
            const row = [];
            for(let j = 0; j < this.size[1]; j++) {
                if(this.string.length == 0)
                    row.push(emptyValue);
                else
                    row.push(this.string.shift());
            }
            matrix.push(row);
        }

        let result = '';
        for(let i = 0; i < this.size[1]; i++) {
            for(let j = 0; j < this.size[0]; j++) {
                result += matrix[j][i];
            }
        }

        return result;
    }

    decrypt()
    {
        const matrix = [];
        for(let i = 0; i < this.size[1]; i++) {
            const row = [];
            for(let j = 0; j < this.size[0]; j++) {
                row.push(this.string.shift());
            }
            matrix.push(row);
        }

        console.log(matrix);

        let result = '';
        for(let i = 0; i < this.size[0]; i++) {
            for(let j = 0; j < this.size[1]; j++) {
                result += matrix[j][i];
            }
        }

        return this.deleteStars(result);
    }

    deleteStars(string)
    {
        let result = '';

        string.split('').forEach(letter => {
            if (letter != '*')
                result += letter;
        });

        return result;
    }

}

module.exports = Skitala;