
document.querySelector('#gen').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.Surname;
    document.querySelector('#genderOutput').innerText = initPerson.Gender;
    document.querySelector('#Profession').innerText = initPerson.Profession;
    document.querySelector('#birthYearOutput').innerText = initPerson.Birthday;
    document.querySelector('#patronymicOutput').innerText = initPerson.Patronymic;
    
});


document.querySelector('#clear').addEventListener('click', function () {
    document.querySelector('#firstNameOutput').innerText = "Генерация имени";
    document.querySelector('#surnameOutput').innerText = "Генерация фамилии";
    document.querySelector('#genderOutput').innerText = "Генерация пола";
    document.querySelector('#Profession').innerText = "Генерация профессии";
    document.querySelector('#birthYearOutput').innerText = "Генерация даты рождения";
    document.querySelector('#patronymicOutput').innerText = "Генерация Отчества";
});

