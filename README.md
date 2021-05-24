# CoWIN Translator

A web extension to replace text in [COWIN](https://www.cowin.gov.in/home) page.

## Getting Started

This application is developed using javascript.

### Installing

- Clone this repo on to your local machine

```bash
git clone git@code.swecha.org:CivicTech/cowin-translator.git
```

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

## Deployment

### Firefox

- Open the `about:debugging` page
- Click "This Firefox" (in newer versions of Firefox)
- Click "Load Temporary Add-on"
- Select `manifest.json` extension's directory.

### Chrome

- Open the `chrome://extensions/` page
- Enable developers mode
- Click "Load unpacked"
- Select extension's directory.

## Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Changelog

Check [CHANGELOG](CHANGELOG.md) to get the version details.

## License

This project is licensed under the GNU GPLv3 License - see the [LICENSE](LICENSE) file for details
