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
15.


