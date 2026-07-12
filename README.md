# Simple Counter App

A modern and interactive Counter Application built using **HTML**, **Tailwind CSS**, and **JavaScript**. This project demonstrates DOM manipulation, event handling, theme customization, and user interaction through a clean and responsive interface.

---

## Preview
![Counter App Screenshot]([./assets/screenshot.png](https://github.com/HumayunCoder/Simple-Counter-App/blob/main/assets/Screenshot.png))

---

## Features
- Increment Counter
- Decrement Counter
- Reset Counter with confirmation
- Set counter to a custom value
- Enable/Disable maximum counter limit
- Multiple color themes
- Dark mode (default)
- Light mode
- Information/About section

---

## Built With

- HTML5
- Tailwind CSS
- JavaScript (ES6)

---

## Project Structure

```
COUNTER/
│
├── node_modules/
├── assets/
│   ├── Screenhot.png
├── src/
│   ├── index.html
│   ├── input.css
│   ├── output.css
│   └── main.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/counter-app.git
```

### 2. Open the project

```bash
cd counter-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start Tailwind CSS

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

### 5. Run the project

Open `src/index.html` in your browser.

You can also use the **Live Server** extension in VS Code.

---

## How It Works

### Increment

- Increases the counter by **1**.
- Displays the **Decrement** button after the count becomes greater than 0.
- Stops increasing if the maximum limit is enabled.

### Decrement

- Decreases the counter by **1**.
- Never allows the counter to go below **0**.

### Reset

Clicking the reset icon opens a confirmation dialog.

- **Yes** → Counter resets to **0**
- **Cancel** → Closes the dialog

### Set Counter

Allows users to manually set any starting value.

### Counter Limit

Users can:

- Enable or disable the limit
- Set a maximum value
- Prevent the counter from increasing beyond the selected limit

### Theme Customization

Choose between:

- Black
- White
- Red
- Yellow
- Green
- Blue
- Purple
- Sky Blue
- Gray

### About Section

Displays:

- App Version
- Developer Name
- Technologies Used

---

## Screens

- Main Counter
- Reset Confirmation
- Settings Panel
- About Dialog

---

## JavaScript Concepts Used
- DOM Manipulation
- Event Handling
- Functions
- Variables
- Conditional Statements
- Loops
- Class Manipulation
- Form Input Handling

---

## Future Improvements
- Keyboard shortcuts
- Counter history
- Animations
- Custom themes

---

## Developer

**> Muhammad Humayun**

---

## License

This project is open-source and available under the **MIT License**.

---

⭐ If you like this project, consider giving it a star on GitHub!
