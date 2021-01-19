# prophecy-game
 
I wanted to explore how our everyday interactions with objects and the environment in real life could be translated to playing on screen games. 
 ##### Some interactions that I explored were - 
        - Flipping pages
        - Blowing air from the mouth 
        - Hand gestures 

The objective of the game is to find your prophecy for the day. A prophecy is generated when one dies in the game. 
The further ahead you get in the game, the more positive your prophecy will be. 
I experimented these with a Flappy-bird kind of game that I built using p5.js, connected to arduino nano. But instead of the bird you control the prophecy ball.
[video](https://user-images.githubusercontent.com/12654691/105076796-8da63000-5a59-11eb-81a0-80c48eca6c8b.mp4) 
### The Game
You die either by crashing into one of the poles or being burnt by fire
 ##### The game is divided into three scenes 
        1. The intro narration
            This scene is the general introduction-book on how to navigate the game. To get to the next page of the book, 
            the user flips their hand, similar to turning over a pages of a book. 
            I used the in-built accelerometer of the arduino nano to create this interaction. 
          
        2. The standard flappy bird pole scene.
            Here is where the game begins. To ball is controlled using hand gestures.(Up and down).
            This interaction is again controlled by the in-built accelerometer
          
        3. The fire scene 
           The fire is navigated by blowing into the glove. 
           This interaction is again controlled by the microphone connected to the arduino.
           
   
