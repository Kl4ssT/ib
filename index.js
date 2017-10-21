const readline = require('readline');

const Cesar = require('./cesar');
const Vizhener = require('./vizhener');
const Skitala = require('./skitala');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Выберите тип шифрования (1 - Цезаря, 2 - Виженера, 3 - Скитала) ', input => {
    switch (input) {
        case '1' :
            cesarStep();
            break;
        case '2' :
            vizhenerStep();
            break;
        case '3' :
            skitalaStep();
            break;
        default :
            throw new Error('Неверный формат');
    }
});

const cesarStep = () => {
    rl.question('Введите строку: ', string => {
        rl.question('Введите ключ: ', key => {
            const cesar = new Cesar(string, key);
            run(cesar);
        });
    })
};

const vizhenerStep = () => {
    rl.question('Введите строку: ', string => {
        rl.question('Введите ключ: ', key => {
            const vizhener = new Vizhener(string, key);
            run(vizhener);
        });
    })
};

const skitalaStep = () => {
    rl.question('Введите строку: ', string => {
        rl.question('Введите ключ: ', key => {
            const skitala = new Skitala(string, Number(key));
            run(skitala);
        });
    })
};

const run = (method) => {
    rl.question('1 - шифровать, 2 - дешифровать: ', type => {
        switch (type) {
            case '1' :
                console.log(method.encrypt());
                break;
            case '2' :
                console.log(method.decrypt());
                break;
            default :
                throw new Error('Неверный формат')
        };

        rl.close();
    });
}