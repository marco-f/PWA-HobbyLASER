# PWA HobbyLaser

A **Progressive Web App (PWA)** designed for the **HobbyLaser** project. This web-based application allows users to interact with drawing and monitoring features through an intuitive interface. The app is capable of running offline, providing a native-like experience on both mobile and desktop devices.

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
- **IndexedDB**: Local storage for saving drawings and user progress.

## Live Demo

You can view a live demo of the PWA here:  
[https://marco-f.github.io/PWA-HobbyLaser/](https://marco-f.github.io/PWA-HobbyLaser/)

## How to Run the Project Locally

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/marco-f/PWA-HobbyLaser.git
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
Thanks to all contributors who help improve this project!

Special thanks to the open-source community for the tools and libraries used in this project.

---

### 📚 **Explanation of Each Section**:

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

