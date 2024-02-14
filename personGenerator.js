const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Ирина",
            "id_3": "Яна",
            "id_4": "Василиса",
            "id_5": "Людмила",
            "id_6": "Нина",
            "id_7": "Мария",
            "id_8": "Диана",
            "id_9": "Евгения",
            "id_10": "Елена"
        }
    }`,
    ProfessionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Бухгалтер",
            "id_2": "Проводница",
            "id_3": "Стюардесса",
            "id_4": "Секретарь",
            "id_5": "Медсестра",
            "id_6": "Кондитер",
            "id_7": "Актриса",
            "id_8": "Программист",
            "id_9": "Переводчик",
            "id_10": "Парикмахер"
        }
    }`,

    ProfessionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Электрик",
            "id_2": "Сварщик",
            "id_3": "Автомеханик",
            "id_4": "Повар",
            "id_5": "Слесарь",
            "id_6": "Сантехник",
            "id_7": "Инженер",
            "id_8": "Программист",
            "id_9": "Переводчик",
            "id_10": "Адвокат"
        }
    }`,

    Month: `{
        "count": 10,
        "list": {    
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,
        


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    

    
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    
    howMuchDays: function ( year , month) {
        let date1 = new Date(year, month-1, 1);       
        let date2 = new Date(year, month, 1);       
        return Math.round((date2 - date1) / 1000 / 3600 / 24);
    },

    randomDate: function () {
        const obj = JSON.parse(this.Month);
        const month = this.randomIntNumber;
        const prop = `id_${month(obj.count, 1)}`;
        const monthLit = obj.list[prop];
        let yearOfBirth = (max = 2006, min = 1960) => Math.floor(Math.random() * (max - min + 1) + min);
        let day = (max = (this.howMuchDays(yearOfBirth(), month())), min = 1) => Math.floor(Math.random() * (max - min + 1) + min); 
        let date = this.person.Birthday = day()+ " " + monthLit + " " + yearOfBirth()+ " года";
        return date;
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomProfession: function() {
        if (randomGender === ("Мужской")) {
            return this.randomValue(this.ProfessionMaleJson);
        }else{    
            return this.randomValue(this.ProfessionFemaleJson);
        };
    }, 

    randomFirstName: function() {
        if (randomGender === ("Мужской")) {
            return this.randomValue(this.firstNameMaleJson);
        }else{    
            return this.randomValue(this.firstNameFemaleJson);
        };
    }, 


     randomSurname: function() {
        if (randomGender === ("Мужской")) {
            return this.randomValue(this.surnameJson);
        }else{    
            return this.randomValue(this.surnameJson)+ "a";       
        };   
    },

    randomPatronymic: function() {
        let patre = this.randomValue(this.firstNameMaleJson);
        if (randomGender === ("Мужской")) {
            {
                if(patre.endsWith("та")){
                    return patre.replace("та","тич");
                }if(patre.endsWith("ей")){
                    return patre.replace("й","евич");
                }if(patre.endsWith("ий")){
                    return patre.replace("й","евич");
                }else{
                    return patre + "ович";
                };
            };
        }else{
            if(patre.endsWith("та")){
                return patre.replace("а","ична");
            }if(patre.endsWith("ей")){
                return patre.replace("й","евна");
            }if(patre.endsWith("ий")){
                return patre.replace("й","евна");
            }else{
                return patre + "овна";
            };        
        };   
    },

    getPerson: function () {
        randomGender =  (Math.random() > 0.5) ? ("Женский") : ("Мужской");
        this.person = {};
        this.person.Gender = randomGender;
        this.person.firstName = this.randomFirstName();
        this.person.Surname = this.randomSurname();
        this.person.Profession = this.randomProfession();  
        this.person.Birthday = this.randomDate();
        this.person.Patronymic = this.randomPatronymic();
        return this.person;
    }
};