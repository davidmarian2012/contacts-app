const number_validation = /^\+?\d{10,}$/; // Regular expression to check if the phone number is valid
const mail_validation = /\w{1,}\@\w{1,}\.\w{1,}/; // Regular expression to check if the mail is valid

document.querySelector('.addNewContactBtn').addEventListener('click', function(){ // Click Add new contact button to toggle the form
    document.querySelector('.popup').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', function(){ // Clicking "x" will close the form
    document.querySelector('.popup').style.display = 'none';

    // Resetting the form input values
    firstname.value='';
    lastname.value='';
    phonenumber.value='';
    email.value='';
    let messages=[];
    errorElement.innerHTML = messages.join('<br/>')
})

document.querySelector('.edit-close').addEventListener('click', function(){ // Clicking "x" will close the update form
    document.querySelector('.edit-popup').style.display = 'none';

    // Resetting the form input values
    editfirstname.value='';
    editlastname.value='';
    editphonenumber.value='';
    editemail.value='';
    let messages=[];
    editerrorElement.innerHTML = messages.join('<br/>')
})

// Gathering elements
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phonenumber = document.getElementById('phonenumber');
const email = document.getElementById('email');
const form = document.getElementById('form');

const editfirstname = document.getElementById('edit-firstname');
const editlastname = document.getElementById('edit-lastname');
const editphonenumber = document.getElementById('edit-phonenumber');
const editemail = document.getElementById('edit-email');
const editform = document.getElementById('edit-form');

const errorElement = document.getElementById('error');
const editerrorElement = document.getElementById('edit-error');
const forminput = document.querySelector('.forminput');
const contactlist = document.querySelector('.contactlist');
const submitbutton = document.querySelector('.submitbutton');
const editsubmitbutton = document.querySelector('.edit-submitbutton');
const contacts = document.querySelector('.contacts');

submitbutton.addEventListener('click',addContact);
editsubmitbutton.addEventListener('click',updateContact);
contacts.addEventListener('click', editOrDeleteContact);

let con2 ='';

function editOrDeleteContact(event){
    const selectedContact = event.target;
    if(selectedContact.classList[0] === 'deletebutton')
    {
        const con = selectedContact.parentElement.parentElement; // The remove button is inside a div that is inside another div that we are trying to delete, that's why we use parentElement two times
        con.remove(); // Removing the contact from the list
    }
    else if (selectedContact.classList[0] === 'modifybutton')
    {
        document.querySelector('.edit-popup').style.display = 'flex';
        con2 = selectedContact.parentElement.parentElement; // The remove button is inside a div that is inside another div that we are trying to delete, that's why we use parentElement two times
    }
}

function addContact(event){ // Adding the contact to the list
    event.preventDefault();
    let messages=[];
    if(firstname.value=='' || lastname.value=='')
    {
        messages.push('Name cannot be empty');
    }

    if(number_validation.test(phonenumber.value)===false) // Checking if the phone number has a valid format
    {
        messages.push('Phone number is not valid');
    }

    if(mail_validation.test(email.value)===false) // Checking if the e-mail address has a valid format
    {
        messages.push('Email address is not valid');
    }
    
    if(messages.length>0)
    {
        errorElement.style.textAlign='center';
        errorElement.style.marginBottom='20px';
        errorElement.innerHTML = messages.join('<br/>'); // Displaying the errors on the form
    }
    else{
        const contactDiv = document.createElement('div');
        contactDiv.classList.add('contact');

        const newContact = document.createElement('li');
        newContact.innerHTML = firstname.value + ' '+lastname.value;
        newContact.classList.add('contact-item');

        const contactnumber = document.createElement('h3');
        contactnumber.innerHTML = phonenumber.value;
        contactnumber.classList.add('contact-number');

        const nameandnumber = document.createElement('div');
        nameandnumber.classList.add('nameandnumber');

        nameandnumber.appendChild(newContact);
        nameandnumber.appendChild(contactnumber);

        contactDiv.appendChild(nameandnumber);

        contactButtons = document.createElement('div');

        const modifyButton = document.createElement('button');
        modifyButton.innerText = 'Edit';
        modifyButton.classList.add('modifybutton');

        contactButtons.appendChild(modifyButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('deletebutton');

        contactButtons.appendChild(deleteButton);
        contactButtons.classList.add('contactbuttons');

        contactDiv.appendChild(contactButtons);

        contacts.appendChild(contactDiv);

        document.querySelector('.popup').style.display = 'none';


        // Resetting the form's input values
        firstname.value='';
        lastname.value='';
        phonenumber.value='';
        email.value='';

        let messages=[];
        errorElement.innerHTML = messages.join('<br/>')
    }
}

function updateContact(event){ // Updating the contact
    event.preventDefault();
    let messages=[];

    

    if(editfirstname.value=='' || editlastname.value=='')
    {
        messages.push('Name cannot be empty');
    }

    if(number_validation.test(editphonenumber.value)===false) // Checking if the new phone number has a valid format
    {
        messages.push('Phone number is not valid');
    }

    if(mail_validation.test(editemail.value)===false) // Checking if the new e-mail address has a valid format
    {
        messages.push('Email address is not valid');
    }

    if(messages.length>0)
    {
        errorElement.style.textAlign='center';
        errorElement.style.marginBottom='20px';
        editerrorElement.innerHTML = messages.join('<br/>'); // Displaying the errors on the form
    }
    else{
        const contactDiv = document.createElement('div');
        contactDiv.classList.add('contact');

        const newContact = document.createElement('li');
        newContact.innerHTML = editfirstname.value + ' '+editlastname.value;
        newContact.classList.add('contact-item');

        const contactnumber = document.createElement('h3');
        contactnumber.innerHTML = editphonenumber.value;
        contactnumber.classList.add('contact-number');

        const nameandnumber = document.createElement('div');
        nameandnumber.classList.add('nameandnumber');

        nameandnumber.appendChild(newContact);
        nameandnumber.appendChild(contactnumber);

        contactDiv.appendChild(nameandnumber);

        contactButtons = document.createElement('div');

        const modifyButton = document.createElement('button');
        modifyButton.innerText = 'Edit';
        modifyButton.classList.add('modifybutton');

        contactButtons.appendChild(modifyButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('deletebutton');

        contactButtons.appendChild(deleteButton);
        contactButtons.classList.add('contactbuttons');

        contactDiv.appendChild(contactButtons);

        contacts.appendChild(contactDiv);

        document.querySelector('.edit-popup').style.display = 'none';


        // Resetting the form's input values
        editfirstname.value='';
        editlastname.value='';
        editphonenumber.value='';
        editemail.value='';

        let messages=[];
        editerrorElement.innerHTML = messages.join('<br/>');

        
        con2.remove(); // Removing the contact from the list
    }
}