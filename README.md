# PWA HobbyLaser

![Optimized for Chrome Dark Mode](https://img.shields.io/badge/optimized%20for-Chrome%20Dark%20Mode-black?logo=googlechrome&logoColor=white&style=flat-square)
![PWA Ready](https://img.shields.io/badge/PWA-ready-green?logo=googlechrome&logoColor=white&style=flat-square)
![Offline Support](https://img.shields.io/badge/offline-support-blue?style=flat-square)
[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen?style=flat-square&logo=github)](https://marco-f.github.io/PWA-HobbyLASER/)
![Version](https://img.shields.io/badge/version-1.0.0-informational?style=flat-square)


A **Progressive Web App (PWA)** designed for the **HobbyLaser** project. This web-based application enables users to draw, process images, and communicate with a laser or CNC machine through an browser-based interface.  
> **Optimized for Google Chrome in Dark Mode** 
> 
> **Important:** This application uses the **Web Serial API** to communicate with the laser/CNC controller.  
> Only **Google Chrome** and other Chromium-based browsers (like Microsoft Edge) currently support this feature.  
> 

![logo](IMG/anim.svg)

<h2 align="center">Disclaimer</h2>
<h3 align="center" color="red">**A CNC OR A LASER ARE NOT TOYS!** </h3> 
<h4 align="center"> Using a CNC or laser without proper training and protection can cause serious injury and blindness. We do not accept any liability for damages resulting from the use of this software.</h4> 
<h4 align="center"> 🔗 [Read more about laser safety](https://www.lasersafetyfacts.com/laserclasses.html) </h4>  
<h4 align="center"> **ALWAYS WEAR SAFETY GLASSES!** </h4> 

## Features

- **Interactive Drawing**: Users can draw directly within the web interface.
- **Custom Font Support**: The app allows the usage of custom fonts for enhanced design flexibility.
- **Offline Capabilities**: Thanks to **Service Workers**, the app can function without an internet connection, offering offline access to previously loaded content.
- **Installation as a PWA**: Users can install the app on their device (Android/iOS/PC) for a native app experience, with full offline support.
- **Save Progress**: Your work can be saved locally, ensuring that you don't lose any data.

## Technologies Used

- **HTML**: Provides the basic structure and markup of the app.
- **CSS**: Used for styling and layout, including responsive design for mobile devices.
- **JavaScript**: Handles interactive elements and logic for the drawing interface.
- **Service Workers**: Enable offline capabilities by caching assets and data.
- **Web Manifest**: Configures the app’s metadata (app icon, theme color, etc.) for PWA installation.

- **Interactive Drawing**: Draw vector shapes directly in the browser.
- **Custom Font Support**: Use your own fonts for creative flexibility.
- **SVG Creation & Editing**: Import, transform, and generate scalable vector graphics (SVG).
- **Raster Image Handling**: Load and process raster images (e.g., PNG, JPG) for laser engraving.
- **G-code Generation**: Convert designs to G-code and send to a microcontroller.
- **PWA Installation**: Installable as a standalone app on Android, iOS, or desktop.
- **Dark Mode Ready**: Optimized for **Chrome's dark theme** for reduced eye strain and professional look.


## Live Demo

You can view a live demo of the PWA here:  
[https://marco-f.github.io/PWA-HobbyLASER/](https://marco-f.github.io/PWA-HobbyLASER/index.html)

## How to Run the Project Locally

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/marco-f/PWA-HobbyLASER.git
   ```
2. **Navigate to the project directory:
   ```bash
   cd PWA-HobbyLaser
   ```
3. **Install dependencies (if any) and run the project locally. You can use a local server to serve the files. For example, using http-server:
   ```bash
   npm install -g http-server
   http-server
   ```
4. **Access the app in your browser at::
   http://localhost:8000

5. **Install as a PWA: After running the app, you can also install it as a PWA on your mobile or desktop device for offline usage.

Contributing
Contributions are always welcome! If you'd like to help improve the project, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix (git checkout -b feature-name).

Make your changes and commit them (git commit -am 'Added new feature').

Push your branch to your fork (git push origin feature-name).

Open a pull request with a description of the changes you made.

Please ensure that your code follows the project's coding style and that any new features are well-documented.

License
This project is licensed under the GNU License - see the LICENSE file for details.

Authors
Marco F. - Lead Developer

Acknowledgments
Special thanks to the open-source community for the tools and libraries used in this project.

## Documentation
For a more comprehensive documentation on how to use and contribute to the project, please consult the [Wiki](https://github.com/marco-f/PWA-HobbyLASER/wiki).

---

### **Explanation of Each Section**:

1. **Project Title and Description**: Describes what the project is about, focusing on its PWA nature and the features it offers.
2. **Features**: Lists the key functionalities of the app, like interactive drawing, custom font support, and offline capabilities.
3. **Technologies Used**: Details the core technologies involved in building the app, such as HTML, CSS, JavaScript, Service Workers, etc.
4. **Live Demo**: Provides a link to the live version of the app that users can try out.
5. **How to Run the Project Locally**: This section guides users on how to clone the repository, install dependencies, and run the app locally.
6. **Contributing**: Outlines how others can contribute to the project by forking the repository, creating branches, and submitting pull requests.
7. **License**: Specifies the project's open-source license (MIT License) and links to the license file.
8. **Authors**: Credits the main developer of the project.
9. **Acknowledgments**: Thanks contributors and references external tools or libraries that helped in the development.

---

This **README.md** provides a clear, structured overview of your project and should help guide users and contributors through its setup, usage, and collaboration process.

