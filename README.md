# 📝 Task Management App

A simple **React-based Task Management App** built with **Vite**, **TypeScript**, and **Material-UI**.  
It demonstrates **state management with Context + useReducer**, **mock API integration**, **optimistic UI updates**, and **persistent storage** with `localStorage`.

---

# About

## Features:

✅ **Add, Edit, Delete tasks**  
✅ **Mark tasks as completed**  
✅ **Filter tasks** by **All / Completed / Pending**  
✅ **Persist tasks across reloads** with `localStorage`  
✅ **Fetch initial tasks from JSONPlaceholder mock API**  
✅ **Optimistic UI updates** for a smooth experience  
✅ **Responsive & mobile-friendly** UI with Material-UI

---

## Tech Stack:

- **React 18 + Vite** (fast dev environment)
- **TypeScript** (type-safe development)
- **React Context + useReducer** (state management)
- **Material-UI** (UI components & styling)
- **JSONPlaceholder** (mock API backend)
- **localStorage** (persistent state)

---

# Getting Started

## Step 1: Clone repo + CD into root directory

```bash
# Replace <your-username> with your GitHub username

git clone git@github.com:<your-username>/vantive_technical.git

cd vantive_technical
```

## Step 2: Install dependencies

```bash
npm install
```

## Step 3: Run app locally

```bash
npm run dev
```

The app will run at http://localhost:5173/

---

# Design Decisions

-React Context + useReducer → Simple, predictable state updates without Redux overhead.

-localStorage + API merge → Keeps tasks persistent while still syncing initial API data.

-Optimistic UI → Makes the app feel instant, even if API fails.

Material-UI → Quick, responsive styling with minimal CSS. Created reusable components with MUI, but imported directly from the library modules to improve performance and reduce bundle size.
