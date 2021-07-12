# Dashclient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Mock Server

The mock server is a json-server file called db.json into api folder, you need run `npm run server` to serve data to dashclient application, run this command before `npm run dev`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## About this project

I'm use a maintanible structure to separate models, components, pages, service and styles on application and a useless folder api to into project to mock data, to list users I create a table with structural directive *ngFor with one collumn to action, if the user click at action I redirect the user to right component using routes with params, passing data to children component from parent by Inputs, and the last but not the least, I'm use reactive form to build a form group with form control names.

## Time of development
I need to 7 hours to create this project, I create a initial concept at figma [and you can see the concept here](https://www.figma.com/file/jtNHWNi9YEUHR7ZCxIdtpk/List?node-id=9%3A32), after I wrote the app using [MirageJS](https://miragejs.com/) and had a some of issues with MirageJS and Angular than I rewrote the app with json-server.
