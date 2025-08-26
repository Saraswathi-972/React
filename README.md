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
