const startTime = Date.now();
function someHeavyTask() {
    for (let i = 0; i < 4e7; i++) {
        Math.sqrt(i);
    }
    

}
const endTime = Date.now();
const duration = endTime - startTime;
console.log(`ฟังก์ชันใช้เวลาทำงาน: ${duration} มิลลิวินาที`);