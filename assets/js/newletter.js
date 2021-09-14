const subscribe = async () => {
  // event.preventDefault();
  let curTime = new Date();
  let day = curTime.getDate();
  let month = curTime.getMonth() + 1;
  let year = curTime.getFullYear();
  let minute = curTime.getMinutes();
  let hour = curTime.getHours();
  let time = "" + day + "-" + month + "-" + year + "  " + hour + ":" + minute;
  console.log(time);
  let email = document.getElementsByName("email")[0].value;
  console.log(email);
  let body = {
    date: time,
    email: email,
  };
  console.log(body);

  // export const subscribe = async () => {
  try {
    const response = await axios.post(
      "https://brainworks-email-subscibers.herokuapp.com/newsletter",
      body
    );
    const msg = response.data;
    console.log(msg);
    // alert(msg);
    document.getElementsByName("email")[0].innerHTML = "Subcribed";
  } catch (errors) {
    console.error(errors);
  }
};
