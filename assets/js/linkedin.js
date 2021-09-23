let idx = 0;
let ids = [];
const getAllPost = async () => {
  try {
    const response = await axios.get(
      "https://brainworks-email-subscibers.herokuapp.com/post"
    );
    ids = response.data;
    console.log(ids);
    var iframe = document.createElement("iframe");
    iframe.height = "500";
    iframe.width = "70%";
    iframe.src = `https://www.linkedin.com/embed/feed/update/urn:li:share:${ids[0]}`;
    document.getElementById("linkedin-post").appendChild(iframe);
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
next();
