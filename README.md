# Bike Station App

This is a simple React application that displays information about bike stations in Ghent, Belgium. It fetches data from three different APIs for bike stations, processes the data, and displays it in a user-friendly format.

##Pages
1. Bikes Stations
2. Parkings
3. Parking Details

## Features

- Displays bike station details, including the station name, number of available bikes, and total bike capacity.
- Displays a list of available parkings in Ghent.
- Allows users to copy the station name to the clipboard with a single click.
- Uses styled-components for styling, making it easy to customize the look and feel.
- Allows users to click on a parking name to view more details about that parking.
- Allows users to open Google Maps with the parking location using the "Navigate" button.

## Technical Choices

- **React**: The application is built using React, a popular JavaScript library for building user interfaces.

- **Styled-Components**: Styling is done using the styled-components library, which allows us to define styles directly within JavaScript code.

- **TypeScript**: The code is written in TypeScript, providing static type checking for improved code quality and maintainability.

- **API Fetching**: The app fetches data from two different APIs for bike stations in Ghent: Ghent Dampoort and Ghent Sint Pieters. It uses the `fetch` API to make asynchronous network requests.

- **Conversion Functions**: There are utility functions for converting API responses into structured data that can be easily displayed.
  
- **React Router**: The React Router library is used for navigation, allowing users to view parking details by clicking on parking names.
