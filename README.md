
# **Art Corner | A Responsive Portfolio Web Application**

## **Project Overview**

**Art Corner** is a responsive portfolio web application that provides users with an interactive platform to explore and showcase art. It includes features such as an interactive navbar, various sections for exploring art, favorites, and a search functionality. The application is built with a focus on performance and responsiveness, making it accessible across different devices.

---

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [System Architecture](#system-architecture)
5. [Setup Instructions](#setup-instructions)
6. [Future Enhancements](#future-enhancements)
7. [Contact Information](#contact-information)

---

## **Features**
1. **Responsive Design**: The website is fully responsive, adapting to different screen sizes, from mobile devices to desktops.
2. **Interactive Navigation**: A fixed top navigation bar that provides links to various sections of the site like Explore, Favourites, About, and Contact Us.
3. **Search Functionality**: Users can search through the portfolio content using the search bar.
4. **Dynamic Content**: The main content area dynamically loads components like the home page and explore section using Angular's `<app-root>` and `<app-index-page>` tags.
5. **Theming & Branding**: Includes branding elements like a favicon (`corner2.ico`) and logo (`logo-navbar2.png`).

---

## **Technologies Used**
- **Frontend**: HTML5, CSS3, Angular Framework
- **Responsive Design**: Bootstrap for layout and styling
- **Assets**: Custom icons and logos (e.g., `corner2.ico`, `logo-navbar2.png`)
- **Version Control**: Git

---

## **System Architecture**

This application is structured as a **Single Page Application (SPA)** using Angular. Key architectural components include:

- **Index.html**: The root HTML file that loads the Angular application. It includes the base href, metadata, and an app-root directive to load the main Angular component.
  ```html
  <app-root></app-root>
  ```

- **App Component**: The primary Angular component that manages the layout, including the navigation bar and content sections.
  ```html
  <nav class="navbar fixed-top bg-light navbar-expand-lg">
    <!-- Navbar content with links to Home, Explore, Favourites, About, and Contact Us -->
  </nav>
  <div class="contents container-fluid">
    <app-index-page></app-index-page>
  </div>
  ```

---

## **Setup Instructions**

### **Pre-requisites**
- **Node.js** (v12 or higher)
- **Angular CLI**

### **Steps to Run the Application Locally**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/art-corner.git
   ```

2. Navigate to the project directory:
   ```bash
   cd art-corner
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the Angular development server:
   ```bash
   ng serve
   ```

5. Open the application in a browser:
   ```
   http://localhost:4200
   ```

---

## **Future Enhancements**

1. **User Authentication**: Implement user login and registration features for personalized portfolios.
2. **Gallery Section**: Add a dedicated gallery section where users can upload and manage their artwork.
3. **Advanced Search**: Improve the search functionality to include filters by categories, tags, or artists.
4. **Social Media Integration**: Enable sharing of artwork on social media platforms directly from the site.

---

## **Contact Information**

For any questions or contributions, feel free to contact:

- **Name**: [Your Name]
- **Email**: [YourEmail@example.com]
- **GitHub**: [https://github.com/yourusername](https://github.com/yourusername)
