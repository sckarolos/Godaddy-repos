# Godaddy Git Repos Angular Application
A basic application made using <b>Angular 9</b> and <b>Angular Material</b>.  

## This application: 

- Reads the records from the https://api.github.com/orgs/godaddy/repos
- Displays them in a tabular component
- Allows the user to sort data
- Allows the user use pagination
- Shows details for every repo on table row click

## Version

| Name  | Version |
| ------------- | ------------- |
| Angular  | 9.0.3  |


## Project setup

#### Install dependencies
```
Navigate to root folder and type:
npm install
```
#### Run the server
```
npm start
```
```
ng serve -o
```

#### Run tests
```
ng test
```

## Map Screenshot

<kbd>

  ![Capture](https://github.com/sckarolos/Godaddy-repos/blob/main/screenshot.png)

</kbd>


## Explanation of design decisions

- Angular 9 is used (and not version 11/12) to avoid dependency issues with the third party libraries (Angular Material)
- Angular material data table is used as it supports tabular data visualisation with minimum configuration. It also supports a very efficient and quick pagination and sorting options.
- SCSS/SASS has been avoided since there is no special styling needs in the task's requirements.

## Things that could be improved

- NGrX, RxJS could be used to add state management in the app. 
- Lazy/dynamic loading could be added to fetch data in slices.
- A service could be used to share date between sibling components (instead of passing them through routing.  
- Add extensive tests across all components.
- Upgrade all dependencies and eventually upgrade to Angular 12
- Accessibility UX/navigation can be improved.  

## References 

[Angular Material](https://material.angular.io/)
