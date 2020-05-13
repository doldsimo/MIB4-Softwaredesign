namespace L03_Zufallsgedicht {
	let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
	let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
	let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
	let verses: string[] = [];
	// Z: 7 -> Variablen sollten camelCase sein
	let subject_length: number = subjects.length;

	for (let i: number = 0; i < subject_length; i++) {
		getVers();
	}

	for (let vers in verses) {
		console.log(verses[vers]);
	}

	function getVers(): void {
		// Z: 19-28 -> Variablen sollten camelCase sein
		let random_subject_number: number = Math.floor(Math.random() * subject_length);
		let random_subject: string = subjects[random_subject_number];
		subjects.splice(random_subject_number, 1);

		let random_verb_number: number = Math.floor(Math.random() * verbs.length);
		let random_verb: string = verbs[random_verb_number];
		verbs.splice(random_verb_number, 1);

		let random_object_number: number = Math.floor(Math.random() * objects.length);
		let random_object: string = objects[random_object_number];
		objects.splice(random_object_number, 1);
		// Z: 30 -> Es sollten doppelte Anfuehrungszeichen genutzt werden
		let verse: string = random_subject + ' ' + random_verb + ' ' + random_object;

		verses.push(verse);
	}
}
