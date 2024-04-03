# Biscoto - React Native App

Biscoto is a React Native app that integrates Google Sign-In for user authentication. It also includes a voice recording feature with the objective of building a voice-to-text functionality, which unfortunately is not functional due to issues with the free APIs from Deepgram.

## Installation

    Clone the repository.

    bash

### `git clone https://github.com/yourusername/Biscoto.git`

Navigate to the project directory.

bash

### `cd Biscoto`

Install dependencies.

bash

### `npm install`

    Set up Google Sign-In for authentication. Follow the instructions in the Google Sign-In documentation to set up your Google Sign-In configuration.

    Set up Deepgram API for voice-to-text functionality. Due to issues with the Deepgram API, this step is currently not functional.

## Usage

    Sign in using your Google account.
    Use the voice recording feature to record audio.
    Planned: The recorded audio will be converted to text using the voice-to-text functionality (currently not functional).

## Running the App

    Run the app on Android.

    bash

npx react-native run-android

Run the app on iOS.

bash

    npx react-native run-ios

## Known Issues

    The voice-to-text functionality is not working due to issues with the Deepgram API.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
