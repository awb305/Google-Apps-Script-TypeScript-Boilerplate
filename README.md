# Google App Script Boilerplate

Boilerplate for using TypeScript with Google Apps Script. Code is bundled using [esbuild](https://esbuild.github.io/).

## Build pipeline

[Clasp](https://developers.google.com/apps-script/guides/clasp) is used to push files to the google servers so you can run it against your google properties (such as Google Sheets).

Read below to see how I manage the build pipeline.

Read here 👉 [Developing Google app scripts with typescript](https://github.com/google/clasp/blob/master/docs/typescript.md) for more info on developing Google App scripts with Typescript.  

In this repo I utilize [esbuild](https://esbuild.github.io/) to bundle all the files into a single file **/dist/index.js**. Changes to this file are automatically pushed to your hosted Google App Script App on save.

## Clasp Setup

1. Install clasp globally on your machine 👉 https://developers.google.com/apps-script/guides/clasp

2. Login 

```
clasp login
```

4. Create a new app  and follow prompts.

```
clasp create [scriptTitle]
```

4. Move the appscript.json into the **./dist** folder 
   
```
mv ./appsscript.json ./dist
```

5. Change the *rootDir* to **./dist** in the **.clasp.json** file:
   
```
"rootDir": "./dist" 
```

6. Remove the following in your .gitignore file:

```
# Remove when creating a new project
.clasp.json
./dist/appsscript.json
```

## Development Setup

1. Run ```yarn```
2. Run ```yarn watch``` to both build your .ts files and continuously push changes to your hosted Google App Script App. 

## Environment Variables  

[Google Apps Script Properties Docs](https://developers.google.com/apps-script/guides/properties)

### Manage script properties manually
You can manually add up to fifty custom properties, as strings in key-value pairs, from the project settings page. To add more than fifty properties, you need to add them programmatically using the methods described above in Saving data. When you set script properties from the project settings page, you can’t reference script variables.

#### Add script properties
1. Open your Apps Script project.
2. At the left, click Project Settings The icon for project settings.
3. To add the first property, under Script Properties click Add script property.
4. To add second and subsequent properties, under Script Properties click Edit script properties > Add script property.
5. For Property, enter the key name.
6. For Value, enter the value for the key.
7. (Optional) To add more properties, click Add script property.
8. Click Save script properties.





