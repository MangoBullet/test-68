const furniture = ['Table', 'Chairs', 'Couch'];



gbt
// 1. ใช้ forEach เพื่อเข้าถึงคำแต่ละคำใน Array
furniture.forEach(item => {  
    // 2. ใช้ .split('') เพื่อแยกคำ (String) ออกเป็น Array ของตัวอักษร
    const letters = item.split('');  
    // 3. ใช้ forEach อีกครั้งเพื่อพิมพ์ตัวอักษรออกมาทีละตัว
    letters.forEach(char => {
        console.log(char);
    });
});
