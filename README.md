# File Manager App

A platform to upload and view files with various functionalities including user authentication, file listing, uploading, permission management, file viewing, and thumbnail generation for images.

## Features

- **User Authentication**: Authenticate users via a token.
- **List Files**: List all files uploaded by the user.
- **Upload File**: Upload a new file to the platform.
- **Change File Permissions**: Modify the permissions of a file.
- **View File**: View the contents of a file.
- **Generate Thumbnails**: Automatically generate thumbnails for image files.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **MongoDB**: Database for storing file metadata and user information.
- **Redis**: In-memory data structure store for caching and session management.
- **Express**: Web framework for building the API.
- **Kue**: Job queue for background processing.
- **Bull**: Job queue for handling background tasks.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/file-manager-app.git
   cd file-manager-app
2. Install dependencies:
   ```bash
   npm install
3. Set up environment variables:

   The required environment variables should be stored in a file named .env
4. Start the application:
   ```bash
   npm start

## Author

Mohammed Refat
