# Inspirational Homepage with React and Redux

This is a personal homepage project built with **React** and **Redux Toolkit**. It provides a motivational and functional start to the day, displaying weather data, a background image, an inspirational quote, the current time, and a place to track your thoughts.

## 🚀 Features

- 🗓️ Live date and time
- 🌤️ Weather based on default or user location
- 🧠 Thoughts (daily notes)
- 🖼️ Photo of the day
- 💬 Quote of the day

---

### 🗓️ Current Date & Time

Displays the current date and time, updating every second using `setInterval`.

---

### 🌤️ Weather

Shows the current weather based on a default city (`Munich`) or the user’s actual location.

- Includes: City name, country, temperature, description, and weather icon
- Location detection via browser geolocation
- Custom city search functionality
- Weather data provided by **SheCodes Weather API** (for educational use)

> **Troubleshooting**: If location detection does not work, please check your browser’s location permissions.

---

### 🧠 Thoughts

A simple and intuitive thought-tracking feature powered by **React** and **Redux Toolkit**. Users can jot down short thoughts, mark them as done, or remove them.

#### ✨ Features

- Add new thoughts via input
- Toggle "done" status (with line-through effect)
- Delete thoughts
- Global state management via `createSlice`

#### ⚙️ Technical Details

- **Hooks**: `useState`, `useEffect`, `useSelector`, `useDispatch`
- **Redux Logic**:
  - `addThought`: Adds a new thought with a unique `id`
  - `toggleThought`: Toggles completion status
  - `removeThought`: Deletes a thought by `id`
- Thought data structure: `{ id, text, done }`

---

### 🖼️ Photo of the Day

Fetches and displays a random image using the **Unsplash API** to provide a visually inspiring background each day.

---

### 💬 Quote of the Day

Displays a random motivational quote, including the author’s name. Powered by the **Go Quote API**.

---

## 📦 Tech Stack

- React
- Redux Toolkit
- CSS Modules
- SheCodes Weather API
- Unsplash API
- Go Quote API

---

## Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
