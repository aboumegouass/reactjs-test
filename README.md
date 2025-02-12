# React Practical Coding Test

Here’s the improved and optimized version:

## Key Improvements

- Extracted API Call Logic: The fetching logic is now inside a reusable function, `fetchItems` in `/services/api.ts`
- Better Error Handling: Used `useState` to store errors and display them in the UI and using customize `Alert` component from `/components/UIComponents/Alert`
- Replaced Index Key: Used `item.id` instead of `index` as the list key
- To manage the items state efficiently, consider the following approaches based on project needs **Redux** or **Zustand** or simple `useState`
