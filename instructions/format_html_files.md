### Step-by-Step Instructions for Setting Up `djlint` to Format HTML Templates on the whole Django project

#### 1\. **Navigate to Your Project Directory**

Start by navigating to the root of your Django project directory. Replace `<django_startup_project_name>` with the actual name of your Django project.

```bash

cd E:\projects\<django_startup_project_name>
```

#### 2\. **Install `djlint`**

Install `djlint` using `pip` to enable formatting of Django HTML templates:

```bash
pip install djlint
```

This installs `djlint` into your virtual environment, making it available for use.

#### 3\. **Verify the Installation**

Check if `djlint` was installed correctly by running:

```bash
djlint --version
```

You should see the installed version number of `djlint`.

#### 4\. **Format All HTML Templates in Your Django Project**

Run the following command to format all HTML files in your project, including all subdirectories:

```bash
djlint . --reformat
```

This command:
-------------

*   Formats all HTML files recursively starting from the current directory (`.`).

#### 5\. **Optional: Add a Script to `package.json`**

If you want to set up a consistent way to run `djlint` with npm, add a script to `package.json`.

1.  Open or create a `package.json` file in the root of your project.
    
2.  Add the following under `"scripts"`:
    
```json
{
  "scripts": {
    "htmlformat": "djlint . --reformat"
  }
}
```

Now you can run the formatting script by typing:

```bash
npm run htmlformat
```

This command will trigger the reformatting of all HTML files in your project.

#### 6\. **Customize the Formatting (Optional)**

You can customize how `djlint` formats your templates. Some common customizations include:

*   **Indentation**:
    
    ```bash
    djlint . --reformat --indent 2
    ```
    
    This sets the indentation to 2 spaces.
    
*   **Ignore Specific Files/Directories**:
    
    ```bash
    djlint . --reformat --ignore core_django/ignored_directory/
    ```
    
    Use this to exclude certain directories from formatting.
    
*   **Check for Formatting Issues Without Reformatting**:
    
    ```bash
    djlint . --check
    ```
    
    This will check if your HTML files conform to `djlint` rules without modifying them.
    

### Recap of Steps:

1.  **Navigate to Project Root**:
    
    ```bash
    cd E:\projects\<django_startup_project_name>
    ```
    
2.  **Install `djlint`** :
    
    ```bash
    pip install djlint
    ```
    
3.  **Format All HTML Files**:
    
    ```bash
    djlint . --reformat
    ```
    
4.  **Optional: Add `htmlformat` Script to `package.json`** :
    
```json
{
  "scripts": {
    "htmlformat": "djlint . --reformat"
  }
}
```
    
5.  **Optional: Customize the Command** (e.g., indentation, ignoring directories, or just checking).
    

### Example of `package.json`:

If you decide to include the optional npm script, your `package.json` will look like this:

```json
{
  "scripts": {
    "htmlformat": "djlint . --reformat"
  }
}
```

### Summary of Changes:

*   The command to format all the html files in the entire django project is `npm run htmlformat`.
*   The project path is generalized to `"E:\projects\<django_startup_project_name>"`.
* 