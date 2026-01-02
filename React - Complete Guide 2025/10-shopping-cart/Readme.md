# Elegant Context - React E-commerce Demo

**Elegant Context** is a React-based e-commerce demo application showcasing elegant clothing items. The project demonstrates modern React concepts, including **Context API**, **useContext**, and **useReducer** for state management.

---

## 🛠 Project Overview

This project is a **front-end e-commerce app** where users can browse products and add items to a shopping cart. The app features:

- Elegant product cards with images, titles, descriptions, and prices.  
- Add-to-Cart functionality with a live cart count in the header.  
- Responsive and visually appealing layout.  
- Modern React state management patterns using **Context API** and **useReducer**.

---

## ⚛️ React Concepts Used

1. **Context API (`createContext`)**  
   - Creates a global context for the shopping cart state.  
   - Allows sharing state across components without prop drilling.

2. **useContext Hook**  
   - Enables components to consume the cart context easily.  
   - Provides access to cart state and dispatch functions anywhere in the app.

3. **useReducer Hook**  
   - Manages complex state logic for the shopping cart.  
   - Handles actions such as `ADD_ITEM`, `REMOVE_ITEM`, and `CLEAR_CART`.  
   - Ensures predictable and maintainable state updates.
