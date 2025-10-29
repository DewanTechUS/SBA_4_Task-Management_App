# SBA 4 - Task Management App
Student: Dewan Mahmud Per Scholas
Program: Per Scholas - Software Engineering (MERN Stack)
Cohort: 2025-RTT-57

# Overview
This project implements a browser-based Task Management application using HTML, CSS, and JavaScript. Users can create, edit, delete, filter, and persist tasks with localStorage. The work demonstrates core JavaScript fundamentals, DOM manipulation, event handling, conditional logic, array methods, and simple data persistence.

# Features
- Add tasks with name, category, due date, and status 
- Edit existing tasks (name, category, due date) 
- Toggle status between *In Progress* and *Completed* 
- Delete tasks 
- Filter by status (All, In Progress, Completed, Overdue) 
- Filter by category (case-insensitive) 
- Overdue detection and visual indication 
- localStorage persistence for tasks and filters 
- Accessibility improvements (labels and live region) 
- Keyboard usability (Enter to add, initial focus)

# Learning Objectives
- Use arrays and objects to manage application state
- Manipulate the DOM to render lists and respond to events
- Apply conditionals and array methods for filtering and status changes
- Persist data with localStorage (getItem, setItem, JSON parse/stringify)
- Write readable, maintainable front-end code with clear structure

# Project Structure
- Task_Management_App
- index.html 
- style.css 
- app.js 
- ref_note.js 
- Rocky400x400.jpg 
- README.md 

# How to Run
- Download or clone the repository.
- Open index.html in a web browser. (Chrome)
- Add tasks using the input fields and the Add button.
- Use the filters to view tasks by status or category.
- Close and reopen the page to confirm tasks persist via localStorage.

# Notes on Approach
Planned a minimal UI first (inputs, table, filters), then implemented functionality iteratively.
Separated concerns: HTML for structure, CSS for presentation, JavaScript for behavior.
Implemented render logic to rebuild the table from the current filtered state.
Stored tasks and filter choices in localStorage to persist across page reloads.
Added small accessibility touches (labels for inputs, aria-live region for screen readers).

# Key JavaScript Concepts Used
DOM APIs: getElementById, createElement, innerHTML, event handlers
Array methods: push, filter, find, map, iteration

# Conditionals and date comparisons for overdue detection
localStorage: getItem, setItem, JSON.parse, JSON.stringify

## References & Resources

### **Documentation**
- MDN DOM: [developer.mozilla.org/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) 
- MDN localStorage: [developer.mozilla.org/docs/Web/API/Window/localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) 
- MDN Array Methods: [developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) 
- MDN Date Object: [developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) 
- W3Schools Arrays: [w3schools.com/js/js_arrays.asp](https://www.w3schools.com/js/js_arrays.asp) 
- W3Schools Objects: [w3schools.com/js/js_objects.asp](https://www.w3schools.com/js/js_objects.asp) 
- W3Schools DOM Events: [w3schools.com/js/js_htmldom_events.asp](https://www.w3schools.com/js/js_htmldom_events.asp) 
---

### **Learning Platforms**
- FreeCodeCamp – JavaScript Algorithms & Data Structures: [freecodecamp.org/learn/javascript-algorithms-and-data-structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) 
- GeeksForGeeks – DOM & JavaScript Tutorials: [geeksforgeeks.org/dom-document-object-model](https://www.geeksforgeeks.org/dom-document-object-model/) 
- The Odin Project – JavaScript & Web Development: [theodinproject.com](https://www.theodinproject.com) 
- MDN Learning Area – Front-End Web Developer Guide: [developer.mozilla.org/en-US/docs/Learn](https://developer.mozilla.org/en-US/docs/Learn) 
- JavaScript.info – In-Depth JS Reference: [javascript.info](https://javascript.info/) 
---

### **YouTube Tutorials**
- Traversy Media – JavaScript Crash Course: [youtube.com/watch?v=hdI2bqOjy3c](https://www.youtube.com/watch?v=hdI2bqOjy3c) 
- Web Dev Simplified – DOM Manipulation: [youtube.com/watch?v=5fb2aPlgoys](https://www.youtube.com/watch?v=5fb2aPlgoys) 
- Programming with Mosh – JavaScript for Beginners: [youtube.com/watch?v=W6NZfCO5SIk](https://www.youtube.com/watch?v=W6NZfCO5SIk) 
- The Net Ninja – JavaScript Series: [youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET) 
- Bro Code – LocalStorage Explained: [youtube.com/watch?v=GihQAC1I39Q](https://www.youtube.com/watch?v=GihQAC1I39Q) 
---

### **Developer Tools & Community**
- GitHub Documentation: [docs.github.com](https://docs.github.com) 
- Git – Command Reference: [git-scm.com/docs](https://git-scm.com/docs) 
- Visual Studio Code Docs: [code.visualstudio.com/docs](https://code.visualstudio.com/docs) 
- Stack Overflow – Developer Q&A: [stackoverflow.com](https://stackoverflow.com) 

# Special Thanks
- I would like to express my sincere gratitude to my Per Scholas instructors — **Tishana Trainor** and **Bryan Santos** - for their guidance, support, and encouragement throughout this course. 
Special thanks to my **cohort classmates** and the **online developer community** on YouTube, MDN, and Stack Overflow for their resources and help while I built this project. 

- This project reflects not just my effort but also the collective knowledge and inspiration shared by my peers, mentors, and the broader tech community.

# Reflection
- During this project, I faced challenges with organizing the JavaScript logic so that each feature—adding, filtering, editing, and persisting tasks—worked smoothly together. Managing state between the task array, filters, and localStorage required careful planning to avoid duplication and logic errors. I approached these challenges by breaking the app into smaller, testable parts: first adding and displaying tasks, then implementing filters, overdue checks, and finally editing and persistence. Debugging with console logs helped me understand the data flow at each stage.

- I dedicated an extra 5–6 hours of study each day, watching tutorials and experimenting with code to truly understand concepts rather than just memorizing them. Through this process, I realized that consistent daily practice over time at least a year is essential to build strong, lasting coding skills.