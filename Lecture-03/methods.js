const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,
    
    checkOut: function() {
        this.isAvailable = false; // 'this' อ้างอิงถึง object book
    },
    
    checkIn: function() {
        this.isAvailable = true;
    }
};
console.log('Title: ${book.title}');
console.log(book.isAvailable); // true
book.checkOut();               // เรียกใช้ method
console.log(book.isAvailable); // false
book.checkIn();                // เรียกใช้ method
console.log(book.isAvailable); // true