# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue with the owners of this repository before making a change.

Please note we have a Code of Conduct, please follow it in all your interactions with the project.

### Learning Resources

- [Your first extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [How to Create and Publish a Chrome Extension in 20 minutes](https://www.freecodecamp.org/news/how-to-create-and-publish-a-chrome-extension-in-20-minutes-6dc8395d7153/)

## Your First Code Contribution

Unsure where to begin contributing to the project? You can start by looking through these `beginner` and `help-wanted` issues:

- Beginner issues - issues which should only require a few lines of code, and a test or two.
- Help wanted issues - issues which should be a bit more involved than `beginner` issues.

## How Can I Contribute?

### Local Development

- Clone this repo on to your local machine

```bash
git clone git@code.swecha.org:CivicTech/cowin-translator.git
```

- Use `data/template/l10n.csv` and `data/template/l10n.json` for translation

- Replace the **"#"** with the translated string in **replacedWord** in the json file

- Create a dirctory with **ISO 639-1** in `data` directory add these translation

- Add drop-down option in `popup/extension.html` with **ISO 639-1** as the value

### Scrape strings

- Currently scrapping is done by using Document object methods

- Follow [code sinppets](https://code.swecha.org/CivicTech/cowin-translator/-/snippets/) to scrape by
  - [ClassName](https://code.swecha.org/CivicTech/cowin-translator/-/snippets/630)

## Running the tests

- To run test use [web-ext](https://www.npmjs.com/package/web-ext)

- Go to the `cowin-translator` directory.

### Run test

- To Run the extension

```bash
web-ext run
```

### Validate Test

- To Validate the extension

```bash
web-ext lint
```

## Reporting Issues/Features

This section guides you through submitting a issue for the project. Following these guidelines helps maintainers and the community understand your issue, reproduce the issue and find related issues.

### Issue Description

1. Steps to Reproduce:
2. Expected behavior:
3. Actual behavior:
4. Frequency of Occurrence:
5. Environment configuration:
6. Additional Information:

Before submitting an issue or feature request, please check the existing issues as your issue might have already been noted.

## Pull Requests

The process described here has several goals:

- Maintain the project's quality
- Fix problems that are important to users
- Engage the community in working in harmony
- Enable a sustainable system for the maintainers to review contributions

Please follow these steps to make your contribution considered:

1. Create a feature branch from `develop`, make changes and raise a PR against it
2. Please make sure that the feature branch is even with the develop branch while raising a PR.
3. Please ensure that all the testcases are passing to make sure that your changes didn't impact any other existing features

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

- Limit the commit message to 72 characters or less
- Reference issues and pull requests liberally in the commit description
- Consider starting the commit message with an applicable keyword:
  - fix: when fixing a bug
  - feat: when new feature is added
  - test: when updating testcases
  - docs: when docs are updated
  - lint: when lint errors are fixed
  - dep: when any of the dependencies are upgraded
  - chore: for any normal task, which is done as a part of above tasks like updating build scripts, gulp tasks, etc.
