// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}\n

  ## Table of Contents
  - Installation
  - Usage
  - Licence
  - Contributing
  - Tests
  - Questions\n

  ## Installation
  ${data.installation}\n

  ## Usage
  ${data.usage}\n

  ## License
  This project is licenced under the ${data.licence} licence.\n

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions or comments, I may be contacted at [GitHub](https://github.com/${data.github}), or by [email](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
