const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

// Function to manually remove blank lines
const removeBlankLines = (data) => {
  return data
    .split('\n')
    .filter(line => line.trim().length > 0)  // Keep only non-empty lines
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
      .then(formattedData => {
        // Write the formatted JSON back to the file
        fs.writeFileSync(filePath, formattedData, 'utf8');
        console.log(`Formatted and cleaned JSON saved to ${filePath}`);
      })
      .catch(error => {
        console.error('Error formatting JSON with Prettier:', error);
      });
  } catch (err) {
    console.error(`Error processing file: ${filePath}`, err);
  }
};

// Function to recursively search for all JSON files and skip node_modules
const findJsonFiles = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
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

// Start from the root directory (you can adjust the starting path if needed)
findJsonFiles(path.resolve(__dirname));
