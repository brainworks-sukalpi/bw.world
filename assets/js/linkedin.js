let idx = 0;
let ids = [];
const getAllPost = async () => {
  try {
    const response = await axios.get(
      "https://brainworks-email-subscibers.herokuapp.com/post"
    );
    ids = response.data;
    console.log(ids);

    ids.forEach((id) => {
      var div = document.createElement("div");
      if (idx == 0) {
        div.className = "carousel-item active";
        idx++;
      } else {
        div.className = "carousel-item";
      }
      var innerDiv = document.createElement("div");
      innerDiv.className =
        "d-block w-100 col-xl-6 col-lg-6 d-flex justify-content-center align-items-center";
      var iframe = document.createElement("iframe");
      iframe.height = "450";
      iframe.width = "75%";
      iframe.src = `https://www.linkedin.com/embed/feed/update/urn:li:share:${id}`;
      innerDiv.appendChild(iframe);
      div.appendChild(innerDiv);
      document.getElementsByClassName("carousel-inner")[0].appendChild(div);
    });
    // alert(msg);
  } catch (errors) {
    console.error(errors);
    alert("something went wrong!");
  }
};
const next = () => {
  if (idx + 1 < ids.length) {
    ++idx;
    let src = `https://www.linkedin.com/embed/feed/update/urn:li:share:${ids[idx]}`;
    document.getElementById("linkedin-post").firstElementChild.src = src;
  }
};
const prev = () => {
  if (idx - 1 >= 0) {
    --idx;
    let src = `https://www.linkedin.com/embed/feed/update/urn:li:share:${ids[idx]}`;
    document.getElementById("linkedin-post").firstElementChild.src = src;
  }
};
getAllPost();
// next();
// var myCarousel = document.querySelector("#carouselExampleIndicators");
// var carousel = new bootstrap.Carousel(myCarousel, {
//   cycle: "pause",
// });
