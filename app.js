
let btn = document.querySelector("Button");

let url2 = "https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log(e);
    }
}

// btn.addEventListener("click", async ()=> {
//    let fact = await getfacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https:catfact.ninja/fact";


// async function getfacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log(e);
//     }
// }