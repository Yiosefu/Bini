// THIS IS FOR PTC SLIDER
let index = 0;
const about_who = [
    "ABOUT BINI",
    "ABOUT AIAH",
    "ABOUT COLET",
    "ABOUT GWEN",
    "ABOUT JHOANNA",
    "ABOUT MALOI",
    "ABOUT MIKHA",
    "ABOUT SHEENA",
    "ABOUT STACEY"
];

const images = [
    'ptcmain.jpg',
    'AIAH.jpg',
    'COLET.jpg',
    'GWEN.jpg',
    'JHOANNA.jpg',
    'MALOI.jpg',
    'MIKHA.jpg',
    'SHEENA.jpg',
    'STACEY.jpg'
];
const real_names = [
    "BINI",
    "Maraiah Queen Arceta",
    "Ma. Nicolette Vergara",
    "Gweneth L. Apuli",
    "Jhoanna Christine Robles",
    "Mary Loi Yves Ricalde",
    "Mikhaela Janna Lim",
    "Sheena Mae Catacutan",
    "Stacey Aubrey Sevilleja"
];
const stage_names = [
    "BINI",
    "AIAH",
    "COLET",
    "GWEN",
    "JHOANNA",
    "MALOI",
    "MIKHA",
    "SHEENA",
    "STACEY"
];

const birth_day = [
    "BINI",
    "January 27, 2001",
    "September 14, 2001",
    "June 19, 2003",
    "January 26, 2004",
    "May 27, 2002",
    "November 8, 2003",
    "May 9, 2004",
    "July 13, 2003"
];
const role = [
    "BINI",
    "Visual, Main Rapper, Sub Vocalist",
    "Main Vocalist, Lead Rapper, Lead Dancer",
    "Lead Vocalist, Lead Rapper",
    "Leader, Lead Vocalist, Lead Rapper",
    "Main Vocalist",
    "Main Rapper, Lead Dancer, Visual",
    "Main Dancer, Sub Vocalist",
    "Main Rapper, Lead Dancer, Sub Vocalist"
];

const song = [
    "salamin",
    "pantropiko",
    "lagi",
    "karera",
    "huwag muna tayong umuwi",
    "i feel good",
    "na na na",
    "born to win",
    "da coconut nut",
    "golden arrow",
    "na na nandito lang",
    "ang huling chacha",
    "strings",
    "pit a pat"
]

const embedded_link = [
    "J1Ip2sC_lss?autoplay=1&loop=1&playlist=J1Ip2sC_lss",
    "Zx31bB2vMns?autoplay=1&loop=1&si=woqOcXXO57deATt9",
    "KyndoXN4_ns?autoplay=1&loop=1&si=Pn2MV0Vn01FURqVF",
    "QNV2DmBxChQ?autoplay=1&loop=1&si=kjqhGBeO_9oeqAls",
    "_NbpqCtg6Vg?autoplay=1&loop=1&si=QiTxF560CbGgp7LP",
    "UMogVGvhs7U?autoplay=1&loop=1&si=vKnRCQYadevzQfCP",
    "wJ6GCeSR4ss?autoplay=1&loop=1&si=mafERXJmY3FHbult",
    "cUMH4XhQTGI?autoplay=1&loop=1&si=xyn2Pcxf00h8TVM3",
    "eZfeW9WDwmA?autoplay=1&loop=1&si=yTt6ypIOC0Xk6xal",
    "beaF9FnJ1IA?autoplay=1&loop=1&si=24GOI1hYCy7YcKKi",
    "YSaNuFTlDok?autoplay=1&loop=1&si=wxeaqf-Tcn9wcYNV",
    "TC9g8JVWg_c?autoplay=1&loop=1&si=NA3MH6CMmnLGBYH0",
    "OGBS-8IsPJ0?autoplay=1&loop=1&si=jsBniCaSJZuW9e0a",
    "p8Mh_Fvm7HU?autoplay=1&loop=1&si=i_F0cgRSiSirwYHE"
]
const default_video = "J1Ip2sC_lss?autoplay=1&loop=1&playlist=J1Ip2sC_lss";

const memberIds = ["main", "Aiah", "Colet", "Gwen", "Jhoanna", "Maloi", "Mikha", "Sheena", "Stacey"];

