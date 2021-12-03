// var companies = [
//     {
//         name: "HBO Max",
//         logo: "./assets/images/hbo.png",
//         starting_price: "$9.99 per month with ads",
//         simultaneous_streams: "3 Live",
//         tv: "No",
//         exclusive_originals: "Yes",
//         platforms_and_devices: "Amazon Fire, Roku, Android, Android TV, Apple TV, Chromecast, iPhone, iPad, iPod touch, PlayStation 4, Macs and PCs, Samsung Smart TV, Xbox One, TiVo",
//         website: "https://www.hbomax.com"
//     },
//     {
//         name: "Netflix",
//         logo: "./assets/images/netflix.png",
//         starting_price: "$9 per month with ads",
//         simultaneous_streams: "1-4",
//         tv: "no",
//         exclusive_originals: "yes",
//         platforms_and_devices: "Android, iOS, web browers, Apple TV, Chromecast, Fire TV, Nvidia Shield, Roku, Smart TVs, PS4, Xbox,set top boxes",
//         website: "https://www.netflix.com/"
//     },
//     {
//         name: "Disney+",
//         logo: "./assets/images/disney.png",
//         starting_price: "$8 per month with ads",
//         simultaneous_streams: "4",
//         tv: "no",
//         exclusive_originals: "yes",
//         platforms_and_devices: "Amazon Fire TV and Fire tablets, Roku, Chromecast, iOS, iPadOS,Android, Android TV, Apple TV, Xbox, PlayStation 4, Android-based Sony Smart TVs, Chromebooks, Samsung and LG devices",
//         website: "https://www.disneyplus.com/"
//     },
//     {
//         name: "Hulu",
//         logo: "https://via.placeholder.com/150",
//         starting_price: "	$6.99 per month; $64.99 per month",
//         simultaneous_streams: "	2 or Unlimited (at home) and 3 (mobile devices)",
//         tv: "yes",
//         exclusive_originals: "yes",
//         platforms_and_devices: "Android, iOS, web browers, Apple TV, Chromecast, Fire TV, Nvidia Shield, Roku, Smart TVs, PS4, Xbox,set top boxes",
//         website: "https://www.hulu.com/"
//     }
// ]


function generateServiceCard (data) {
    return `<article class="service">
    <div class="stream-bio">
      <h3 class="stream-name">${data.name}</h3>
      <img class="img" src="${data.logo}" />
      <p>Starting price: ${data.starting_price}</br>
      Simultaneous streams: ${data.simultaneous_streams}</br>
      Live TV: ${data.tv}</br>
      Exclusive originals: ${data.exclusive_originals}</br>
      
        Platforms and devices: ${data.platforms_and_devices}
      </p></br>
      <span class="visit-site"
        ><a href="${data.website}">Visit Site</a></span
      >
    </div>
  </article>
    `
}

function makeServiceCard(data) {
    return `<article class="service">
    <div class="stream-bio">
      <h3 class="stream-name">${data.display_name}</h3>
      <img class="img" src="${data.icon}" />
      <span class="visit-site"
        ><a href="${data.url}">Visit Site</a></span
      >
    </div>
  </article>
    `

}

function searchCompany () {
    var streamInput = document.querySelector(".stream-input");

    var servicesDiv = document.querySelector(".services");


    var articles = "";
    var url = `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${streamInput.value}&country=uk&rapidapi-key=8e00451b55msh53c30d28f98049dp1c6ed2jsne4c2428dcf54`;

    console.log (url)

   $.getJSON(url, function(data){
        
        var locations = data.results[0].locations
        
     for (let i = 0; i < locations.length; i++) {
        
         var card = makeServiceCard(locations[i])
         articles += card
     }
     console.log (articles)

     servicesDiv.innerHTML = articles;
   }) 
   
    // for (let i = 0; i < companies.length; i++) {
    //     if(companies[i].name == streamInput.value) {
    //         articles+=generateServiceCard(companies[i]);
    //     }
    // }
   
}

document.querySelector('#searchBtn').addEventListener('click', searchCompany);