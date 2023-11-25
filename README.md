![Project Logo](./assets/icon128.png)

# SecureSurf-chrome-extension

Chrome Extension For Identifying Malicious &amp; Phishing URLs

## Overview

The **Securesurf - Malicious URL Detector** is a Chrome extension that uses a machine learning model deployed on AWS Lambda to predict whether a given URL is malicious or not. This extension provides an additional layer of security for users by analyzing URLs and warning them if the link is potentially harmful.

## Features

- **Real-time URL Analysis:** The extension checks the safety of a URL in real-time using a machine learning model.
- **AWS Lambda Integration:** Utilizes AWS Lambda for scalable and cost-effective deployment of the machine learning model.
- **User-Friendly Interface:** Simple and intuitive user interface for a seamless browsing experience.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/malicious-url-checker.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable **Developer mode**.

4. Click on **Load unpacked** and select the extension folder from your local repository.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.

2. Enter or paste the URL you want to check into the input field.

3. Click the **Check URL** button.

4. The extension will analyze the URL and display the result, indicating whether it is considered malicious or not.

## AWS Lambda Setup

1. Create an AWS Lambda function for hosting your machine learning model. [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)

2. Configure the extension to use the AWS Lambda endpoint by updating the relevant settings in the code.

   ```javascript
   // Example code snippet in popup.js
   // Dummy because of API Limit
   const lambdaEndpoint = 'https://aws-lambda-endpoint.amazonaws.com';
   ```

## Demo

![Demo](<./assets/securesurf-chrome-extension(GIF).gif>)

## License

This project is licensed under the [MIT](LICENSE) License.
