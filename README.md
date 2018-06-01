# week0.day4.MASH

## Instructions
1. Create a Repo on GitHub named “MASH”
   - Remember to initialize it with a "README.md"
2. In command line, navigate to your “Documents” Folder:
   - Clone the repo to your computer using `git clone {url}`
   - Navigate into the repo
3. Have you ever played M.A.S.H.? The a classic school game where randomness is used to predict your future. 
4. Today, you’ll be creating the code for MASH and have other students play your game.
5. In command line, create a file called "mash.js"
6. *Note: This task is broken down into MVP steps (we’ll learn more about this next week). Essentially, we’ll get a small working version first and then progressively build more complex features until we’re done.*
7. Version 1:
   - Create a function called `mash` that takes no parameters and returns the string “house”
   - At the bottom of the script, `console.log()` the result from calling `mash()`
   - Run the script on the command line using `node mash.js` - you should see “house” displayed. This is a working result (even if it’s not working with randomness)!
8. Version 2 (continue using the same script):
   - Create a function called `getHome` which takes no arguments and returns one of the following strings randomly: Mansion, Apartment, Shack, House
   - *Tip: try using an array*
   - *NOTE: since you’ve worked with a randomizing function before, it might be a good idea to use it here! Try defining a randomizing function separately and calling it inside of `getHome`*
   - Instead of returning “house”, have the `mash` function return the result of calling the `getHome` function
   - Run the script on the command line using `node mash.js` to test that it’s working properly.
   - *NOTE: You’ll have to try a few times to see if it’s giving different random results*
9. Version 3:
   - Create a function called `getChildrenCount` which takes no arguments and returns a random number between 0 and 100.
   - Modify the `mash` function to return a string in the following format (mind the double quotes):
   - `"You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!"`
   - Run the script on the command line with user arguments to test that it’s working properly.
10. Version 4:
   - We’ll begin taking user input and including it in our code.
   - Modify the `getHome` function to include the first user argument as one of the options for homes (recall how `process.argv` works). This way, the user has a chance of living where they want!
   - Go ahead an add one more possible place to live that the user definitely would NOT want to live!
   - Modify the `getChildrenCount` function to have a 50/50 chance of returning a random number between 0 and 100 OR the 2nd user argument
   - Create a function called `getCar`, which returns a random string of a kind of vehicle, such as “lambo”, ”convertible”, ”box with wheels”, etc. Feel free to add your own!
   - Include the user’s 3rd argument as a possible outcome.
   - Modify the `mash` function to include a call to `getCar`. The return string to be the same as before, but with `", and you’ll drive a " + getCar()` at the end.
   - Run the script on the command line with user arguments to test that it’s working properly.
11. Version 5:
   - Try running the script without any user arguments
   - Are you seeing `undefined`? Why is this happening?
   - For each instance where we require user input (there are 3), right before using the users input include a conditional statement to ensure the user input exists first!
   - This will prevent errors when the user runs the code without providing argument
   - Run the script on the command line with and without user arguments to test that it’s working properly.
12. Version 6 (final version):
   - Add your own custom categories for your MASH game.
   - Be sure to include your custom outcomes in the string output from the `mash` function
   - Some ideas:
     - Name of spouse
     - Salary (include negative numbers)
     - How old will user live until
     - Career

## Extra Credit
- If the user gets a specific outcome of home, number of children, car, etc. `console.log()` a unique message.
   - For example: if the user gets “Mansion”, “lambo”, and 0 children : `console.log("You're living the good life!")`

## Helpful Resources
- How to play MASH:
   - A player is asked about certain future outcomes, like what kind of car they’ll have, how much money they’ll make, or how many children they’ll have. After a little random picking (usually with a random and a process of elimination) the player’s future is determined! 
- [Collabedit](http://collabedit.com/)
