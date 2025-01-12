# React Router Dom Nested Route Rendering Issue

This repository demonstrates a common issue encountered when working with nested routes in React Router Dom v6.  The issue is that a nested route fails to render correctly under certain conditions, even when the parent route renders without issue. The provided code sample will help illustrate the problem and a solution to fix the rendering problem of nested routes.

## Problem

The problem lies in how the nested routes are structured and handled within the React Router.  Incorrect nesting can sometimes lead to child routes failing to render, even if the parent route renders successfully. This can be confusing and difficult to debug if the structure is not analyzed thoroughly. 

## Solution

The solution focuses on ensuring that the nesting of routes is correct and follows the best practices recommended for React Router Dom v6.  The core fix is usually related to the structure of the nested routes and how index routes are managed.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install the necessary packages.
3. Run `npm start` to start the development server.
4. Navigate to the `/contact` route. You'll see the parent component render, but the `/contact/form` child route will not. 
5. Modify the code based on the changes provided in the `bugSolution.js` file.
6. Run `npm start` again to confirm the fix.
