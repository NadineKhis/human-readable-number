module.exports = function toReadable (number) {
    let units = {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
        }
    let dozens = {
            1: "ten",
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety",
            10: "hundred",
        }
    if (number < 20) {
            return units[number]
        }
    if (number < 100) {
            let d = Math.floor(number / 10);
            let u = number % 10
            if (u === 0) {
                return dozens[d]
            } else {
                return `${dozens[d]} ${units[u]}`
            }
        }
    if (number < 1000) {
            let h = Math.floor(number / 100);
            let d = (Math.floor(number / 10))%10;
            let u = number % 10;
            if (d !== 0 && u !== 0) {
                if (d === 1) {
                    return `${units[h]} ${dozens[10]} ${units[u + 10]}`
                }
                else {
                    return `${units[h]} ${dozens[10]} ${dozens[d]} ${units[u]}`
                }
            }
            if (d === 0 && u === 0) {
                return `${units[h]} ${dozens[10]}`
            }
            if (d !== 0 && u === 0) {
                return `${units[h]} ${dozens[10]} ${dozens[d]}`
            }
            if (d === 0 && u !==0) {
                return `${units[h]} ${dozens[10]} ${units[u]}`
            }
        }
}

