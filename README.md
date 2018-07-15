# react-workout-app
The app which displays daily workout data, 
build by react

demo is https://julia-dizhak.github.io/react-workout-app/workout/demo/


## Data presentation
* create excel table
* sorting ui
* edit the data
* save the data
seacrh

## Edit the data
* keep track of which cell to edit 
* render an input field when displaying the table if the row and cell indices match the cell the person double-clicked
* update the data array with the new value from the input field

## Search
* Add a button to trigger the new feature
* If search is on, add a row of inputs where each one searches in the corresponding column 
*  As a customer types in an input box, filter the array of state.workouts to only show the matching content 

### Todo
* add legend what is spinning, repetions, etc?
* structure: array of arrays or array of objects?
* how to render the speed (calculateSpeed on componentDidMount?)
* use Redux to manage state
* date from date object
* speed km/h
* parameters without bold
* case with image by svg 
* post method //https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data 
* delete
* update
* add user autentification
* how to show id (random)?
* sort for years?
* Hiking: how steep it was
* favicon workout instead react
* loading, show spinner