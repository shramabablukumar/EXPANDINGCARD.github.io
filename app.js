let panels = document.querySelectorAll('.pandel');

panels.forEach(pandel=>{
    pandel.addEventListener('click',()=>{
        removeActiveClasses()
        pandel.classList.add('active');
    })

})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}



var Audio = new Audio('Ram Aayenge-(SambalpuriStar.In).mp3');

window.onload = function() {
    // Create a button for user interaction
    var playButton = document.createElement('button');
    playButton.innerText = 'India';
    document.body.appendChild(playButton);
    
    // Add event listener to play audio when button is clicked
    playButton.addEventListener('click', function() {
        Audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
        // Optional: Remove button after click
        playButton.remove();
    });
};

