"use strict";
var L03_Zufallsgedicht;
(function (L03_Zufallsgedicht) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
    let verses = [];
    let subject_length = subjects.length;
    for (let i = 0; i < subject_length; i++) {
        getVers();
    }
    for (let vers in verses) {
        console.log(verses[vers]);
    }
    function getVers() {
        let random_subject_number = Math.floor(Math.random() * subject_length);
        let random_subject = subjects[random_subject_number];
        subjects.splice(random_subject_number, 1);
        let random_verb_number = Math.floor(Math.random() * verbs.length);
        let random_verb = verbs[random_verb_number];
        verbs.splice(random_verb_number, 1);
        let random_object_number = Math.floor(Math.random() * objects.length);
        let random_object = objects[random_object_number];
        objects.splice(random_object_number, 1);
        let verse = random_subject + ' ' + random_verb + ' ' + random_object;
        verses.push(verse);
        // console.log(verses);
    }
})(L03_Zufallsgedicht || (L03_Zufallsgedicht = {}));
//# sourceMappingURL=main.js.map