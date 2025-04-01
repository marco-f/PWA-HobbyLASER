# PWA HobbyLaser

A **Progressive Web App (PWA)** designed for the **HobbyLaser** project. This web-based application allows users to interact with drawing and monitoring features through an intuitive interface. The app is capable of running offline, providing a native-like experience on both mobile and desktop devices.

## Features

- **Interactive Drawing**: Users can draw directly within the web interface.
- **Custom Font Support**: Use custom fonts for enhanced design flexibility.
- **Offline Capabilities**: Thanks to **Service Workers**, the app functions without an internet connection.
- **PWA Installation**: Install the app on Android, iOS, or PC for a native-like experience with full offline support.
- **Save Progress**: Save work locally to prevent data loss.
- **SVG Creation and Transformation**: Design, modify, and manipulate vector graphics directly in the app.
- **Raster Image Import and Processing**: Load raster images, apply transformations, and prepare them for engraving.
- **G-code Generation**: Convert SVG and raster images into G-code compatible with CNC and laser machines.
- **Web Serial API Communication**: Send G-code commands directly to a microcontroller via a serial connection.

## Technologies Used

- **HTML**: Provides the basic structure and markup of the app.
- **CSS**: Used for styling and layout, including responsive design for mobile devices.
- **JavaScript**: Handles interactive elements and logic for the drawing interface.
- **Service Workers**: Enable offline capabilities by caching assets and data.
- **Web Manifest**: Configures the app’s metadata (app icon, theme color, etc.) for PWA installation.
- **IndexedDB**: Local storage for saving drawings and user progress.

