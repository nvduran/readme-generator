const generatePage = (data) => {
     return `
# ${data.title}

[![License](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)]

##Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Testing](#Testing)
* [Questions](#Questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contribution}

## Testing
${data.test}

## Questions
Github.com/${data.github}
${data.email}
`;
};

module.exports = generatePage