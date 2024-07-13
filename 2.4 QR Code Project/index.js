/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user-entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
//inquirer used to take the commands from the user from the command line
//commands will be the url's for which the QR should be generated.
import qr from 'qr-image'
//to generate a random QR image from the given input text.
import fs from 'fs';
//fs stands for file system - used to take input and give output as files
inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url= answers.URL;
    var qr_svg = qr.image(url );
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
fs.writeFile("Messages.txt", url, (err) => {
    if(err) throw err;
    console.log("Successfully generated qr for your URL");
  });

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("couldn't be rendered in the current environment");
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log("Something else went wrong");
      // Something else went wrong    https://www.youtube.com/
    }
  });
 

  
