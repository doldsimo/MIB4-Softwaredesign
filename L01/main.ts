namespace L01_Worteverdreher {
	let eingabe_satz: string;
	eingabe_satz = prompt('Gebe einen Satz ein.');
	sentence_wr(eingabe_satz);
	sentence_sr(eingabe_satz);
	sentence_ar(eingabe_satz);

	function sentence_wr(eingabe_satz: string): void {
		console.log(reverseWords(reverseSentence(eingabe_satz)));
	}

	function sentence_sr(eingabe_satz: string): void {
		console.log(reverseWords(eingabe_satz));
	}

	function sentence_ar(eingabe_satz: string): void {
		console.log(reverseSentence(eingabe_satz));
	}

	function reverseSentence(eingabe_satz: string): string {
		let zeichen: string[];
		let rev_zeichen: string = '';

		zeichen = eingabe_satz.split('');

		for (let i: number = 1; i <= zeichen.length; i++) {
			rev_zeichen += zeichen[zeichen.length - i];
		}

		return rev_zeichen;
	}

	function reverseWords(eingabe_satz: string): string {
		let woerter: string[];
		let rev_woerter: string = '';

		woerter = eingabe_satz.split(' ');

		for (let i: number = 1; i <= woerter.length; i++) {
			rev_woerter += woerter[woerter.length - i] + ' ';
		}

		return rev_woerter;
	}
}