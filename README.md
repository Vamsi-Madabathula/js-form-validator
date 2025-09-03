# Application Form with Error Validation and Popup

This project is a simple HTML, CSS, and JavaScript form that validates user inputs and shows a **popup message** when the form is successfully submitted.

---

## 🚀 Features
- Input fields:
  - Name
  - Email
  - Phone Number
  - Budget
  - Goals
- Inline **error validation messages** below each input.
- Adds **red border** around invalid inputs.
- Prevents submission until all fields are valid.
- Shows a **custom popup in the center of the page** after successful submission.
-

---

## 📂 Project Structure
├── index.html # Main HTML file
├── style.css # Styling for form and popup
└── script.js # Form validation and popup logic


---

## ⚡ How It Works

1. **Form Submission**
   - The form listens for the `submit` event.
   - JavaScript prevents the default page refresh (`e.preventDefault()`).

2. **Validation**
   - Each input is checked for empty values.
   - If invalid:
     - An error message is displayed under the input.
     - The input gets a red `error-border`.
   - If valid:
     - Errors are cleared.

3. **Popup**
   - If all fields are valid, the popup is shown using a CSS class (`.show`).
   

