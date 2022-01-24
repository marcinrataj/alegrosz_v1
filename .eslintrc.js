
module.exports = {
    "env": {
        "browser": true,                    //<- będziemy używać rzeczy wbudowanych do przeglądarki
        "es2021": true                      //<- ustawiony najnowszy JS jaki istnieje
    },
    "extends": [                            //<- rozszerzenie naszego lintera
        "airbnb",                           //<- standardy
        "eslint:recommended",               //<- po prostu jest
        "plugin:react/recommended",         //<- dodatkowy 'stalgate' do komponentów reactowych
        "prettier",                         //<- jeżeli go używamy musi być zawsze ostatni
    ],
    // "presets": [                            //<- mamy też presety ustawione
    //     "@babel/preset-react",              //<- połączenie z babel, konwertuje kod na inne wersje
    //     "@babel/preset-env"                 //<- dodatkowy babel podpięty
    // ],
    "parserOptions": {                      //<- mamy dodatkowe opcje, które mamy zrobione
        "ecmaFeatures": {                   //<- dodatkowe opcje do JavaScriptu
            "jsx": true                     //<- żeby to działało musi być na true
        },
        "ecmaVersion": "latest",            //<- chcemy używać najnowocześniejszych rzeczy jakie są
        "sourceType": "module"              //<- mamy podzielone wszystko na pliki
    },
    "plugins": [
        "react"                             //<- plugin do react
    ],
    "rules": {                              //<- dodatkowe rules
    }
}