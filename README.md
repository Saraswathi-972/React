# React
Namaste React Course..

# Episode-1
1.For javascript language we need to write everything under <script> tag.
2.Browsers have javascript engine in it that executes this js.
3.But browsers don't understand react.
4.For this we need to get/add react into our projects.
5.Add react cdn links into project(into index.html).
6.CDN(content delivery network) is a website where react library is hosted.
7.After adding react cdn links now our project has react inside it(Injected react into our project)
8.React is a javascript library.
9.React library is developed by facebook.
10.First cdn link is mainly consists for core react file/framework.
11.Second one is for react DOM.
12.React not only works in browsers and also in mobiles.
13.ReactDOM is a bride b/w browser and DOM.
14.React element is an java script object.
15.Render method is responsible for converting this javascript object into
   h1 tag and put it inside root.
16. Create element has three parameters
       1. Name of the element
       2. Attributes
       3. Children(it can be one or array of children)
17.We need to must follow the order for react cdn links and app.js script tag. Always cnd   script tags are first and app.ja script tag is next.
18.React is js library and it can work independently in a small portion in our app.
19.React always identifies elements by keys not by ids. so make sure to provide unique key name along with id for each element. Otherwise it will give an warning on the console page.

# Episode-2
1.npm manages packages. It's a standard repository for all packages.
2.run npm initi for getting npm configuration into our project.
3.package.json is a configuration for npm.
4.Bunddlers like webpack,parcel and wheet are used for bundling our project. Bundlers bundle our     project and push bundled project into production.
5. There are two types of dependencies in our project
    Dependencies and Dev Dependencies
    Dev dependencies are used during development but dependencies are used in production also.
6.We need to install parcel as an dev dependency.
   npm install -D parcel
7.package.json contains ^ or ~ for versions of dependencies but package-lock.json locks the exact version of dependecies available in the package.json.
8.Node modules is a collection of dependencies
9.Don't put node modules into production and don't push into github
10.If we have package.json and package-lock.json we can re generate node modules again(npm install)
11.npx parcel index.html-->igniting our app using parcel
12.In normal javascript/typescript file imports are not allowed.In order to make this file as modules add type attribut in src tag.
13.Parcel
    -DEV Build
    -Local Server
    -HMR-Hot Module Replecement(Automatic page represh)
    -File Watching Algorith - Written in C++
    -Caching - Faster Builds
    -Image Optimization
    -Minification
    -Compress
    -Conistent hashing
    -Code splitting
    -Differential Bundling - support old browsers
    -Error Handling
    -Diagnostic
    -Https
    -Error Handling
    -Tree Shaking - remove unused code
    (read all this in parcel documentation)
    -Different local and prod bundles
14.npx parcle build index.html creates production ready build under dist folder

# Episode-3

1.provide scripts for start and production builds under scripts in package.json
2.Run those scripts with npm run start/build
3.npm run start and npm start both are same(applicable only for start)
4.JSX is html like syntax but JSX is not html
5.Babel is JSX compiler.Transpiles JSX code into React code and parcel manages the babel
6.For giving attributes to JSX elements we need to follow camel case naming and wrp in () if multiple lines of code
7.Class based components and functional components
  class based-old - uses jsx classes
  functional components-new-uses jsx funtions
8.React functional component is a function that return piece of jsx code;

# Episode-4
1.Props(properties) in react can be used to pass dynamic data to the components.
2.Pros are arguments to the function
3.(pros)
  const {resNmae,rating}=props it's called destructing props
4.Config Driven UI- our website is driven by configs
5.Array.join(",") - joins array of values with comma
6.Whenever we are using map we need to assign unique key for each child
7.It's recommended to use index as key suggested to use unique keys.

# Episode-5
1.Two types of export/import-Default and named
  - export default component:
      import component "path";
  -export const component;
      import {component} "path"; 
2.When we try to export multiple things use names export
3.we can use both named and default export for the same component as well it won't throw any error
4.state variable-super poweful variable
5.React Hooks
    -They are normal JS utility functions. written by Facebook developers
    -There are written inside React(comes automatically when we use import react)
6.There are two important types of react hooks(others not use more)
  -useState() - for creating state variable
  -useEffect()
7.Whenevre a state variable changes react will re render my component
8.Reconciliation Algorithm(React Fiber) in React16 - new algorithm to update component -https://github.com/acdlite/react-fiber-architecture
9.It will findout difference b/w virtul DOM objects and updated component

