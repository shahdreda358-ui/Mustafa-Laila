const message = `
 لو هختار صورة واحدة بس من كل الصور دي، هختار الصورة اللي لسه مجتش.. الصورة اللي هتجمعنا وإحنا بنبص على كل اللي فات ونقول: ياااه، إحنا عدينا بكل ده سوا ❤️
أنا مش عايزك تكوني أجمل ذكرى في حياتي.. أنا عايزك تكوني كل حياتي وذكرياتي وكل اللي جاي.
بحبك، ونفسي أفضل الشخص اللي تختاريه كل يوم من جديد.. لحد آخر يوم في عمرنا ❤️💍"
بحبك يا أحلي حاجه دخلت حياتي ودنيتي من ٣ ث وانتي ف عقلي وقلبي وعمرك ما بتغيبي عنهم انتي دنيتي وحياتي وبنتي اللي كبرت قدام عيني 
ربنا ميحرمني منك ويخليكي ليا يارب ونفضل عمرنا كله سوا لحد ما تبقي أحلي مامي ف الدنيا 
♥️♥️🌏 وف النهايه يعني 
انا عمرى ما بزعل ولا هزعل منك لان انتي راحتي ووجودك ف راحتي كدا كدا ♥️♥️♥️🥹 وان انتي أهم هدف وتارجيت في حياتي والحمدلله حققت جزء كبير منه والجزء الأكبر لما تبقي مكتوبة ب أسمي ♥️♥️🫂`;

const words = message.trim().split(/\s+/);

let index = 0;
const typingText = document.getElementById("typingText");
const nextBtn = document.getElementById("nextBtn");

function typeWord() {

    if (index < words.length) {

        typingText.innerHTML += words[index] + " ";

        index++;

        setTimeout(typeWord, 200);

    } else {

        nextBtn.style.display = "inline-block";

    }
}

window.onload = typeWord;


function goNext() {
    window.location.href = "counter.html";
} 
