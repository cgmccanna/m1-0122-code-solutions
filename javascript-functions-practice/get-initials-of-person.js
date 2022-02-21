/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var Initials = person.firstName.charAt(0) + person.lastName.charAt(0);
  return Initials;
}
