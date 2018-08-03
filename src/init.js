// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice


// using jQuery and the object above, display the information as the appropriate button is clicked
// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice


// using jQuery and the object above, display the information as the appropriate button is clicked
// 
var fields = {
  // Properties of our object.
  firstName: "Dylan",
  lastName: "Rutter",
  jobTitle: "My job title is 'Resolutions Specialist'. Essentially we speak to all customers who demand supervisors from the front line agents. We aren't supervisors ourselves, just an escalated dept.",
  homeOffice: "I work at the RPP location up North. It's a great office, and we finally got new electric desks!",
  tellMeMore: "I am a big gamer. In my spare time I love modding arcade sticks and mostly play Street Fighter",
  // click = function buttonClick() {
  //   $(this.fields).onclick
  // }

};

$('#firstName').click(function () {
  alert("My first name is Dylan!")
});

$('#lastName').click(function () {
  alert("My last name is Rutter! My Mom always said 'it's Rutter like Butter' when people ask the spelling.")
});


$('#jobTitle').click(function () {
  alert("My job title is 'Resolutions Specialist'. Essentially we speak to all customers who demand supervisors from the front line agents. We aren't supervisors ourselves, just an escalated dept.")
});

$('#homeOffice').click(function () {
  alert("I work at the RPP location up North. It's a great office, and we finally got new electric desks!")
});

$('#tellMeMore').click(function () {
  alert("I am a big gamer. In my spare time I love modding arcade sticks and mostly play Street Fighter")
});