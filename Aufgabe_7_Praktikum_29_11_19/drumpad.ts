
    //Kick

    window.addEventListener("load", function() {

        document.querySelector("#button1").addEventListener("mousedown", playSample)


    

    function playSample () {
        var sound:HTMLAudioElement = new Audio("assets/kick.mp3");
        sound.play();

    



    }})

    //Snare

    window.addEventListener("load", function() {

        document.querySelector("#button2").addEventListener("mousedown", playSample)


    

    function playSample () {
        var sound:HTMLAudioElement = new Audio("assets/snare.mp3");
        sound.play();


    }})

    //High-Hat

    window.addEventListener("load", function() {

        document.querySelector("#button3").addEventListener("mousedown", playSample)


    

    function playSample () {
        var sound:HTMLAudioElement = new Audio("assets/hihat.mp3");
        sound.play();


    }})

     //Tone F

     window.addEventListener("load", function() {

        document.querySelector("#button4").addEventListener("mousedown", playSample)


    

    function playSample () {
        var sound:HTMLAudioElement = new Audio("assets/F.mp3");
        sound.play();


    }})


 //Tone G

 window.addEventListener("load", function() {

    document.querySelector("#button5").addEventListener("mousedown", playSample)




function playSample () {
    var sound:HTMLAudioElement = new Audio("assets/G.mp3");
    sound.play();


}})

 //Tone A

 window.addEventListener("load", function() {

    document.querySelector("#button6").addEventListener("mousedown", playSample)




function playSample () {
    var sound:HTMLAudioElement = new Audio("assets/A.mp3");
    sound.play();


}})

//Tone C

window.addEventListener("load", function() {

    document.querySelector("#button7").addEventListener("mousedown", playSample)




function playSample () {
    var sound:HTMLAudioElement = new Audio("assets/C.mp3");
    sound.play();


}})

//Laugh, well actually its Chewbacca

window.addEventListener("load", function() {

    document.querySelector("#button8").addEventListener("mousedown", playSample)




function playSample () {
    var sound:HTMLAudioElement = new Audio("assets/Chewbacca_Sound_6.mp3");
    sound.play();


}})

//Laugh, well not even close bby

window.addEventListener("load", function() {

    document.querySelector("#button9").addEventListener("mousedown", playSample)




function playSample () {
    var sound:HTMLAudioElement = new Audio("assets/not_even_close.mp3");
    sound.play();




}})


//Play that stuff

window.addEventListener("load", function(Beat) {

    document.querySelector("#playb").addEventListener("click", StartBeat)






} )

function StartBeat() {
    var inter = setInterval(Beat,300)
    var myBeatyo= ["assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/not_even_close.mp3"]
    var index = 0;
function Beat () {
    var MyMelody:HTMLAudioElement = new Audio (myBeatyo [index]);
    MyMelody.play();
    index+=1;
    if (index>11) index=0;
    console.log(myBeatyo [index]);

}

}
