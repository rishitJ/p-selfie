function speak()
{
    var synth = window.speechSynthesis
    speakData = "Taking selfie in 5 second, please give a nice pose"
    var utterthis = new SpeechSynthesisUtterance(speakData)
    synth.speak(utterthis)

    setTimeout(function(data_uri){
        take_snapshot()
        save()
        },5000);
}

function take_snapshot
{
    Webcam.snap(function(data_uri){
        console.log(data_uri)
    document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='img_1'>"
    })
}