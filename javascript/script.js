const regionDetailsData = {
  TTA: {
    details: "1. Tangier-Tetouan-Al Hoceima region",
    surface: "1000 sq km",
    habitation: "3 540 012 (10.5%)",
  },
  RGZ: {
    details: "4.Rabat-Sale-Kenitra region",
    surface: "1000 sq km",
    habitation: "4 552 585 (13.5%)",
  },
  BMK: {
    details: "5.Beni Mellal-Khenifra region",
    surface: "41 033 km2",
    habitation: "2 512 375 (7.4%)",
  },
  CSS: {
    details: "6.Casablanca-Settat region",
    surface: "19 448 km2",
    habitation: "6 826 773 (20.3%)",
  },
  MRS: {
    details: "7.Marrakesh-Safi region",
    surface: "39 167 km2",
    habitation: "4 504 767 (13.4%)",
  },
  FMK: {
    details: "3.Fez-Meknes region",
    surface: "40 075 km2",
    habitation: "4 216 957 (12.4%)",
  },
  ORN: {
    details: "2.Oriental region",
    surface: "90 127 km2",
    habitation: "	2 302 182 (6.8%)",
  },
  DRT: {
    details: "8.Draa-Tafilalt region",
    surface: "115 592 km2",
    habitation: "1 627 269 (4.8%)",
  },
  SSM: {
    details: "9.Souss-Massa region",
    surface: "53 789 km2",
    habitation: "2 657 906 (7.9%)",
  },
  GON: {
    details: "10.Guelmim-Oued Noun region",
    surface: "1000 sq km2",
    habitation: "414 489 (6.4%)",
  },
  LSH: {
    details: "11.Laayoune-Sakia El Hamra region",
    surface: "140 018 km2",
    habitation: "	340 748 (1%)",
  },
  DOD: {
    details: "12.Dakhla-Oued Eddahab region",
    surface: "130 898 km2",
    habitation: "3 540 012 (0.3%)",
  },
};

const regionLinks = document.getElementsByClassName("region");
const modal = document.getElementById("details-modal");
const regionDetails = document.getElementById("regionDetails");
const surface = document.getElementById("surface");
const habitation = document.getElementById("habitation");
const title = document.getElementById("modal-title");

// Get the close button
const closeBtn = document.getElementsByClassName("btn-close")[0];

// Attach click event listeners to each region link
for (let i = 0; i < regionLinks.length; i++) {
  regionLinks[i].addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    const regionName = event.target.getAttribute("id");

    console.log(regionName);
    // Get the corresponding details from the region details object
    const regionDetailsObj = regionDetailsData[regionName];
    console.log(regionDetailsObj);
    const regionDetailsText = regionDetailsObj.details;
    console.log(regionDetailsText);
    const surfaceText = regionDetailsObj.surface;
    const habitationText = regionDetailsObj.habitation;

    // Display the details in the modal
    surface.innerHTML = surfaceText;
    habitation.innerHTML = habitationText;
    title.innerHTML = regionDetailsText;

    // Show the modal
    modal.style.display = "block";
  });
}

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close the modal when the user clicks outside of it
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
