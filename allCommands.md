tsc --init ---------This will create a tsconfig file

Now change rootDir and outDir to src and build

Now you can run "tsc" this will look into the src folder and put the result in build folder

tsc -w will go in watch mode

npm init -y

npm i nodemon concurrently // this will allow us to run multiple scripts at the same time

Now we will make changes to package.json file

"scripts": {
"start:build":"tsc -w",
"start:run":"nodemon build/index.js",
"start": "concurrently npm:start:\*"
},
