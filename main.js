


// while 3

// function roomsize(number) {
//     let roomNumber = 0;

//     while (number !== 0) {
//         number = Math.floor(number / 10);
//         roomNumber++;
//     }

//     return roomNumber;
// }

// var number = 59133927;
// var result = roomsize(number);

// console.log(`Number: ${number}`);
// console.log(`Room Number: ${result}`);


// while 4

// function flasereturn(son) {
//     let teskariSon = 0;

//     while (number !== 0) {
//         let qoldiq = number % 10;
//         teskarinumber = teskarinumber * 10 + qoldiq;
//         number = Math.floor(number / 10);
//     }

//     return teskarinumber;
// }

// var number = 45789;
// var natija = flasereturn(number);

// console.log(`number: ${number}`);
// console.log(`Teskari number: ${natija}`);


// while 5

// function numbercheck(number) {
//     let orginalNumber = number;
//     let teskariSon = 0;

//     while (number !== 0) {
//         let qoldiq = number % 10;
//         teskariSon = teskariSon * 10 + qoldiq;
//         number = Math.floor(number / 10);
//     }

//     return orginalNumber === teskariSon;
// }

// var number = 1234321;
// var result = numbercheck(number);

// console.log(`Son: ${number}`);
// console.log(`pl son: ${result}`);





// while 12

// function mainresult(A, B) {
//     let mainhero = "";

//     while (A > B) {
//         mainhero += B;
//         A -= B;
//     }

//     console.log("Main:", mainhero);
// }

// let A = 17;
// let B = 3;

// mainresult(A, B);


// while 13

// function joylashtirishMumkinligi(A, B) {
//     var joylarSoni = 0;

//     while (A >= B) {
//         A -= B;
//         joylarSoni++;
//     }

//     console.log("Joylashtirish mumkinligi:", joylarSoni);
// }

// var A = 17;
// var B = 3;

// joylashtirishMumkinligi(A, B);



// while 14

// function darajaTekshirish(n) {
//     while (n > 0) {
//         if (n % 3 === 0) {
//             console.log("3 - ning darajasi");
//         } else {
//             console.log("3 - ning darajasi emas");
//         }
//         break;
//     }
// }

// var n = 27; 
// darajaTekshirish(n);



// while 15

// function bolishsizNatija(n, m) {
// var butunQism = Math.floor(n / m);
// var qoldiq = n % m;

// console.log("Butun qism:", butunQism);
// console.log("Qoldiq:", qoldiq);
// }

// var n = 17;
// var m = 3;

// bolishsizNatija(n, m);


// while 16

// function teskariTartibdaChiqar(n) {
//     while (n > 0) {
//         var qoldiq = n % 10;
//         console.log(qoldiq);
//         n = Math.floor(n / 10);
//     }
// }

// var n = 12345;
// teskariTartibdaChiqar(n);


// while 17

// function yigindisiVaOxirgiRaqam(n) {
//     var yigindi = 0;
//     var oxirgiRaqam;

//     while (n > 0) {
//         var qoldiq = n % 10;
//         yigindi += qoldiq;
//         n = Math.floor(n / 10);
//         oxirgiRaqam = qoldiq;
//     }

//     console.log("Raqamlar yig'indisi:", yigindi);
//     console.log("Raqamlari soni:", oxirgiRaqam);
// }

// var n = 12345;
// yigindisiVaOxirgiRaqam(n);


// while 18

// function ikkiRaqamBor(n) {
//     var ikkiRaqamBor = false;

//     while (n > 0) {
//         var raqam = n % 10;

//         if (raqam === 2) {
//             ikkiRaqamBor = true;
//             break; 
//         }

//         n = Math.floor(n / 10);
//     }

//     if (ikkiRaqamBor) {
//         console.log("Berilgan sonda 2 raqami bor");
//     } else {
//         console.log("Berilgan sonda 2 raqami yo'q");
//     }
// }

// var n = 12345;
// ikkiRaqamBor(n);


// while 19

// function toqRaqamBor(n) {
//     var toqRaqamBor = false;

//     while (n > 0) {
//         var raqam = n % 10;

//         if (raqam % 2 !== 0) {
//             toqRaqamBor = true;
//             break; 
//         }

//         n = Math.floor(n / 10);
//     }

//     if (toqRaqamBor) {
//         console.log("Berilgan sonda toq raqam bor");
//     } else {
//         console.log("Berilgan sonda toq raqam yo'q");
//     }
// }

// var n = 12345;
// toqRaqamBor(n);


// while 20

// function palindromikSonTekshirish(son) {
//     var asalSon = son.toString();
//     var palindromik = true;

//     var i = 0;
//     var j = asalSon.length - 1;

//     while (i < j) {
//         if (asalSon[i] !== asalSon[j]) {
//             palindromik = false;
//             break; 
//         }
//         i++;
//         j--;
//     }

//     return palindromik;
// }

// console.log(palindromikSonTekshirish(1345431)); 
// console.log(palindromikSonTekshirish(45788754)); 
// console.log(palindromikSonTekshirish(12321)); 
// console.log(palindromikSonTekshirish(12345));   


// while 21

// function tubSonTekshirish(n) {
//     var tub = true;

//     if (n < 2) {
//         tub = false;
//     } else {
//         var i = 2;
//         while (i <= Math.sqrt(n)) {
//             if (n % i === 0) {
//                 tub = false;
//                 break;
//             }
//             i++;
//         }
//     }

//     if (tub) {
//         console.log(n + " tub son");
//     } else {
//         console.log(n + " tub emas");
//     }
// }

// tubSonTekshirish(17);  
// tubSonTekshirish(20);  
// tubSonTekshirish(1);   
// tubSonTekshirish(29); 
