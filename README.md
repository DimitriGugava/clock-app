# Clock Application

## The Challenge

The challenge is to build out a clock application that accurately reflects the design specifications and incorporates data from various APIs to display time, location, and dynamic quotes.

### APIs Used

- **World Time API**: To set the time based on the visitor's IP address and provide additional date information.
- **IP Geolocation API**: To display the city and country based on the user's location.
- **Quotes API**: To generate random programming quotes.

## User Stories

- **Responsive Design**: Users can view the optimal layout for the site depending on their device's screen size.
- **Interactive Elements**: Users can see hover states for all interactive elements on the page.
- **Location and Time**: Users can view the current time and location information based on their IP address.
- **Date and Time Information**: Users can view additional information about the date and time in the expanded state.
- **Time of Day Greeting and Background**: Users are shown the correct greeting and background image based on the time of day they're visiting the site.
- **Random Quotes**: Users can generate random programming quotes by clicking the refresh icon near the quote.

## Expected Behavior

- **Greeting Changes**: Depending on the time of day, the greeting changes to "Good morning" (5am-12pm), "Good afternoon" (12pm-6pm), or "Good evening" (6pm-5am).
- **Icon and Background Image**: The greeting icon and background image change depending on the time of day, with a sun icon and daytime image for 5am-6pm, and a moon icon with nighttime image for 6pm-5am.
- **Random Quote Generation**: A new random quote is generated whenever the refresh icon is clicked.

## Features I Added

- **Time Updates Automatically**: The time on the clock automatically updates.
- **12-Hour Format**: Time is displayed in a 12-hour format.

## Technologies Used

- **APIs**: Utilized to fetch real-time data for the application.
- **Axios**: For making API requests.
- **SCSS**: For styling the application.
- **BEM**: Used for naming convention in CSS to keep stylesheets maintainable and scalable.
- **Figma**: For the design files and to ensure the application matches the design as closely as possible.

## Setup

To get this project up and running on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies with `npm install`.
3. Start the development server with `npm start`.

## Live Demo

You can view the live application at [https://clock-app-qdfe2024.vercel.app/](https://clock-app-qdfe2024.vercel.app/).

Enjoy exploring and using the clock application!
