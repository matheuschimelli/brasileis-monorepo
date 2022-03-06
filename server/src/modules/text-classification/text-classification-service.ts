import natural, { BayesClassifier } from 'natural';

export const train = () => {
    const classifier = new BayesClassifier();

    classifier.addDocument('buy our limited offer', 'spam');
    classifier.addDocument('grow your audience with us', 'spam');
    classifier.addDocument('our company provides a great deal', 'spam');
    classifier.addDocument('I like to read books and watch movies', 'regular');
    classifier.addDocument('My friend likes to walk near the mall', 'regular');
    classifier.addDocument('Pizza was awesome yesterday', 'regular');

    classifier.train();
    // classifier.save('classifier.json', function (err, classifier) {
    //     // the classifier is saved to the classifier.json file!
    //     console.log("saved")
    //     console.log(classifier)
    // });
    console.log(classifier.classify('we would like to propose our offer')); // spam
    console.log(classifier.classify('I\'m feeling tired and want to watch something'));

    var raw = JSON.stringify(classifier);
    // deserialize
    //var restoredClassifier = natural.BayesClassifier.restore(JSON.parse(raw));

    return raw

}