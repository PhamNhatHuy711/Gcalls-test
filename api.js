
const apiUrl = 'https://api.gcalls.co/api/v1/readAllAgents';
const apiKey = '8fbf78106f7c40d880fcf6d4a6d88b46'; // Thay thế bằng API key thực tế

const options = {
    method: 'POST',
    headers: {
        'Accept': 'text/csv',
        'x-apikey': apiKey,
    }
};

fetch(apiUrl, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok (status ${response.status})`);
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
