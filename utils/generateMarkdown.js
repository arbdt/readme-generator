// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ![license](./assets/badge-${data.licence}.png)
  ${data.description}

  ## Table of Contents
  - Installation
  - Usage
  - Licence
  - Contributing
  - Tests
  - Questions

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licenced under the ${data.licence} licence.

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions or comments, I may be contacted at [GitHub](https://github.com/${data.github}), or by [email](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
