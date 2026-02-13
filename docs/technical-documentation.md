
# Technical Documentation

## 1. Project Overview

This portfolio website was developed using HTML, CSS, and JavaScript as part of the Web Development Assignment.  
The goal of the project is to showcase personal information, academic projects, skills, and provide a contact form for communication.

---

## 2. Technologies Used

- **HTML5** – Used to structure the content of the website.
- **CSS3** – Used for styling, layout design, and responsive behavior.
- **JavaScript (Vanilla JS)** – Used to add interactivity such as theme toggle and contact form handling.

No external frameworks or libraries were used in this project.

---

## 3. Project Structure

The project is organized as follows:

202251380-DANAHALWAN-ASSIGNMENT1-1/
│
├── index.html
├── README.md
├── .gitignore
│
├── assets/
│   └── images/
│       ├── Screenshot 2026-02-13 174104.png
│       ├── Screenshot 2026-02-13 184859.png
│       └── .gitkeep
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md


---

## 4. Design & Layout Decisions

### Responsive Design

The layout uses:
- **CSS Grid** for sections like Projects and Skills.
- **Flexbox** for aligning hobbies and navigation elements.

The `auto-fit` and `minmax()` functions were used to ensure the website adjusts smoothly across desktop, tablet, and mobile screen sizes.

---

## 5. JavaScript Functionality

### Theme Toggle (Light/Dark Mode)

A button allows users to switch between light mode and dark mode.

Implementation:
- A click event listener is added to the toggle button.
- The script adds or removes the `dark-mode` class on the `<body>` element.
- CSS handles the visual changes using this class.

### Contact Form Handling

The form:
- Prevents default submission behavior.
- Displays a personalized success message.
- Clears input fields after submission.

No backend was implemented as it was not required for this assignment.

---

## 6. Accessibility Considerations

- Semantic HTML tags such as `<section>`, `<nav>`, and `<header>` were used.
- Labels were added to form inputs.
- Proper heading hierarchy was followed.

---

## 7. Challenges Faced

- Ensuring consistent layout across different screen sizes.
- Managing spacing and alignment for multiple sections.
- Implementing a clean and simple dark mode design.

---

## 8. Future Improvements

- Add animations and transitions.
- Connect the contact form to a backend service.
- Deploy the website using GitHub Pages.
- Improve accessibility further (ARIA labels, better contrast adjustments).

---
