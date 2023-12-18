var person = {
    name: null,
    age: null,
    region: 'Russia',
    set_information: function() {
        if (this.name == null){
            var name = prompt('Введите Ваше имя', 'Пользователь')
            if (name != ''){
                this.name = name
            } 
        }
        if (this.age == null){
            var age = prompt('Введите Ваш возраст', '18')
            if (age != ''){
                this.age = age
            }
        }
    },
    get_information: function(){
        if ((this.name != null) && (this.age != null)){
            return `Здравствуй, ${this.name}. Сегодня твой возраст ${this.age} лет.`
        }
        else if (this.name != null){
            return `Здравствуй, ${this.name}.`
        }
        else if (this.age != null){
            return `Сегодня твой возраст ${this.age} лет.`
        }
        return `О Вас недостаточно информации.`
    }
}

person.set_information()
alert(person.get_information())