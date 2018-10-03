# CryptoCurrency Converter

![Splash Screen](/images/splash.png)
<img src="/images/splash.png" width="200" height="500" />

![Image 1](/images/dark.png)

![Image 2](/images/light.png)

Convert between cryptocurrencies using live exchange rates, powered by CryptoCompare API. Supports most popular cryptocurrencies.

Features

* Instant conversion between cryptocurrencies using live rates.
* Offline mode using cached exchange rates.
* Switch between dark and light themes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

Install node > 8.3 and watchman

```
brew install node
brew install watchman
```

Install React Native CLI
```
npm install -g react-native-cli
```

Install Xcode or Android Studio to run ios/android simulator.

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the project to a directory
```
git clone git@github.com:chrisli4/Converter.git
```

Navigate to the project and install dependencies
```
cd Converter/
yarn install or npm install
```

Link react-native-splash-screen to the project
```
react-native link react-native-splash-screen
```

Run using Xcode or Android simulator, your preference
```
react-native run-ios OR react-native run-android
```

## Built With

* react-native - react framework for ios/android environments.
* react-redux - state management of the application.
* redux-persist - saving states between sessions.
* redux-saga - creating API calls to retrieve currency information.

### Components Used

* react-native-dropdownalert - alert component for warnings and errors
* react-native-splash-screen - splash screen during application load


## Authors

* Christopher Li (github.com/chrisl4)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

