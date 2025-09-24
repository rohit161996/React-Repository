# Episode 2 : Igniting our app

## What is npm and what is it not?

1. npm is not "node package manager"
   Go to [npmjs.com](https://www.npmjs.com)

2. npm manages packages but it is not node package manager

3. npm is a standard repository for all the packages

4. npm has all the libraries and the utilities we require.

```bash
npm init       # Initializes a new Node.js project and creates a package.json via prompts
npm init -Y    # Creates a package.json file with default values (skips prompts)
```

This command creates a `package.json` file. This file is a configuration for the npm.

---

## Why do we need the package.json?

* npm manages all the packages or dependencies of the project, there are versions of the package, and these versions of the package are mentioned in package.json.

---

## What is the most important package in our project?

* It is a **bundle**.

---

## What is a bundle?

* It is a collection of the HTML, CSS and JS files. Our code is to be minified, compressed, cleaned, packaged — which is done by the bundler — such that the code can be shipped to production.

---

## What is webpack, parcel, vite?

* These all are the **bundlers**.
* `create-react-app` uses bundlers internally.
* **Parcel** is used in this course, to build the app or ignite the app.
* We can install Parcel if we have npm already.

---

## How to Install Parcel?

```bash
npm install -D parcel   # Installs Parcel as a dev dependency
```

* There are two types of dependencies:

  1. **Dev Dependencies** - Used only during development
  2. **Normal Dependencies** - Needed in both development and production

Parcel gives strength to the app.

---

## What is tilde `~`?

```json
"parcel": "~2.15.2"
```

* The tilde will update the package to the latest **patch** version within the same **minor** version.

---

## What is caret `^`?

```json
"parcel": "^2.15.2"
```

* If a new version of parcel is available then the caret (^) will update it to the latest **minor** and **patch** version.

---

## What is package-lock.json?

* It keeps the track of the **exact version** which is used in the app.
* The `package.json` will not change but the `package-lock.json` will change.

---

## Why is it working on my machine and not in the production?

* It is taken care of in the `package-lock.json` — it locks the versions to ensure consistency across machines.

---

## What is node\_modules?

* It contains all the dependencies or packages which are mentioned in the package.json.
* It is a type of local database which has all the packages.
* It has a lot of files because the dependencies **of parcel** are also installed.
* The **dependencies of dependencies** are also installed — this is called **transitive dependencies**.

---

## How many package.json and package-lock.json do we have?

* We have a lot of `package.json` and `package-lock.json` files for all the installed packages.

---

## Should we push the node\_modules to git?

* No, it should not be pushed and it is avoided with the help of `.gitignore`, because the node\_modules can be recreated using `package.json` and `package-lock.json` with:

```bash
npm install   # Installs all dependencies listed in package.json
```

---

## Which all files have to be pushed to git?

* `package.json`, `package-lock.json`, and other source code files should be pushed to git.
* If we do not want any automatic update in the package, then remove the `^` and `~` from the `package.json`.

---

## Why using the CDN is not a good idea?

* Because the CDN has a fixed version of the package in its URL and that version can change or become unavailable with time.
* So instead, install **react** and **react-dom** using npm and manage versions through `package.json`.

---

## How to install react and react-dom?

```bash
npm install react       # Installs React
npm install react-dom   # Installs ReactDOM
```

---

## How does the page automatically refresh itself?

Due to the **Parcel bundler** which does **HMR (Hot Module Replacement)**.

* It does **Dev Build**.
* Builds **Local Server**.
* Builds **HMR** - Hot Module Replacement.
* Uses a **File Watching Algorithm** written in C++.
* **Caching** which enables faster build or compilation (parcel-cache is created).
* **Image optimization**, as image loading is expensive.
* **Minification** of files.
* **Bundle** the files.
* **Compress** the files.
* **Consistent Hashing**.
* **Code Splitting**.
* **Differential Bundling** (App can open in all modern browsers).
* **Diagnostics**.
* **Error Handling**.
* **Tree Shaking** — removes unused code.

---

## Why the app is fast?

* Due to **Parcel** and other bundlers' functionalities, and **React’s efficient rendering**.

[https://parceljs.org/](https://parceljs.org/)

---

## How to build code for production?

```bash
npx parcel build index.html   # Builds the app for production
```

* By executing the above command, Parcel performs all its tasks and creates a `dist` folder with the optimized code.

---

## Flow from Local to Production

```
 -----            ---           ------
|local|   -->    |git|  -->    |server|
 -----            ---           ------
```

* Local does not connect to the server directly. It connects to **git**, then gets deployed to the **server**.

---

## What is the content of the .gitignore file?

```
/node_modules
/dist
.parcel-cache
```

* Server will have different `node_modules` with logs, etc., after executing `npm install`.

---

## How to make our app compatible for the older browser?

* It is configured in the `package.json` under the `browserslist` field.

[https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)

```json
"browserslist": [
  "last 10 Chrome version",
  "last 10 Firefox version"
]
```

---

## Initialize the project to create the package.json

```bash
npm init        # Interactive way to create package.json
npm init -Y     # Instantly creates package.json with default values
```

---

## Install the Parcel bundler

```bash
npm install -D parcel   # Installs Parcel as a dev dependency
```

---

## Install React and ReactDOM

```bash
npm install react       # Installs React
npm install react-dom   # Installs ReactDOM
```

---
