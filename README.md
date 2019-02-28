# Once again, I forgot to do the readme when I submitted the assignment.  So, this is being done after the fact.  I will not forget again.

# Goldmember themed Crystal Collector

to start: here are the directions that GitLab outlined.

##The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

Here's how the app works:
1. There will be four crystals displayed as buttons on the page.
2. The player will be shown a random number at the start of the game.
3. When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
4. Your game will hide this amount until the player clicks a crystal.
5. When they do click one, update the player's score counter.
6. The player wins if their total score matches the random number from the beginning of the game.
7. The player loses if their score goes above the random number.
8. The game restarts whenever the player wins or loses.
9. When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
10. The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

##Crystal Collector Game design notes

1. The random number shown at the start of the game should be between 19 - 120.
2. Each crystal should have a random hidden value between 1 - 12.

I have to admit I'm not sure I saw the 1-12 design note above.  

###Notes
+ I used the number checker and lottery generator examples from class to help guide me. 
+ I'm realizing I left some old notes in my JS code because I did use number checker as a starting template.  I've been doing this pretty regularly but it's been throwing me off and just going through the exercise of typing out some of the regularly used code should help me with memorizing it.  I think going forward I'll try to start with a blank file page.
+ I ended up going styling this assignment in a Goldmember theme.  This helped me a bit with revisiting CSS a bit.  I need more practice with CSS.
+ Because I used the number checker template, I ended up using the same bootstrap components that were used there.  This was ok and allowed me to play around with adjusting bootstrap, but I am struggling with the rigidity of those components even if they're easier and faster to use.


###Things I had a little trouble with:

+ Because I used the template, that helped with using the *val* in the bootstrap button to assign the randomized values for the different gold bars, however, it did mean I needed a separate if statement to assign the button value to the randomized var value.
+ I had a bit of trouble with the realizing that I needed to nest the win and loss *if* and *else if* statements within the if logic for the 
+ a bit of trouble with the making sure I had all the instructions at the end of my *if* and *else if* statements
