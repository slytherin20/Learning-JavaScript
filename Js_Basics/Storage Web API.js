// There are three such APIs.These are- LocalStorage, Session Storage and Cookie.
//LocalStorage has maximum storage capacity.
//Session Storage has about 5MB.
//All three need to have same origin by origin we mean- Protocol(HTTP,HTTPs),domain(google.com,images.google.com)
//Port(8080,8081)
//LocalStorage exist for as long as we want but session storage clears when we close tab.

const user={name:"Slytherin"};
const storage = Window.localStorage;
storage.setItem("user",JSON.stringify(user));
storage.setItem("hello","world");
const item = storage.getItem("user");
console.log(JSON.parse(item));
storage.setItem("Wow","man");
storage.removeItem("Wow");
console.log(storage.key(1));
storage.clear();