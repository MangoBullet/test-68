const names = ['Taylor', 'Donald', 'Natasha'];

// การใช้ .map() เพื่อแปลงข้อมูลใน Array เดิมให้เป็น Array ใหม่
const announcements = names.map(member => {
    return member + ' joined the contest.';
});

console.log(announcements);