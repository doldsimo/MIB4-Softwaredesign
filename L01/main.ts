namespace L01_Worteverdreher {
	let eingabeSatz: string;
	eingabeSatz = prompt("Gebe einen Satz ein.");
	sentenceWR(eingabeSatz);
	sentenceSR(eingabeSatz);
	sentenceAR(eingabeSatz);
	
	function sentenceWR(_eingabeSatz: string): void {
		console.log(reverseWords(reverseSentence(_eingabeSatz)));
	}

	function sentenceSR(_eingabeSatz: string): void {
		console.log(reverseWords(_eingabeSatz));
	}

	function sentenceAR(_eingabeSatz: string): void {
		console.log(reverseSentence(_eingabeSatz));
	}
	
	function reverseSentence(_eingabeSatz: string): string {
		let zeichen: string[];
		let rev_zeichen: string = "";

		zeichen = _eingabeSatz.split("");

		for (let i: number = 1; i <= zeichen.length; i++) {
			rev_zeichen += zeichen[zeichen.length - i];
		}

		return rev_zeichen;
	}
	
	function reverseWords(_eingabeSatz: string): string {
		let woerter: string[];
		let rev_woerter: string = "";

		woerter = _eingabeSatz.split(" ");

		for (let i: number = 1; i <= woerter.length; i++) {
			rev_woerter += woerter[woerter.length - i] + " ";
		}

		return rev_woerter;
	}
}
