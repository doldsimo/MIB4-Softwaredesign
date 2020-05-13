namespace L01_Worteverdreher {
	// Z: 3 -> Variable in camelCase
	let eingabe_satz: string;
	// Z: 4 -> Doppelte Anfuehurngszeichen
	eingabe_satz = prompt('Gebe einen Satz ein.');
	sentence_wr(eingabe_satz);
	sentence_sr(eingabe_satz);
	sentence_ar(eingabe_satz);
	// Z: 10-18 -> Funktionen in camelCase schreiben und uebergebene Parameter mit underscore am Anfang (z.B: _name)
	function sentence_wr(eingabe_satz: string): void {
		console.log(reverseWords(reverseSentence(eingabe_satz)));
	}

	function sentence_sr(eingabe_satz: string): void {
		console.log(reverseWords(eingabe_satz));
	}

	function sentence_ar(eingabe_satz: string): void {
		console.log(reverseSentence(eingabe_satz));
	}
	// Z: 22 -> Uebergebene Parameter mit underscore am Anfang (z.B: _name)
	function reverseSentence(eingabe_satz: string): string {
		let zeichen: string[];
		// Z:25-27 -> Doppelte Anfuehrungszeichen
		let rev_zeichen: string = '';

		zeichen = eingabe_satz.split('');

		for (let i: number = 1; i <= zeichen.length; i++) {
			rev_zeichen += zeichen[zeichen.length - i];
		}

		return rev_zeichen;
	}
	// Z: 36 -> Uebergebene Parameter mit underscore am Anfang (z.B: _name)
	function reverseWords(eingabe_satz: string): string {
		let woerter: string[];
		// Z:39-41 -> Doppelte Anfuehrungszeichen
		let rev_woerter: string = '';

		woerter = eingabe_satz.split(' ');

		for (let i: number = 1; i <= woerter.length; i++) {
			// Z:45 -> Doppelte Anfuehrungszeichen
			rev_woerter += woerter[woerter.length - i] + ' ';
		}

		return rev_woerter;
	}
}
