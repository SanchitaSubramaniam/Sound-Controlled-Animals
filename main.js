function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BaUhpUY9R/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_number").innerHTML = 'I can here - '+results[0].label;
        document.getElementById("audio_detected").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_number").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("audio_detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("listen");

        if (results[0].label == "Meowing") {
            img.src = "Cat.jpg";
        } else if (results[0].label == "Barking") {
            img.src = "Dog.jpg";
        } else if (results[0].label == "Roar") {
            img.src = "Lion.jpg";
        } else {
            img.src = "Room.jpg";
        }
    }
}