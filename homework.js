function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * 901) + 100; // Генеруємо випадкове число в діапазоні від 100 до 1000
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних до непарних: ${evenPercentage.toFixed(2)}% парних та ${oddPercentage.toFixed(2)}% непарних`);
}