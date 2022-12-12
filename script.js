//  но функция должна еще и красиво быть оформлена с картинками рекламы
// если это кот британец то найди корм для бритнацем и вставь картинку)
// данные о питомце тоже должны отображаться//

// Реализовать функцию по рендерингу рекламы для users в зависимости от того, каким животным владеет юзер.
// Пусть это будут квадратики типа с профилями где будет инфа по юзерам(имя возраст город).
// А ниже в этом квадратике реклама для этого юзера.

// Функция должна проходится по обеим массивам определять если животное у юзера
// и если есть должна принимать функцию которая формирует рекламу по питомцу

// Если питомца нету путь рендерится реклама например машин и тд


const users = [
    ["Kateryna", 26, "Kyiv"],
    ["Manuel", 22, "Wroclaw"],
    ["Bohdan", 30, "Ivano-Frankovsk"],
    ["Oleksii", 31, "Dnipro"],
];
const pets = [
    ["Alisa", "cat", "British", "Kateryna"],
    ["Myshka", "dog", "German dog", "Oleksii"],
    ["Kapusha", "parrot", "Aro", "Manuel"],
];

function renderUsers(arr1, arr2, myFunc) {
    let clonArr1 = arr1.slice()

    clonArr1.forEach(function(i) {
        arr2.forEach(function(j) {
            if (i[0] === j[3]) {
                i.push(j);
            };
        });
    });
    document.write(`<div class="container">${myFunc(clonArr1).join("")}</div>`);
}

function getPetAdvertisment(arr) {

    let mass = [];

    arr.forEach(function(i) {
        if (i.length < 4) {
            mass.push(`<div class="person">
		<h1>${i[0]}</h1>
		<p>Возраст: ${i[1]}</p>
		<p>Город: ${i[2]}</p>
		<div>
		    <img class="image" src="img/car.jpg" alt="">
		</div>
	    </div>`);
        } else {
            mass.push(`<div class="person">
		<h1>${i[0]}</h1>
			<p>Возраст: ${i[1]}</p>
			<p>Город: ${i[2]}</p>
			<p>Имя питомца: ${i[3][0]}</p>
			<p>Животное: ${i[3][1]}</p>
			<p>Порода: ${i[3][2]}</p>
		<div>
		    <img class="image" src="img/${i[3][1]}.jpg" alt="${(i[4])}">
		</div>
	    </div>`);
        };
    });
    return mass;
};

renderUsers(users, pets, getPetAdvertisment);
