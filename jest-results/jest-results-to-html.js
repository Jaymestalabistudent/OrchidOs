const { exec } = require('child_process');
const fs = require('fs');

// Run Jest and save results to a JSON file
exec('npx jest --json --outputFile=test-results.json', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error running Jest: ${error.message}`);
        return;
    }
    console.log('Jest tests completed. Results saved in test-results.json.');

    // Read the JSON results
    const jsonData = fs.readFileSync('test-results.json', 'utf8');
    const results = JSON.parse(jsonData);

    // Create an HTML table from the JSON data
    const htmlTable = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Jest Test Results</title>
        </head>
        <body>
            <h1>Jest Test Results</h1>
            <table>
                <thead>
                    <tr>
                        <th>Test Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${results.testResults.map(test => `
                        <tr>
                            <td>${test.name}</td>
                            <td>${test.status}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </body>
        </html>
    `;

    // Write the HTML table to a file
    fs.writeFileSync('test-results.html', htmlTable, 'utf8');
    console.log('Converted JSON to HTML. Results saved in test-results.html.');
});
