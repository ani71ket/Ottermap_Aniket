# Polygon Map App

This is a React-based web application that allows users to input their name and mobile number, which is then used to dynamically adjust the map interface. The second route integrates OpenLayers, enabling users to draw, edit, and delete polygons interactively.

## Features

### Route 1: User Input Form
- A simple form with fields for **First Name** and **Mobile Number**.
- Data is stored in state and passed to the second route.
- On submission, navigates to the map page.

### Route 2: Interactive Map with OpenLayers
- Displays a **dynamic map** that changes based on the length of the user’s name.
- Enables users to **draw, edit, and delete polygons** on the map.
- Provides **three control buttons**:
  1. **Enable/Disable Drawing** mode for creating polygons.
  2. **Enable/Disable Editing** mode for modifying polygons.
  3. **Clear All Polygons** from the map at once.
- Utilizes **OpenLayers** for smooth and efficient map interactions.

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/ani71ket/Ottermap_Aniket.git
   cd Ottermap_Aniket
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## Technologies Used
- **React.js** – Frontend framework
- **React Router** – Routing between pages
- **OpenLayers** – Map and polygon interaction
- **Tailwind CSS** – UI styling

## Usage
1. Enter your **name and mobile number** on the first page.
2. Click submit to navigate to the **map page**.
3. Use the buttons to **draw, edit, or clear polygons** on the map.
4. The **map size adjusts dynamically** based on the length of the name.


This project is part of a **job assignment** and demonstrates skills in React, state management, OpenLayers, and UI design.

