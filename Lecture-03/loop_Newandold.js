const names = ['Justin', 'Sarah', 'Christopher'];

// 1. แบบดั้งเดิม (Traditional for loop)
// ต้องระบุ index (i) และเงื่อนไขเอง
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 2. ใช้ .forEach() กับ Arrow Function (นิยมที่สุด)
// สั้น กระชับ ไม่ต้องจัดการเรื่องลำดับ (index) เอง
names.forEach(name => {
    console.log(name);
});

// 3. ใช้ .forEach() กับ Named Function
// แยกฟังก์ชันออกมาข้างนอกเพื่อให้เรียกใช้ซ้ำได้
names.forEach(myFunction);

function myFunction(name) {
    console.log(name);
}

// 4. แบบ for...of
// อ่านง่ายที่สุด เหมาะสำหรับการดึง 'ค่า' ออกมาโดยตรง
for (let name of names) {
    console.log(name);
}