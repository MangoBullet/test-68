const bookObj = {
  title: "Becoming",
  author: "Michelle Obama",
  isAvailable: false
};

const bookJSON = JSON.stringify(bookObj);

console.log(bookJSON); 
console.log(typeof bookJSON); 


const receivedBookObj = JSON.parse(bookJSON);

console.log(receivedBookObj.author); 
console.log(typeof receivedBookObj); 