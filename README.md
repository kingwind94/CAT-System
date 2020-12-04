# CAT-System

Front end developed using React, Ant Design UI, React-Redux, React-Router.

Back end developed using node.js, express, mssql.

## React front end

```
frontend
├─ node_modules
├─ public
├─ src
│  ├─ components 
			├─ auth
			├─ section1
			├─ section2
			├─ section3
			├─ section4
			├─ section5
			├─ section6
			├─ section7
			├─ section8
			└─ utils (some common utils functions)
        ├─ FetchData.js (fetch function calls the backend Restful API)
        ├─ Utils.js (some common utils functions)
│  ├─ Site (static files here, images and audio)
			├─ audio
			├─ Images
			└─ section8_images
│  ├─ store
			├─ index.js (don't worry about this)
			└─ reducer.js (This is where you put the question texts and answers)
│  ├─ App.js
│  ├─ index.js (entry point)
│  ├─ index.css (css style)
│  └─ PageSwitch.js 
```



Above is the files structure of the front end app. 

- The entry point of the App is index.js (in src folder not store folder).  Actually nothing there, but a redux store included. You don't need to worry about that.

- Then the App.js is the next level of program.  The outer layout of the whole webpage is defined here, such as the root-container style, site-layout-content. This is where you change the size and layout of whole picture (in the index.css). You can play around it with the help of chrome dev tools. Moreover, the font change buttons (the two A in upper right) are also included here in FontColorsOutlined.

- Then the PageSwitch.js is included in the App.js. This is where you will add new pages to the App. I used React-Router to do the page routing. I also prevent users go back or click back button in this file. TODO: Maybe you want to prevent user right click.

- And here is how you would add a new page, like the user information/registration page. In the src/components folder, for example, there is already an auth subfoler here (Huijia Zhu added and I did not remove it). Create or modify the LoginPage.js, design your own login page using react, export it (using export default). Then, inside the PageSwitch.js, import the js file, and add it to the router. Then you can visit your page in the url.

- For example:

  ```javascript
  import LoginComponent from "./components/auth/LoginPage";
  <Route path="/login" component={LoginComponent}></Route>
  
  // then you can see the page in /login.
  ```

### React-Router

To navigate to the next page, use (Recommended)

```javascript
this.props.history.push("/section2");
```

inside a click button function (OnClick() or something else) . 



If you want a non-programming navigation, use 

```javascript
<Link to="/section2">Section 2</Link>
```

For more usage, check the React-Router website, https://reactrouter.com/web/guides/quick-start. Maybe you don't want to see all of them. You can just check my PageSwitch.js.

### Fetch backend

To call the backend API in the front end,  see the following example.

```javascript
await FetchData("/sumCorrectIncorrect", "PUT", data)
  .then((res) => {
  if (res.status === 200) {
    return res.json();
  } else {
  }
})
  .then((res) => {
  console.log(res);
  if (res.nextQuestion === "") {
    this.props.clearNumQuestions();
    this.props.history.push("/section7");
  } else {
    this.setState({ question: res.nextQuestion.toLowerCase() });
  }
});
```

FetchData is defined in src/components/ustils/FetchData.js.