const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./readme-template.js');


const promptUser = () => {
     return inquirer.prompt([
          {
               type: 'input',
               name: 'title',
               message: 'What is your project title?',
               validate: titleInput => {
                    if (titleInput) {
                         return true;
                    } else {
                         console.log('Please enter the title');
                         return false;
                    }
               }
          },
          {
               type: 'input',
               name: 'description',
               message: 'Enter a project description',
               validate: descriptionInput => {
                    if (descriptionInput) {
                         return true;
                    } else {
                         console.log('Please enter your description');
                         return false;
                    }
               }
          },
          {
               type: 'input',
               name: 'installation',
               message: 'Enter installation instructions',
               validate: installationInput => {
                    if (installationInput) {
                         return true;
                    } else {
                         console.log('Please enter your installation info');
                         return false;
                    }
               }
          },
          {
               type: 'input',
               name: 'usage',
               message: 'Enter usage information',
               validate: usageInput => {
                    if (usageInput) {
                         return true;
                    } else {
                         console.log('Please enter your usage info');
                         return false;
                    }
               }
          },
          {
               type: 'input',
               name: 'contribution',
               message: 'Enter contribution guidelines',
               validate: contributionInput => {
                    if (contributionInput) {
                         return true;
                    } else {
                         console.log('Please enter your contribution info');
                         return false;
                    }
               }
          },
          {
               type: 'input',
               name: 'test',
               message: 'Enter test instructions',
               validate: testInput => {
                    if (testInput) {
                         return true;
                    } else {
                         console.log('Please enter your test info');
                         return false;
                    }
               }
          },
          {
               type: 'checkbox',
               name: 'license',
               message: 'Would you like a license listed?',
               choices: ['Apache', 'ISC', 'MIT']
          },
          {
               type: 'input',
               name: 'email',
               message: 'Enter your email address',
               validate: emailInput => {
                    if (emailInput) {
                         return true;
                    } else {
                         console.log('Please enter your email');
                         return false;
                    }
               }
          },
          {
               type: 'input',
               name: 'github',
               message: 'Enter your github username',
               validate: githubInput => {
                    if (githubInput) {
                         return true;
                    } else {
                         console.log('Please enter your github info');
                         return false;
                    }
               }
          },
     ]);
};


async function start() {
     try {
          const data = await promptUser();
          console.log(data);
          console.log(data.github);
          makePage(data);



     }
     catch (err) {
          console.log(err);
     }
};

function makePage(data) {
     fs.writeFile('generated-README.md', generatePage(data), err => {
          if (err) throw err;

          console.log('Your readme has been generated!');
     });
};

start();
