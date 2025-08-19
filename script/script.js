/***********************
 ✅ JavaScript Tips & Tricks
 সবকিছু বাংলায় কমেন্ট আকারে
************************/


// 1️⃣ Array থেকে falsy value remove করা
// falsy value গুলো হলো: false, NaN, 0, null, undefined, ''
let miscellaneous = ['Munaa', false, 'Abir', NaN, 0, undefined, null];
let names = miscellaneous.filter(Boolean);  
console.log(names); // ['Munaa','Abir','tasnia']

// 👉 বাস্তব ব্যবহার: Form input validation (যখন খালি বা ভুল value বাদ দিতে হবে)



// 2️⃣ Boolean() দিয়ে সত্য-মিথ্যা চেক করা
console.log(Boolean(5 < 6));     // true (৫ ছোট ৬ এর চেয়ে)
console.log(Boolean(100 > 200)); // false (১০০ বড় না ২০০ এর চেয়ে)
console.log(Boolean(NaN));       // false
console.log(Boolean(undefined)); // false

// 👉 বাস্তব ব্যবহার: শর্ত মিলছে কিনা তা যাচাই করা (যেমন: login success/fail)



// 3️⃣ Double NOT (!!) দিয়ে value কে Boolean এ convert করা
console.log(!!"Munna"); // true (কারণ "Munna" ফাঁকা string না)
console.log(!!"");      // false (ফাঁকা হলে false)

// 👉 বাস্তব ব্যবহার: User input খালি আছে কিনা চেক করতে



// 4️⃣ Array resize করা
const animals = [1, 2, 3, 4];
animals.length = 2;  
console.log(animals); // [1, 2]

// 👉 বাস্তব ব্যবহার: Pagination বা Data limit (যেমন একসাথে অনেক ডেটা না দেখানো)



// 5️⃣ Multi-Dimensional Array flatten করা
let multiDimentionArray = [1, [10, [100, 101], 11], 2, 3, [30, 31]]
console.log(multiDimentionArray.flat());          // শুধু এক লেভেল ফ্ল্যাট করে
console.log(multiDimentionArray.flat(Infinity)); // Infinity দিলে সব লেভেল ফ্ল্যাট

// 👉 বাস্তব ব্যবহার: API থেকে nested JSON data এলে flat করে কাজ করা সহজ হয়



// 6️⃣ Short Conditional (&& এবং || ব্যবহার করা)
let name = "Munna";

// && ব্যবহার করলে শর্ত true হলে কাজ করবে
name === "Munna" && console.log("Good");

// || ব্যবহার করলে শর্ত false হলে কাজ করবে
name === "Munna" || console.log("Bad");

// 👉 বাস্তব ব্যবহার: ছোটখাটো শর্তে if-else না লিখে কোড clean রাখা



// 7️⃣ String replace (সব জায়গায় একসাথে পরিবর্তন করা)
const quote = "React is a Js framework and this framework is the most popular front-end framework right now"
console.log(quote.replace(/framework/g, "library"));

// 👉 বাস্তব ব্যবহার: CMS বা Blog-এ Search & Replace সিস্টেম



// 8️⃣ Variable নামসহ Log করা (smart debugging)
const library1 = 'JQuary';
const library2 = "React";

// সাধারণভাবে log করা
console.log(`library1 - ${library1}`);
console.log(`library2 - ${library2}`);

// আরও স্মার্টভাবে (object আকারে নামসহ দেখাবে)
console.log({ library1 });
console.log({ library2 });

// 👉 বাস্তব ব্যবহার: Debugging করার সময় কোন variable এর মান কোনটা সহজে বোঝা



// 9️⃣ Performance measure করা (কোড কত সময় নিচ্ছে তা মাপা)
const startTime = performance.now();

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const endTime = performance.now();
console.log("মোট সময় লাগলো: ", endTime - startTime, 'ml');

// 👉 বাস্তব ব্যবহার: বড় ডেটা প্রসেসিং বা লুপ optimization করতে কাজে লাগে
