1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

   Ans: getElementById, getElementsByClassName এবং querySelector / querySelectorAll এর পার্থক্য হলো:

   - getElementById("id") => নির্দিষ্ট কোনো tag এর মধ্যে একক ইউনিক id ধরে নির্দিষ্ট একটা element access করতে পারে।

   - getElementsByClassName("class") => একই ধরনের কোনো tag এর মধ্যে একই class থাকা সব element কে নিয়ে একটা HTMLCollection এর array দিতে পারে।

   - querySelector("selector") => এখানের selector টি প্রথম যে element সিলেক্টরের (id বা class বা tag) সাথে মেলে সেটা access করতে পারে।

   - querySelectorAll("selector") => এখানের selector টি যতগুলো element সিলেক্টরের (id বা class বা tag) সাথে মেলে সবগুলো element কে নিয়ে NodeList আকারে দিতে পারে।

2. How do you create and insert a new element into the DOM?

   Ans: নিচের ৩ টি ধাপ অনুসারে নতুন element তৈরি করা এবং DOM এ যোগ করা যায়:

   1. document.createElement("tagName") => নতুন element তৈরি করতে হবে।

   2. element.setAttribute("name", "value") => অ্যাট্রিবিউট বানাতে হবে।

   3. parent.appendChild(newElement) => DOM এ যুক্ত করতে হবে।

3. What is Event Bubbling and how does it work?

   Ans: কোনো একটি event প্রথমে যে element এ ট্রিগার হয় সেখান থেকে শুরু করে ধাপে ধাপে উপরেরদিকে তার parent, তারপর আবার তার parent, তারপর আবার তার parent... এভাবে ধারাবাহিকভাবে উপরে উঠতে উঠতে একেবারে document পর্যন্ত চলে যায়। এটাকেই Event Bubbling বলে।

4. What is Event Delegation in JavaScript? Why is it useful?

   Ans: Event Delegation এর মাধ্যমে parent element এ শুধু একটি event listener বসিয়ে তার child element গুলোর event handle করা যায়। এটার উপকারিতা হলো:

   - অনেকগুলো child element থাকলেও আলাদা আলাদা ভাবে event handle করতে হয় না।

   - Performance এর জন্য খুব ভালো হয়। Code কম লাগে। DOM পরিবর্তন হলেও কাজ করে।

5. What is the difference between preventDefault() and stopPropagation() methods?

   Ans: preventDefault() এবং stopPropagation() এর মধ্যে পার্থক্য হলো:

   - preventDefault() => কোনো element এর default কাজ বন্ধ করে।

   - stopPropagation() => কোনো event কে তার parent element এ উঠতে (bubble / capture হতে) দেয় না।
