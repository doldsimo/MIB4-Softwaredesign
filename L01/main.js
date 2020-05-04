"use strict";
var L01_Worteverdreher;
(function (L01_Worteverdreher) {
    let eingabe_satz;
    eingabe_satz = prompt('Gebe einen Satz ein.');
    sentence_wr(eingabe_satz);
    sentence_sr(eingabe_satz);
    sentence_ar(eingabe_satz);
    function sentence_wr(eingabe_satz) {
        console.log(reverseWords(reverseSentence(eingabe_satz)));
    }
    function sentence_sr(eingabe_satz) {
        console.log(reverseWords(eingabe_satz));
    }
    function sentence_ar(eingabe_satz) {
        console.log(reverseSentence(eingabe_satz));
    }
    function reverseSentence(eingabe_satz) {
        let zeichen;
        let rev_zeichen = '';
        zeichen = eingabe_satz.split('');
        for (let i = 1; i <= zeichen.length; i++) {
            rev_zeichen += zeichen[zeichen.length - i];
        }
        return rev_zeichen;
    }
    function reverseWords(eingabe_satz) {
        let woerter;
        let rev_woerter = '';
        woerter = eingabe_satz.split(' ');
        for (let i = 1; i <= woerter.length; i++) {
            rev_woerter += woerter[woerter.length - i] + ' ';
        }
        return rev_woerter;
    }
})(L01_Worteverdreher || (L01_Worteverdreher = {}));
//# sourceMappingURL=main.js.map