// TODO:
const renderLicenseBadge = (data) => {
  let apple = "";
  switch (data) {
  case 'MIT':
    apple = `(https://img.shields.io/badge/License-MIT-yellow.svg)`;
    break;
  case 'GPLv3':
    apple = `(https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    break;
  case 'GPL':
    apple = `(https://img.shields.io/badge/License-GPL-blue.svg)`
    break;
  case'Apache 2.0':
    apple = `(https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    break;
  case 'Boost':
    apple = `(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
    break;
  case 'Perl':
    apple = `(https://img.shields.io/badge/License-Perl-0298c3.svg)]`;
    break;
  case '':
    apple =  ""
    break;
  }
  return apple;
};

// TODO:
const renderCopyrightString = (data) => {
  const currentYear = new Date().getFullYear();
return `Copyright (c) ${currentYear} ${data.authors}`};

// TODO: Create a function to generate markdown for README
const generateMarkdown = function(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let licenseSection = renderLicenseSection(data.license);
  let copyrightString = renderCopyrightString(data);
  return `
  # ${data.title}
  ## Authors
  ${data.authors}
  ## Description
  ${data.description}
  ## License
  ${licenseBadge}
  ${licenseLink}
  ${copyrightString}
  ${licenseSection}
  ## Installation
  ${data.installation}
  ## Support
  ${data.support}
  ## Acknowledgments
  ${data.acknowledgements}
  ## Status
  ${data.status}
  `;
};

// TODO:
export default generateMarkdown;
