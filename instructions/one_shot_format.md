### Combine the `cssformat` and `htmlformat` commands into a single command called `format` in your `package.json`. 

The new `format` command will run both formatting steps for CSS and HTML sequentially.

Here’s how you can update the `scripts` section in your `package.json`:

### Updated `package.json` Scripts Section:

```json
"scripts": {
    "cssformat": "prettier --write \"**/*.css\" && postcss \"**/*.css\" --replace",
    "htmlformat": "djlint . --reformat",
    "format": "npm run cssformat && npm run htmlformat"
}
```

### Explanation:

*   **`cssformat`** : Formats the CSS files using Prettier and PostCSS.
*   **`htmlformat`** : Formats the HTML files using `djlint`.
*   **`format`** : Combines both commands (`cssformat` and `htmlformat`) using `npm run` so that both CSS and HTML are formatted in one command.

### To Run the Combined Command:

Simply run:

```bash
npm run format
```

This will first format your CSS files and then format the HTML templates in your entire django project, all with a single command.

Let me know if this works for you!