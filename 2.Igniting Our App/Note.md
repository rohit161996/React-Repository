## What is npm and what is it not?
1. npm is not "node package manager"
   Go to npmjs.com

2. npm manages packages but it is not node package manager 

3. npm is a standard repository for all the packages 

4. npm has all the libraries and the utilities we require.

-> npm init 
-> npm init -Y

This command creates a package.json file. This file is a configuration for the npm.

## Why do we need the package.json?
npm manages all the packages or dependencies of the project, there are versions of the package, and these versions of the package are mentioned in package.json.

## What is the most important package in our project?
It is a bundle.

## What is a bundle?
It is a collection of the HTML, CSS and JS files. Our code is to be minified, compressed, cleaned, packaged which is done by the bundler, such that the code can be shipped to production. 

## What is web pack, parcle, vite?
These all are the bundles

create-react-app uses bundles.

Parcel is used in this course, to build the app or ignite the app.
We can install parcel if we have npm already.

## How to Install Parcel?
-> npm install -D parcel

- There are two types of dependencies:-
1. Dev Dependencies (During the developement)
2. Normal Dependencies (During the production and development)

Parcel gives strength to the app.

## What is tilde ~ ?
"parcel": ~2.15.2 
tilde will update the package to the major version.

## What is parent ^ ?
"parcel": ^2.15.2 
If a new version of parcel is available then the ^(parent) will update it to the new version.

## What is package-lock.json?
It keeps the track of the exact version which is used in the app. The package.json will not change but the package-lock.json will change.

## Why is it working on my machine and not in the production?
It is taken care in the package-lock.json.

## What is node-modules?
It contains all the dependencies or packages which are mentioned in the package.json. It is a type of database which has all the packages.
It has a lot of files because of the dependencies of parcel are also installed.
The dependencies of dependencies are also installed which is called transitive dependencies.

## How many package.json and package-lock.json do we have?
We have a lot of package.json and package-lock.json files for all the packages installed.

## Should we push the node-modules to git?
No, it should not be pushed and it is avoided with the help of .gitignore, because the node_modules can be created with the package.json and package-lock.json using npm install.

## Which all files have to be pushed to the git?
package.json, package-lock.json and other files i.e. code files should be pushed to the git.
If we do not want any update in the package then remove the ^ and ~ from the package.json.

## Why using the CDN is not a good idea?
It is because the CDN has the fixed package mentioned in the URL and it can change with time. So install the react and react-dom using the command and the package.json.

## How to install react and react-dom?
-> npm install react
-> npm install react-dom

## How does the page automatically refreshes itself?
Due to the parcel bundle which does HMR(Hot Module Replacement).
- It does Dev Build.
- Builds Local Server.
- Builds HMR - Hot Module Replacement.
- It uses File Watching Algorithm written in C++.
- Caching which enables faster Build or Compilation, parcel-cache is created.
- Image optimization, as image loading is expensive.
- Minification of files.
- Bundle the files.
- Compress the files.
- Consistent Hashing.
- Code splitting.
- Differential Bundling (App can open in All the various browsers).
- Diagnostics.
- Error Handling.
- Tree Shaking - (Remove the unused code).

## Why the app is fast?
Due to the Parcel and other bundlers functionality and React's features.

https://parceljs.org/

## How to build code for production?
npx parcel build index.html

By executing the above command parcel has performed all the tasks mentioned
in its functionality and created a dist folder with all the code ready to push.

local does not connect to the server directly it connects to git first.

 -----            ---           ------
|local|   -->    |git|  -->    |server|
 -----            ---           ------

## What is the content of the .gitignore file?
/node_modules
/dist
.parcel-cache

- Server will have different node_modules with logs etc. after executing the node_modules.

## How to make our app compatible for the older browser?
It is configured in the package.json 

https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
 
"browserlist": [
   "last 10 Chrome version",
   "last 10 Firefox version"
]

## Initialize the project to create the package.json.
- npm init 
- npm init -Y

## Install the parcel bundle.
- npm install -D parcel

## Install react and react-dom
- npm install react
- npm install react-dom