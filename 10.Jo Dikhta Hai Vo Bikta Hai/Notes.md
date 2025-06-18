## How to make our app look beautiful?
- To add CSS to our file.

1. Add the CSS File to our project
- Using the index.css file to add the CSS to our Application.

2. Use Sass or SCSS
- Sass/SCSS is a way to write CSS with some superpowers.
- https://sass-lang.com/
- https://sass-lang.com/
- These are not used in the scalable application, this is not a recommended way to add CSS to our Project.
- In the production based application.

3. Styled Component
- This is a way to use CSS in our Components, a lot of companies use this way to style the component in the CSS.
- https://styled-components.com/

4. Material UI
- https://mui.com/material-ui/
- They give prestyled components which can be directly used.
- They have a prebuild CSS inside them.

5. Bootstrap - HTML, CSS and JS Library
- They give prestyled components which can be directly used.
- They have a prebuild CSS inside them.

6. Chakra UI
- They give prestyled components which can be directly used.
- They have a prebuild CSS inside them.

## More or less they have the same components.

## We will be using the Tailwind CSS.
- Rapidly build modern websites without ever leaving your HTML.

## Configure the Tailwind Framework in our Application
- Tailwind CSS can be used with any of the frameworks, Angular, VueJs or React.

## Install it in Parcel Project

- npm install tailwindcss @tailwindcss/postcss

                OR
- npm install -D tailwindcss postcss
- npx tailwind init

- A tool for transforming CSS with JavaScript
https://postcss.org/

## Tailwind CSS gives us everything in terms of className to give the tag that property
1. { display : "flex"}  === className="flex"
2. { justify-content: space-between;}  === className="justify-between"
3. { padding: 4px;}  === className="p-4"
4. { margin: 4px;}  === className="m-4"
5. { background-color : "red"}  === bg-red-100 [50-950]

6. { margin-bottom: 4px;}  === className="mb-4"
7. { margin-top: 4px;}  === className="mt-4"
8. { margin-left: 4px;}  === className="ml-4"
9. { margin-right: 4px;}  === className="mr-4"

10. { padding-bottom: 4px;}  === className="pb-4"
11. { padding-top: 4px;}  === className="pt-4"
12. { padding-left: 4px;}  === className="pl-4"
13. { padding-right: 4px;}  === className="pr-4"

14. {padding-inline: 4px} === classname = "px-4" (Padding in x axis is 4 px)

## Tailwind VS Code Extension
- Tailwind CSS IntelliSense gives us superpower to use TailwindCSS
- Just type what you want in className="" and it will give suggestion.

## Tips:
- Always start with margin and padding.

## Modify Tailwind Classes
- If we want to give a hardcoded value for a property use w-[250px].

## Problems with Tailwind
- It is a problem with using the prebuild components because there are too much classes called in the tailwind.

## Advantages of Tailwind CSS
- It is very lightweight, since the parcel or bundle will use only that css property which are required in the 
  web pages, it will not take all the 1000's of classes.
- There will not be redundant CSS in the code, there will be only be required classes with the help of tailwind.

## There are classes for every possible thing which one can think of.
1. Small & Large devices:-
- For different devices CSS can change with the help of Tailwind classes.
- sm:bg-green-50 lg:bg-red-100

2. Hover and Focus States:-
- hover:bg-gray-200

3. Dark Mode Available :-
- Websites should have a dark mode.
- dark:bg-gray-200

4. Write CSS on the fly in the className

## NOTE:-
- DO NOT APPLY THE ["grid grid-n-cols-4"] IN THE COLS and ROWS.
- USE flex flex-wrap