function updateSlider() {
    document.getElementById('slide').src = images[index];
    document.getElementById('ptc_number').innerText = `${index + 1}/${images.length}`;
    if(index == 0){
        document.getElementById("main").style.display = "block";
        document.getElementById("member").style.display = "none";
        for (let i = 0; i < memberIds.length; i++) {
            document.getElementById(memberIds[i]).style.display = "none";
        }
    }
    else{
        document.getElementById("main").style.display = "none";
        document.getElementById("member").style.display = "block";
        for (let i = 0; i < memberIds.length; i++) {
            // Set display to 'flex' if the current index matches the loop index, otherwise set to 'none'
            document.getElementById(memberIds[i]).style.display = (index === i) ? 'flex' : 'none';
        }
    }
    document.getElementById("about_who").innerText = `${about_who[index]}`;
    document.getElementById("real_name").innerText = `${real_names[index]}`;
    document.getElementById("stage_name").innerText = `${stage_names[index]}`;
    document.getElementById("birth_day").innerText = `${birth_day[index]}`;
    document.getElementById("role").innerText = `${role[index]}`;
}

function nextImg() {
    index = (index + 1) % images.length;
    updateSlider();
}

function prevImg() {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
}

updateSlider();


// THIS IS FOR PTC SLIDER

// THIS IS FOR PTC BUTTON
function AIAH(){
    document.getElementById('ptc_number').innerText = "2/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Aiah").style.display = "flex";
    document.getElementById("Colet").style.display = "none";
    document.getElementById("Gwen").style.display = "none";
    document.getElementById("Jhoanna").style.display = "none";
    document.getElementById("Maloi").style.display = "none";
    document.getElementById("Mikha").style.display = "none";
    document.getElementById("Sheena").style.display = "none";
    document.getElementById("Stacey").style.display = "none";
    document.getElementById("about_who").innerText = `${about_who[1]}`;
    document.getElementById("real_name").innerText = `${real_names[1]}`;
    document.getElementById("stage_name").innerText = `${stage_names[1]}`;
    document.getElementById("birth_day").innerText = `${birth_day[1]}`;
    document.getElementById("slide").src = images[1];
    document.getElementById("role").innerText = `${role[1]}`;
}
function COLET(){
    document.getElementById('ptc_number').innerText = "3/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Colet").style.display = "flex";
    document.getElementById("Aiah").style.display = "none";
    document.getElementById("Gwen").style.display = "none";
    document.getElementById("Jhoanna").style.display = "none";
    document.getElementById("Maloi").style.display = "none";
    document.getElementById("Mikha").style.display = "none";
    document.getElementById("Sheena").style.display = "none";
    document.getElementById("Stacey").style.display = "none";
    document.getElementById("about_who").innerText = `${about_who[2]}`;
    document.getElementById("real_name").innerText = `${real_names[2]}`;
    document.getElementById("stage_name").innerText = `${stage_names[2]}`;
    document.getElementById("birth_day").innerText = `${birth_day[2]}`;
    document.getElementById("slide").src = images[2];
    document.getElementById("role").innerText = `${role[2]}`;
}
function GWEN(){
    document.getElementById('ptc_number').innerText = "4/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Gwen").style.display = "flex";
    document.getElementById("Aiah").style.display = "none";
    document.getElementById("Colet").style.display = "none";
    document.getElementById("Jhoanna").style.display = "none";
    document.getElementById("Maloi").style.display = "none";
    document.getElementById("Mikha").style.display = "none";
    document.getElementById("Sheena").style.display = "none";
    document.getElementById("Stacey").style.display = "none";
    document.getElementById("about_who").innerText = `${about_who[3]}`;
    document.getElementById("real_name").innerText = `${real_names[3]}`;
    document.getElementById("stage_name").innerText = `${stage_names[3]}`;
    document.getElementById("birth_day").innerText = `${birth_day[3]}`;
    document.getElementById("slide").src = images[3];
    document.getElementById("role").innerText = `${role[3]}`;
}
function JHOANNA(){
    document.getElementById('ptc_number').innerText = "5/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Jhoanna").style.display = "flex";
    document.getElementById("Aiah").style.display = "none";
    document.getElementById("Colet").style.display = "none";
    document.getElementById("Gwen").style.display = "none";
    document.getElementById("Maloi").style.display = "none";
    document.getElementById("Mikha").style.display = "none";
    document.getElementById("Sheena").style.display = "none";
    document.getElementById("Stacey").style.display = "none";
    document.getElementById("about_who").innerText = `${about_who[4]}`;
    document.getElementById("real_name").innerText = `${real_names[4]}`;
    document.getElementById("stage_name").innerText = `${stage_names[4]}`;
    document.getElementById("birth_day").innerText = `${birth_day[4]}`;
    document.getElementById("slide").src = images[4];
    document.getElementById("role").innerText = `${role[4]}`;
}
function MALOI(){
    document.getElementById('ptc_number').innerText = "6/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Maloi").style.display = "flex";
    document.getElementById("Aiah").style.display = "none";
    document.getElementById("Colet").style.display = "none";
    document.getElementById("Gwen").style.display = "none";
    document.getElementById("Jhoanna").style.display = "none";
    document.getElementById("Mikha").style.display = "none";
    document.getElementById("Sheena").style.display = "none";
    document.getElementById("Stacey").style.display = "none";
    document.getElementById("about_who").innerText = `${about_who[5]}`;
    document.getElementById("real_name").innerText = `${real_names[5]}`;
    document.getElementById("stage_name").innerText = `${stage_names[5]}`;
    document.getElementById("birth_day").innerText = `${birth_day[5]}`;
    document.getElementById("slide").src = images[5];
    document.getElementById("role").innerText = `${role[5]}`;
}
function MIKHA(){
    document.getElementById('ptc_number').innerText = "7/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Mikha").style.display = "flex";
    document.getElementById("Aiah").style.display = "none";
    document.getElementById("Colet").style.display = "none";
    document.getElementById("Gwen").style.display = "none";
    document.getElementById("Jhoanna").style.display = "none";
    document.getElementById("Maloi").style.display = "none";
    document.getElementById("Sheena").style.display = "none";
    document.getElementById("Stacey").style.display = "none";
    document.getElementById("about_who").innerText = `${about_who[6]}`;
    document.getElementById("real_name").innerText = `${real_names[6]}`;
    document.getElementById("stage_name").innerText = `${stage_names[6]}`;
    document.getElementById("birth_day").innerText = `${birth_day[6]}`;
    document.getElementById("slide").src = images[6];
    document.getElementById("role").innerText = `${role[6]}`;
}
function SHEENA(){
    document.getElementById('ptc_number').innerText = "8/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Sheena").style.display = "flex";
    document.getElementById("Aiah").style.display = "none";
    document.getElementById("Colet").style.display = "none";
    document.getElementById("Gwen").style.display = "none";
    document.getElementById("Jhoanna").style.display = "none";
    document.getElementById("Maloi").style.display = "none";
    document.getElementById("Mikha").style.display = "none";
    document.getElementById("Stacey").style.display = "none";
    document.getElementById("about_who").innerText = `${about_who[7]}`;
    document.getElementById("real_name").innerText = `${real_names[7]}`;
    document.getElementById("stage_name").innerText = `${stage_names[7]}`;
    document.getElementById("birth_day").innerText = `${birth_day[7]}`;
    document.getElementById("slide").src = images[7];
    document.getElementById("role").innerText = `${role[7]}`;
}
function STACEY(){
    document.getElementById('ptc_number').innerText = "9/9";
    document.getElementById("main").style.display = "none";
    document.getElementById("member").style.display = "block";
    document.getElementById("Stacey").style.display = "flex";
    document.getElementById("Aiah").style.display = "none";
    document.getElementById("Colet").style.display = "none";
    document.getElementById("Gwen").style.display = "none";
    document.getElementById("Jhoanna").style.display = "none";
    document.getElementById("Maloi").style.display = "none";
    document.getElementById("Sheena").style.display = "none";
    document.getElementById("Mikha").style.display = "none";
    document.getElementById("about_who").innerText = `${about_who[8]}`;
    document.getElementById("real_name").innerText = `${real_names[8]}`;
    document.getElementById("stage_name").innerText = `${stage_names[8]}`;
    document.getElementById("birth_day").innerText = `${birth_day[8]}`;
    document.getElementById("slide").src = images[8];
    document.getElementById("role").innerText = `${role[8]}`;
}
// THIS IS FOR PTC BUTTON


//this is for song page
function video_slider(source){
    document.getElementById("slide_video").src = source;
}

//this is for search engine
function search_engine() {
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var videoId = document.getElementById('video-id').value.trim().toLowerCase();
        var iframe = document.getElementById('video-iframe');

        // Find the index of the song name in the song array
        var index = song.findIndex(function(s) {
            return s.toLowerCase() === videoId;
        });

        if (index !== -1) {
            // Use the found index to get the corresponding YouTube video link
            iframe.src = `https://www.youtube.com/embed/${embedded_link[index]}`;
        } else {
            alert('Please enter a valid song name or YouTube video ID.');
            iframe.src = 'https://www.youtube.com/embed/${default_video}';
        }
    });
}
