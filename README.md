1. Init project

npx create-react-app --template typescript

yarn add react-router-dom

----------------------------------------------------------------------------------------------------

2 .Install husky

yarn add --dev husky
git init
yarn prepare

scripts: 
 "prepare": "husky install"

----------------------------------------------------------------------------------------------------

3. Install babel

yarn add --dev @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react @babel/preset-typescript

add .babelrc file

----------------------------------------------------------------------------------------------------

4. Install eslint

yarn add --dev eslint eslint-config-kinal lint-staged

Add .eslintrc.json
//packacge.json
 "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },


scripts

"lint": "eslint . --ext=js,jsx,ts,tsx --ignore-path .gitignore",
"lint:fix": "eslint . --ext=js,jsx,ts,tsx --fix --ignore-path .gitignore",

----------------------------------------------------------------------------------------------------

16. Install jest

yarn add --save-dev @testing-library/jest-dom @testing-library/react @testing-library/user-event 

yarn add --dev @types/jest ts-jest

Add UnitTestConfig.tsx, __tests__/Paginator.spec.tsx, RandomUserList.spec.tsx , 

add jest.congig.js

scripts: "prepare": "husky install"



----------------------------------------------------------------------------------------------------

5. Install prettier 

yarn add --dev prettier 

add .prettierrc.json

scripts:

    "format": "prettier --write **/*.{js,jsx,ts,tsx,css,md,json} --ignore-path .gitignore",
    "format:check": "prettier --check **/*.{js,jsx,ts,tsx,css,md,json} --ignore-path .gitignore",


----------------------------------------------------------------------------------------------------

6. Install commitlint

yarn add --dev @commitlint/config-conventional @commitlint/cli

add .commitlintrc.json

----------------------------------------------------------------------------------------------------


10. Install axios

yarn add axios

add folder lib and config axios.ts file

----------------------------------------------------------------------------------------------------


7. Install primeface UI

yarn add primeicons primereact react-transition-group

add @import 'primereact/resources/primereact.min.css';
@import 'primeicons/primeicons.css';
@import 'primereact/resources/themes/nova-alt/theme.css'; to global css


----------------------------------------------------------------------------------------------------

8. Install bootstrap

yarn add bootstrap

add @import '~bootstrap/dist/css/bootstrap.min.css'; to global css;

----------------------------------------------------------------------------------------------------


11. Install redux

yarn add @reduxjs/toolkit react-redux

create store folder contains set up app store

----------------------------------------------------------------------------------------------------


** Folder Structure **

15. features/randomUser -> Contain RandomUser slice, action, state , reducer and components are using these reducer

13. context/* -> contains store Provider of redux 

12. models/* -> contains shared model of app

14. api/* -> contains call api function for each object

9. App component contains app royter