# Episode-6
1.UseEffect() will take two arguments- first one is arrow function(callback function) and dependecy array.
2.This callback function will be called after your component is rendered.
3.UseEffect() method is used for first render our app and perform some action later
4.CORS policy - browsers block calling an api from one domain to another domain.Sometimes adding chrome cors extension will bypass this CORS error.
5.Always use optional chaining when you are trying to access data.
6.Shimmer UI is which we show dummy page before our actual data loading.
7.Rendering based on condition is called conditional rendering
8.When we are using state variables if an uopdate is happned to this variable then the componengt will be re rendered again.
9.Virtual DOM is object representation of JSX.
10.During reconciliation cycle react find outs the difference between older virtual DOM and newer virtual DOM and renders the component
11.Why rendering is fast-beacuse the react fiber will findout the difference between virtual DOMs and updated only the changed part

# Episode-7
1.If no dependency array=>useEffect is called for every render
2.If dependency array is empty=[]=>useEffect is called on during intial render(just once)
3.If dependency array is [btnName]=>useEffect is called on every time when btnName is updated
4.Never create useState variables outside of the functional component. Otherwise it will throw an error.
5.useState() is used to create local state variable inside functional component
6.Never use useState() inside any condtion.It will create inconsistency in program
7.Don't create state variable inside any for loop or any function
8.npm i react-router-dom - installs react router dom into our application
9.RouterProvider is used to configure routing in our applicaion
10.useRouteError() hook method is used to get more information about the error
11.If we use <a href="/contact"> entire page will be refreshed while routing
12.If we use <Link to="/contact"> no page refresh will happen
13.Routing in web apps:
   Client Side Routing: No network call is happened. It's just loads the page. All this are single page applications
   Server Side Routing: when we try to fetch some page network call will happen to server and it willl display particular HTML page or component
14.useParams() hook is used to read data from browser url
15.Install react-router for routing components

# Episode-8
1.Class Based Components: class className extends React.Component a class component which has render method and it's return some piece of JSX
2.Functional component is a normal java script function which returns some piece of JSX
3.Refer UserClass.js for this
4.If we need to work work pros in class component must use constructor and super() inside it and then access it with this key word any where in the class
5.We can destructor props 
   const {name,location}=this.props
6.Loading class based component means creating instant for this class
7.State variables can be created inside constructor in class based components and it should be as below
  this.state ={
    count:0,
  }
 access it as this.state.count
 8.this.state is an object which contains all the state variables in class based component
 9.NEVER directly Update the state variable directly i.e this.state.count=this.state.count+1; it will result in inconsistency
 10.We can update state variables by calling this.setState({count:this.state.count+1,})
 11.Life Cycle Methods of class based component
    1.constructor()
    2.render()
    3.componentDidMount() - this is called when the component is already mounted on the browser. It's mainly used for to make API calls
    4.componentDidUpdate() - It's called for every update.To make API calls based on condition ie we can have old data and new data comparisions
    5.componentWillUnmount()-This method is when the component is unmounted ie.when we navigate to another component(Single page application) in an application. To cleanup the data.Example:setInterval() called in ComponenetDidMount and cleaning up this interval in componentWillUnmount() with clearInterval()
12.If we dealing with parent child class components in this case it follows below order
    1.Parent constructor
    2.Parent Render
    3.First chiild constructor
    4.First child Render
    5.Second child constructor
    6.Second child Render
    7.Frist child componentDidMount
    8.Second child componentDidMount
    9.Parent componentDidMount
    Read-https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

13.Render Phase-Renders all the coponents - constructor(),render()
14.Commit Phase-Updated to DOM and componentDidMount
15.useEffect(()=>{
         
        return ()=>{}; //this function is called during componentWillUnmount
    },[]);
16.why we are writting constructor(props) and super(props)?
17.Why we are writting asyn before componentDidMount() ?
   By default, React lifecycle methods (like componentDidMount) are just normal class methods.

If you want to use the await keyword inside them, the method itself must be declared as async.

👉 Without async, JavaScript will throw an error:

SyntaxError: await is only valid in async functions

🔹 What happens here

async makes componentDidMount return a Promise instead of void.

await pauses execution until the fetch resolves, so your code looks synchronous
