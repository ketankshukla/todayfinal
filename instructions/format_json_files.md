
Step-by-Step Process to Clean and Format JSON Files in a Django Project
-----------------------------------------------------------------------

### Prerequisites:

*   **Node.js** installed
*   **Prettier** for formatting JSON
*   A working **Django project** with JSON files scattered across different directories.

* * *

### Step 1: Install Dependencies

To begin, install the necessary dependencies to handle JSON formatting.

1.  Navigate to the root of your Django project:
    
    ```bash
    cd path/to/your/django/project
    ```
    
2.  Install Prettier and PostCSS (for handling other formats like CSS):
    
    ```bash
    npm install --save-dev prettier postcss postcss-strip-inline-comments postcss-cli
    ```

### Step 2: Create a JavaScript Script to Clean and Format JSON Files

Next, create a script that will traverse the entire project and clean up any JSON files by removing blank lines and formatting them properly using Prettier.

1.  In the root of your project, create a new file called `test_prettier.js`:
    
    ```bash
    touch test_prettier.js
    ```
    
2.  Open `test_prettier.js` and add the following code:
    
    ```js
    
    const fs = require('fs');
    const path = require('path');
    const prettier = require('prettier');
    
    // Function to manually remove blank lines
    const removeBlankLines = (data) => {
      return data
        .split('\n')
        .filter(
    line => line.trim().length > 0)  // Keep only non-empty lines
        .join('\n');
    };
    
    // Function to remove blank lines and format JSON
    const removeBlankLinesAndFormat = (filePath) => {
      try {
        const jsonData = fs.readFileSync(filePath, 'utf8');
    
        // First, remove blank lines manually
        const cleanedData = removeBlankLines(jsonData);
    
        // Now, format the cleaned JSON with Prettier
        prettier
          .format(cleanedData, { parser: 'json', tabWidth: 2, useTabs: false })
          .then(
    formattedData => {
            // Write the formatted JSON back to the file
            fs.writeFileSync(filePath, formattedData, 'utf8');
            console.log(`Formatted and cleaned JSON saved to ${filePath}`);
          })
          .catch(
    error => {
            console.error('Error formatting JSON with Prettier:', error);
          });
      } catch (err) {
        console.error(`Error processing file: ${filePath}`, err);
      }
    };
    
    // Function to recursively search for all JSON files and skip node_modules
    const findJsonFiles = (dir) => {
      const files = fs.readdirSync(dir);
    
      files.forEach(
    file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
    
        if (stats.isDirectory()) {
          if (file === 'node_modules') return;  // Skip node_modules directory
          findJsonFiles(filePath);  // Recurse into directories
        } else if (filePath.endsWith('.json')) {
          removeBlankLinesAndFormat(filePath);  // Process JSON files
        }
      });
    };
    
    // Start from the root directory
    findJsonFiles(path.resolve(__dirname));
    ```
    

This script will:
-----------------

*   Recursively scan your project for JSON files.
*   Remove any blank lines from the JSON files.
*   Format the files using Prettier with proper indentation and structure.



### Step 3: Update `package.json`

Next, update your `package.json` to add a new script for formatting JSON files.

1.  Open your `package.json` file and update the `scripts` section:
    
```json
{
  "scripts": {
    "cssformat": "prettier --write \"**/*.css\" && postcss \"**/*.css\" --replace",
    "htmlformat": "djlint . --reformat",
    "jsonformat": "node test_prettier.js",  
    "format": "npm run cssformat && npm run htmlformat && npm run jsonformat"
  }
}
```
    
2.  This allows you to format all JSON files by simply running the `jsonformat` script.


### Step 4: Run the Script

To clean and format all JSON files in the project, run the following command:

```bash
npm run jsonformat
```

This will:
----------

*   Traverse the project.
*   Clean up and format all JSON files, ignoring the `node_modules` directory.


### Step 5: Format All Files in the Project

If you want to format **all files** (CSS, HTML, JSON) in one go, you can use the `format` script. This will run the formatting scripts for CSS, HTML, and JSON:

```bash
npm run format
```


### Additional Notes:

*   **Prettier Configuration**: If you have a `.prettierrc` file or a Prettier config, it will respect those settings during the formatting process.
*   **Error Handling**: If there are issues during formatting, the script will log errors to help with debugging.

* * *

That's it! Now you have a clean, organized way to format all your JSON files (and other formats) in your Django project. You can save this process as a markdown file for future reference.