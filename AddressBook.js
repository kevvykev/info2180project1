/**
* Created with info2180project1.
* User: kevvykev
* Date: 2014-10-17
* Time: 09:30 PM
* To change this template use Tools | Templates.
*/


/**
* Created with project1.
* User: kevvykev
* Date: 2014-10-17
* Time: 08:46 PM
* To change this template use Tools | Templates.
*/
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

var search = function (lastName){
    var contactsLength = contacts.length;
for (var i = 0; i < contactsLength; i++) {
	
		if(contacts[0].lastName===lastName){
		    	printPerson(contacts[i]);
		    }
	};
    };

	search("Jones");
var add = function (firstName, lastName, email, phoneNumber){
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
    }
    };
   
    add("Dan","Morr","ff@live.com","530234");
list();

