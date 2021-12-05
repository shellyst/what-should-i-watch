# what-should-i-watch

## As a MOVIE VIEWER, I want to SEARCH FOR A FILM BY TITLE OR GENRE so that I can FIND A PLACE TO STREAM THE MOVIE I WANT TO WATCH.

## HTML Index:

- Creating a charset attribute, covers almost all of the characters and symbols in the world
- Adding the meta tag to support older versions of IE
- Including the <meta> element to give the browser instructions on how to control the page's dimensions and scaling.
- Adding the styling file - CSS
- Adding font library (font-awesome)
- To reduce font loading time - adding preconnect hint (Chrome, Opera, Firefox and Android browsers)
- Using a CSS frame - Materialize - for styling purposes
- Creating a title - What Should I Watch
- Creating a separate div class - "container"
- Creating a H1 tag which will define the importnat heading - Name of the site (putting it under class for styling purposes)
- Creating a p class to hold the text about the website and share the same style
- Creating an <input> tag to specify an input field where the user can enter data
- Creating a search button - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search
- Creating a next page button
- Adding icons to buttions
- Adding modals instead of alerts to have a pop up window with a error message
- Creating a separate class for a past Search to display history on the movies that were searched in a past ( 3 movies will disaply)
- Creating a footer
- Adding the java file
- Connecting to a java framework set up - materialize

## HTML Stream:

- Creating a charset attribute, covers almost all of the characters and symbols in the world
- Adding the meta tag to support older versions of IE
- Including the <meta> element to give the browser instructions on how to control the page's dimensions and scaling.
- Adding preconnect to decrease the loading time for fonts
- Adding the font library - font-awesome
- Connecting to a css file
- Creating a Title - Where to Stream Your Movie
- Adding a p element to add the text
- Creating an <input> tag to specify an input field where the user can enter data
- Creating a search button - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search
- Adding an icon to a search button
- Creating a modal instead of alert to display a pop up error message once the invalid input was put
- Creating a div class for a local storage to display last searches
- Adding a footer
- Adding the java framework - materialize
- Adding the java file
- Adding a jquery regerence for a javascript

## CSS - Style

- Using root to delare global variables - main and body font
- Specifying a color to be usined in a body section
- Setting up font for h1,h2 and p elements
- Using CSS Syntax to set up a property value with a text that will be centered - for container, section-title, movie name, movie type, movie role, results elements.
- Setting up a different font size for site name and site info elements
- Setting up a move input font size and width
- Giving a style to a button - font size, background color, to give a round effect on an edges, same with next page element
- Creating a backround for a hoover element for a button
- Using opacity property to show how transperent the img and hoover for img elements will be
- Using a flex container to fill available free space
- Using justify content property to distrubute items evenly
- Styling the modal and the content
- Styling Local Storage button and the information that will be dispalyed
- Adding styles to a footer

## Javascript - Script

- Locating DOM elements by using querySelector
- Declaring a function - Display Movies
- Assigning a variable - API
- Creating a Fetch API to access and manipulate the data
- Using json method to tream and read the data
- Consol log to make sure the API is working
- Running a loop - using if and else function - using 2 APIs (movies and additional data)
- Using catch function to define a block of code that needs to be run and see if any errors occur
- Running a search function and search in a local storage = 3 past searched will appear and displayed
- Creating a for loop to Display Movie API ( at first it was only movie title, genre and poster)
- Data will display in the array
- Console Log to make sure its working
- Declaring additional variables that will be dispalyed after the API is pulled: Title, Poster, MovieRelease Year, Movie Genre, Movie Director, Movie Rating, Movie Country, Movie Awards, MovieRating Title)
- Another for loop to display additional information
- Catch function to check for errors
- Append using inner HTML attribute

## Javascript - Script 2

- Declaring DOM Elements by using querySelector - stream-inout and btn
- Adding event Listener to a search button: Function - Display Movies
- Assigning a variable - API
- Creating a Fetch API to access and manipulate the data
- Using json method to tream and read the data
- Consol log to make sure the API is working
- Using a modal instead of alert: setting up a new vatable to get the modal (myModal) - https://stackoverflow.com/questions/53644316/creating-a-function-in-javascript-and-using-it-with-a-button/53644400
- Settig up a new variable to get a button which will open a modal (myBtn)
- Setting up a new variable to close a modal (close)
- If the condition is false (invalid input) - modal will display
- Running a function to close a modal - clicks on span
- Running a function to close a modal - if the user clicks anywhere outside of the modal
- Catch function to check for errors

## Javascript - Script 3

- Running a function - To generate Service Card
- Using a $ - simple to indentify a primary object - Name of the site, logo, starting price, simultaneous streams, live tv, exclusive originals and platfroms/devices; also adding a link to a web site (clickable)
- Running a function to display the following data: site name, site logo and site URL
- Running a function to show the API card on the screen
- Declaring varuables - Stream input, displayed data and API
- Consol log to make sure the API is gettigm the data
- Loading JSON-encoded data from the server
- Cycle array items in for loop
- Concole log
- Return the value
