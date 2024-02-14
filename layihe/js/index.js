const slides = [
    "https://safanagroup.az/uploads/posts/2023-08/medium/1691820915_atv.png",
    "https://safanagroup.az/uploads/posts/2023-10/medium/1696578885_logosite.png",
    "https://safanagroup.az/uploads/posts/2023-09/1695628175_logo-enginet.png",
    "https://safanagroup.az/uploads/posts/2023-08/1692002092_cityconstruction-1.png",
    "https://safanagroup.az/uploads/posts/2023-08/1692001828_amalgroup.png",
    "https://safanagroup.az/uploads/posts/2023-08/medium/1692000950_asco.png",
    "https://safanagroup.az/uploads/posts/2023-08/1691821307_bakuoksford.png",
    "https://safanagroup.az/uploads/posts/2023-08/medium/1691820915_atv.png",
    "https://safanagroup.az/uploads/posts/2023-08/medium/1691820954_arb.png"
];

const slidesPerGroup = 5;
let currentIndex = 0;

function prevSlide(index) {
    const slider = document.getElementById("slider");
    let html = '<div class="carousel-item active"><div class="row justify-content-center">';

    for (let i = index; i < index + slidesPerGroup; i++) {
        if (i >= slides.length) break;
        html += `<div class="col-md-2 mb-3"><div class="card"><img class="img-fluid" style="object-fit: cover/center;width:80px; margin:auto;justifity-content:center;padding:13px 0 0;" src="${slides[i]}"><div class="card-body"></div></div></div>`;
    }

    html += '</div></div>';
    slider.innerHTML = html;
}

function prevSlide() {
    currentIndex = Math.max(currentIndex - slidesPerGroup, );
    showSlide(currentIndex);
}

function nextSlide() {
    if (currentIndex + slidesPerGroup < slides.length) {
        currentIndex += slidesPerGroup;
        showSlide(currentIndex);
    } else {
        currentIndex = 0;
        showSlide(currentIndex);
    }
}Assistant

showSlide(currentIndex);

