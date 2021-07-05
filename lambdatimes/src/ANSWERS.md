- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Since javascript is a much looser language than others, we have to tell react what type of props are allowed to be passed into certain parts of the code. if the wrong type of data is passed in, javascript will still allow it, but it will give you a warning so you can fix it. 


- [ ] Describe a life-cycle event in React?
Mounting: componentDidMount is activated after render kicks in so that there is something loaded on the screen while data is loading in from the data.js page or from the API. 

Updating: this occurs when the component is re-rendered. usually after new date is entered by the website user (ex. data submitted on a form)

Unmounting: this is where the component unmounts in order to clear data for the next cycle. 


- [ ] Explain the details of a Higher Order Component?
a higher order component is essentially a higher order function with render and jsx. it is a stateful component within a component. 

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

CSS: give the most flexibility but can take longer and requires the web dev to have an eye for design.

reactstrap: can be very limiting but is fast and looks good. This is great for someone crunch on time who just needs to "Get it done" as far as styling. 

styled components: it has functionality of css and reactstrap and allows styling to be done right on the component page instead of another css file. it can be a time save but depending on how must styling is required can become messy as it is one the same page as your component code. 
