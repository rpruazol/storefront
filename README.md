## Before you begin
# Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.

- Create a UML diagram of the Virtual Store architecture on a whiteboard before you start.
- Use Vite to create a new React application named storefront.
No starter code is given for this lab.
- Install necessary dependencies as needed as you move forward.
- Add 'react/prop-types': ['off'] into your rules object in the .eslintrc.cjs file to allow for any prop-types.
- In the command line, run npm run dev and confirm that the application loads in the browser.
- Create an EMPTY GitHub Repository named storefront.
- Follow GitHub instructions labeled “…or create a new repository on the command line”.
Note: after completing the above step, only the README will have been pushed to your GitHub Repo.
- Immediately ACP after adding your newly created repo to GitHub; this will add the starter-code to your repo and give you the option to rollback changes to the base starter code if necessary.
- Create and work in a new branch for today called redux.
- Access environment variables stored in your .env as per the Vite Docs. i.e. `import.meta.env.VITE_<variable-name>.`


# Application Architecture
## Create the Virtual Store application as follows:

- Begin with creating your application using `vite`.
- Install Material UI as a dependency.
- Write an `<App />` component that serves as the container for all sub-components of this application.
- A `<Header />` component which shows the name of your virtual store.
- A `<Footer />` component which shows your copyright and contact information.
- A `<Categories />` component:
    - Shows a list of all categories.
    - Dispatches an action when one is clicked to “activate” it.
- A `<Products />` component:
    - Displays a list of products associated with the selected category.