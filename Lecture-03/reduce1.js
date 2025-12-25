const numbers = [1, 2, 3, 4]; //

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // นำค่าสะสมมาบวกกับค่าปัจจุบันไปเรื่อยๆ
});

// ผลลัพธ์: sum คือ 10
