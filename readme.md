## React course outline 2022.

* [Introduction](#introduction)
    * Installation](#introduction
    * React Elements
* [Components](#components)
    * Functions Components
    * Class Components
* [Props](#props)
* [State in React](#state-in-react)
* Component Interaction Communication
* Iterating through lists
* Calling REST API
* Sending POST request
* Building forms plus validation
* Lifting State Up
* Error boundaries
* Fragments
* Refs and DOM
* Higher Order Components
* Portals
* Profiler
* Render Props
* Pure Components
* Component Lifecycle Methods
* Introduction to Hooks in React
* useState Hook
* useEffect Hook
* useContext Hook
* Custom Hooks
* Routing
* Protected Routes
* Prevent Transition
* Redux


## Introduction

Most cool kids are using react today, and this is due to the purpose of React, to be fast, scalable, and simple while allowing developers to create large web applications that can change data, without reloading the page. React is a JavaScript library used to build User Interfaces, it was made by Facebook in 2011, with its newsfeed being the first use case.

React is declarative meaning it allows you to control the flow and state in your application by saying “It should look like this” as opposed to an imperative style which allows you to control your application by saying “This is what you should do”.

### So Let’s Talk React

### Installing React
In order to be able to use Reactjs, you need to install node.js. If you don’t already have node installed on your computer, visit [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and select a version depending on your operating system.
node.js comes with npm and npx. All we need to know for now is that the npm is a package manager for nodejs, and we shall see it in use when talking about using external libraries.

 To check which version of node and npm you have installed, you can use these commands.
```
	> node -v
```
```
	> npm -v

```

Creating a React App
One of the ways to create a react app is by using Create React App. This abstracts most of the hard work for us, including the need to know about the web packs and babels bundlers when we are just getting started. All this is done for us in the react-scripts, and we don’t have to hassle.

So to create a react app we use the command,
```
	npx create-react-app my-react-app
```

React App Structure
Now that you have successfully started your reactjs app, lets take time to talk about the structure of any reactjs application you will build.

The project comes with some folders and files that we will need to know a thing or two about, some more important than the others
node_modules: explain
public folder: This folder contains static files like index.html, images, manifest.json and other assets, which don’t need to be processed by the webpack.
src folder: which initially contains the App.js file, which you can edit the app.
index.js: This the main/ entry file which allows you to import the parent file (App.js) as a module.
App.js: 
index.css:
App.css:
App.test.js:
.gitignore:
package.json: which holds a list of dependencies for your project plus some metadata like name, version etc.
README.md: 

Conclusion
I hope you reached this point successfully, Day one was a general introduction to the library and nothing complicated. You could check out day two, where I share about components, Class vs Functional components.
 
Thanks for reading.
