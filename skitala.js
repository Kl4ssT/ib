class Skitala
{

    constructor(string, size)
    {
        this.string = string.split('');
        this.size = size;
    }

    encrypt()
    {
        const result = [];
        const arr = [];

        for(let i = 0; i < this.size[1]; i++) {
            const row = [];
            for(let j = 0; j < this.size[0]; j++) {
                if (this.string.length == 0) {
                    row.push('*');
                }
                else {
                    row.push(this.string.splice(0, 1)[0]);
                }
            }

            arr.push(row);
        }

        console.log(arr);

        for(let i = 0; i < this.size[1]; i++) {
            for(let j = 0; j < this.size[0]; j++) {
                result.push(arr[j][i]);
            }
        }

        return result.join('');
    }

    decrypt()
    {
        return this.deleteStars(this.encrypt());
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