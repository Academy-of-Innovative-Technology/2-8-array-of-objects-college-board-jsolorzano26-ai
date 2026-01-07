const colleges = [
  {
    rank: 1,
    name: "University of California, Los Angeles",
    address: "405 Hilgard Ave, Los Angeles, CA",
    website: "https://www.ucla.edu",
    maps: "https://maps.google.com?q=UCLA",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/1200px-The_University_of_California_UCLA.svg.png"
  },
  {
    rank: 2,
    name: "Stanford University",
    address: "450 Serra Mall, Stanford, CA",
    website: "https://www.stanford.edu",
    maps: "https://maps.google.com?q=Stanford+University",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Seal_of_Leland_Stanford_Junior_University.svg"
  },
  {
    rank: 3,
    name: "University of Southern California",
    address: "3551 Trousdale Pkwy, Los Angeles, CA",
    website: "https://www.usc.edu",
    maps: "https://maps.google.com?q=University+of+Southern+California",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/USC_Trojans_logo.svg"
  },
  {
    rank: 4,
    name: "San Diego State University",
    address: "5500 Campanile Dr, San Diego, CA",
    website: "https://www.sdsu.edu",
    maps: "https://maps.google.com?q=San+Diego+State+University",
    image: "https://brand.sdsu.edu/_images/_logo-section/index/800x600-athletics-logo.jpg"
  },
  {
    rank: 5,
    name: "California State University, Long Beach",
    address: "1250 Bellflower Blvd, Long Beach, CA",
    website: "https://www.csulb.edu",
    maps: "https://maps.google.com?q=CSULB",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f5/CSU-Longbeach_seal.svg"
  }
];

const collegeList = document.querySelector("#collegeList");
collegeList.innerHTML = "";

colleges.forEach(college => {
  const collegeHTML = `
    <div class="list-group-item college-card">
      <div class="row">
        <div class="col-3 col-md-2">
          <img src="${college.image}" alt="${college.name}" class="college-image">
        </div>
        <div class="col-9 col-md-10 college-info">
          <h5>${college.rank}. ${college.name}</h5>
          <p><strong>Address:</strong> ${college.address}</p>
          <p><strong>Website:</strong>
            <a href="${college.website}" target="_blank">${college.website}</a>
          </p>
          <p><strong>Google Maps:</strong>
            <a href="${college.maps}" target="_blank">View on Google Maps</a>
          </p>
        </div>
      </div>
    </div>
  `;
  collegeList.insertAdjacentHTML("beforeend", collegeHTML);
});
