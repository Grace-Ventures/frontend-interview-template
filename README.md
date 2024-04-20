# frontend-interview-template

## Intro

The goal of this take home interview is to replicate the daily work you may be doing at Grace. It is not meant to take too much of your time, but please feel free to show off as much of your knowledge as possible. (We're roughly aiming for 6 hours max on this assignment.)
Please pick either the `react` folder for regular JS, or `react-ts` folder for TS. Run the project with `npm i && npm run dev`.

## What you will be building
- A sample data is provided in the repository. To replicate an API call, to get this data, you will need to call an async function that will return the data with a small delay. You can fetch this data however you'd like, but do try to not use external libraries.
- With the sample data, please build a table view with these features:
  - Display all data
  - Sort by individual columns, ascending and descending
  - Search for specific rows using important columns
  - Manually reorder certain rows (How would you make this interact with sorting state?)
  - Edit a row's data by entering a row edit view

## Things to keep in mind
- Please write the code as if it's a real contribution to a real product. As in, someone else may be coming in to add more features and make changes to your code.
- The most important thing is that it works - think of it as implementing an MVP. You can use your preferred UI library to do the visual heavy lifting, but it is up to you to decide what is more UX friendly.   
- You can use any utility packages (lodash, redux, etc) and tooling you'd like. We have set up a basic template to get you started.
- Document your assumptions. Many parts of an application can be implemented in various ways. Describe why you chose this implementation and what other alternative you thought about.
  
## When you're done
- Please open a PR describing what you've implemented, and anything we should be aware of. We'll go over the work together.
