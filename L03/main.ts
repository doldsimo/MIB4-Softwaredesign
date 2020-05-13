namespace L03_Zufallsgedicht {
	let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
	let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
	let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
	let verses: string[] = [];
	let subjectLength: number = subjects.length;

	for (let i: number = 0; i < subjectLength; i++) {
		getVers();
	}

	for (let vers in verses) {
		console.log(verses[vers]);
	}

	function getVers(): void {
		let randomSubjectNumber: number = Math.floor(Math.random() * subjectLength);
		let randomSubject: string = subjects[randomSubjectNumber];
		subjects.splice(randomSubjectNumber, 1);

		let randomVerbNumber: number = Math.floor(Math.random() * verbs.length);
		let randomVerb: string = verbs[randomVerbNumber];
		verbs.splice(randomVerbNumber, 1);

		let randomObjectNumber: number = Math.floor(Math.random() * objects.length);
		let randomObject: string = objects[randomObjectNumber];
		objects.splice(randomObjectNumber, 1);
		let verse: string = randomSubject + ' ' + randomVerb + ' ' + randomObject;

		verses.push(verse);
	}
}
