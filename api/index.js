// /*practice 1
// 1.create an input and a button in html 
// 2. capture  the input value in a function triggered on the button 
// 3. make an API request using the input value then display the result
//  */
const userInput = document.getElementById('userInput');
const fetchButton = document.getElementById('fetchButton');
const resultDiv = document.getElementById('result');

fetchButton.addEventListener('click', async () => {
  const username = userInput.value;
  
  try {
    const response = await fetch(`${username}`);
    const data = await response.json();
    resultDiv.textContent = `Username: ${data.login}, 
    Name: ${data.name}, Public Repos: ${data.public_repos}`;
  } catch (error) {
    resultDiv.textContent = `Error: ${error.message}`;
  }
});

// task 2
// 1. define the function with the user ID parameter 
// 2. use fetch() with method DELETE and the users ID in the URL 
// 3. log the response status
//  */
async function deleteUser(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        console.log('User deleted successfully');
      } else {
        console.error('Error deleting user:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


// /*practice 3
// use promise.all to handle multiple fetch() request 
// 2.combine the results and display them together
//  */
async function fetchData() {
    const [response1, response2] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/users/2')
    ]);
  
    const data1 = await response1.json();
    const data2 = await response2.json();
  
    console.log(data1, data2);
  }
  
  fetchData();

/*practice 4
1.Define an async function to handle the fetch request
2. use fetch with the specified url(API endpoint).
3. call the .then() on the promises returned by fetch() to extract
the JSON data
4.log the data to the console
 */
let api_url ="https://jsonplaceholder.typicode.com/users"
async function fetchData() {
    try {
     const response = await fetch(api_url);
     const data = await response.json();
     console.log(data);
       
    } catch (error) {
        console.log(error);
    }
}
fetch((api_url))
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

//   /*practice 5
//   1. define an async function for the request
//   2.use fetch() with the endpoint, setting the method to POST 
//   3.include headers to specify content-type:application/json 
//   4.convert your data to json format with json.stringify and 
//   pass it in the body option 
//   5. log the response
//    */
async function postData(api_url, data) {
    try {
      const response = await fetch(api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const dataToSend = {
    name: 'Reuben luka',
    email: 'reubenluka555@gmail.com'
  };
  postData(api_url, dataToSend);