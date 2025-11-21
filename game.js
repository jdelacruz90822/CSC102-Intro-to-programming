// this function will open up a new web page
function openNewTab() {
      window.open("Game.HTML", "_blank");
    }

// this will create a small countdown loop to lead to the small mini game for sudden death of war!!
function forLoopFunc()
{
    // this is the variable for the loop countdown
    var i;
    // math equation that creates the countdown for the loop
    for(i=1; i < 5;i++)
    {
        // this is the pop up that populates after clicking the button
        alert ("The coundown starts now!" + i)
    }    
}