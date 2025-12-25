const guests = ['Alice', 'Bob', 'Charlie', 'David'];
let i = 0; // กำหนดตัวแปร index เริ่มต้น

while (i < guests.length) { //
    if (guests[i] === 'Charlie') {
        console.log("Found Charlie!"); //
        break; // หยุดการทำงานของ Loop ทันทีเมื่อเงื่อนไขเป็นจริง
    }
    i++; // เพิ่มค่า index เพื่อตรวจตัวถัดไป
}

const message = "Hello World"; //
const vowels = "aeiou"; // กำหนดชุดตัวอักษรที่เป็นสระ

// ใช้ message.toLowerCase() เพื่อทำให้เป็นตัวพิมพ์เล็กทั้งหมดก่อนเช็ค
for (const char of message.toLowerCase()) { //
    if (vowels.includes(char)) { // ตรวจสอบว่าตัวอักษรนั้นอยู่ในกลุ่มสระหรือไม่
        console.log(char); //
    }
}
