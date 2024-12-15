//Start For questions.
// for1: k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi dastur.
let k = 3; 
let n = 5; 
console.log("1масала :");
if (n > 0) {
    for (let i = 0; i < n; i++) {
        console.log(k);
    }
} else {
    console.log("n soni musbat bo'lishi kerak!");
}

// for2: Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, ..., 0.9, 1 kg konfetni narxini chiqaruvchi dastur.

let prizeKg = 2000; 
console.log("2масала :");
for (let i = 1; i <= 10; i++) {
    let weight = i / 10; 
    let cost = weight * prizeKg;
    console.log(weight + " kg konfet narxi: " + cost + " sum");
}

// 3-масала: n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi dastur tuzilsin:
// S = n^2 + (n+1)^2 + (n+2)^2 + ... + (2*n)^2

n = 5;
let sum = 0;
console.log("3масала :");
if (n > 0) {
    for (let i = n; i <= 2 * n; i++) {
        sum += i * i;
    }
    console.log("Yigindi: " + sum);
} else {
    console.log("n soni musbat bo'lishi kerak");
}

// 4-масала: N butun soni berilgan. Quyidagi yig'indini chiqaruvchi dastur tuzilsin:
// 1^N + 2^(N-1) + ... + N^1

n = 5;
sum = 0;
console.log("4-масала ечими:");
for (let i = 1; i <= n; i++) {
    let term = Math.pow(i, n - i + 1);
    sum += term;
}
console.log("Yig'indi: " + sum);

// 5-масала: A va B butun sonlari berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi dastur tuzilsin.
// Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.

let A = 2; // Boshlang'ich son
let B = 4; // Tugash soni
console.log("5vfcfkf:");
if (A < B) {
    for (let i = A; i <= B; i++) {
        for (let j = 0; j < i; j++) {
            console.log(i);
        }
    }
} else {
    console.log("A soni B dan kichik bo'lishi kerak!");
}

// 6-масала: Sonning bo'luvchilarini topish:

let number = 12; 
console.log("6масала :");
console.log(number + " sonining bo'luvchilari:");
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}
