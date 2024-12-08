# React + Vite
# -my-weather-app

## Description
This is a weather application built using React and Vite, designed to provide real-time weather data for different cities around the world. Users can enter a city name to fetch the current weather along with a five-day forecast.

## Technologies Used
- **React**: A JavaScript library for building user interfaces. It allows for the creation of reusable UI components.
- **Vite**: A build tool that provides fast development and build performance. It serves files via native ES modules in development, making it faster than traditional bundlers.
- **Axios**: A promise-based HTTP client for making requests to the weather API.
- **OpenWeather API**: A service providing weather data, which is utilized to fetch weather information for the entered city.
- **CSS**: For styling the application and providing a responsive UI.

## Approach Taken
1. **Project Setup**: Created a new React application using Vite for improved performance and quicker development times.
2. **Component Structure**: Built the application using a component-based structure. Key components include:
   - `WeatherForm`: A form for users to input city names.
   - `WeatherDisplay`: Displays the current weather information.
   - `ForecastDisplay`: Shows the five-day weather forecast.
3. **State Management**: Utilized React hooks (such as `useState` and `useEffect`) to manage state and side effects for data fetching.
4. **API Integration**: Made API calls to the OpenWeather API to fetch weather data based on user input, handling responses and displaying the data appropriately.
5. **Responsive Design**: Styled using bootstrap application to make it user-friendly across various devices.

## Live Site
Check out the live version of the application at: https://weatherappallovertheworld.netlify.app/

## Usage Instructions
1. Clone the repository:
   git clone https://github.com/fitsumbabay/-my-weather-app



