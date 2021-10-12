const contact = async (event) => {
  event.preventDefault();
  document.querySelector(".loading").classList.add("d-block");

  let curTime = new Date();
  let day = curTime.getDate();
  let month = curTime.getMonth() + 1;
  let year = curTime.getFullYear();
  let minute = curTime.getMinutes();
  let hour = curTime.getHours();
  let time = "" + day + "-" + month + "-" + year + "  " + hour + ":" + minute;
  // console.log(time);
  let name = document.getElementsByName("name")[0].value;
  let email = document.getElementsByName("email")[0].value;
  let subject = document.getElementsByName("subject")[0].value;
  let message = document.getElementsByName("message")[0].value;
  // console.log(email);
  let body = {
    date: time,
    name,
    email,
    subject,
    message,
  };
  // console.log(body);

  // export const subscribe = async () => {
  try {
    const response = await axios.post(
      "https://brainworks-email-subscibers.herokuapp.com/contact",
      body
    );
    const msg = response.data;
    console.log(msg);
    // alert(msg);

    document.querySelector(".loading").classList.remove("d-block");
    document.querySelector(".sent-message").classList.add("d-block");
  } catch (errors) {
    console.error(errors);
    document.querySelector(".loading").classList.remove("d-block");
    document.querySelector(".error-message").classList.add("d-block");
  }
};
