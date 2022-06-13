import materials from '../../data/materials';
import structures from '../../data/structures';

const productColors = {
    yellow: '#F3DCBA',
    blue: '#97CDFF',
    red: '#E89797',
    pink: '#F1A8FD',
}

export default {
    result: [
        {
            id: 1,
            title: 'Вязанные носки',
            price: 500,
            category: 'clothingShoes',
            supCategory: 'knitted',
            imgName: 'socks',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.knitwear,
            structure: structures.silk,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.'
        },
        {
            id: 2,
            title: 'Вязанные свитер',
            price: 2500,
            category: 'clothingShoes',
            supCategory: 'knitted',
            imgName: 'sweater',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.knitwear,
            structure: structures.silk,
            description: `Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.
            Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.`
        },
        {
            id: 3,
            title: 'Вязанная шапка',
            price: 500,
            category: 'clothingShoes',
            supCategory: 'knitted',
            imgName: 'cap',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.knitwear,
            structure: structures.silk,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и'
        },
        {
            id: 4,
            title: 'Пончо ручной вязки',
            price: 500,
            category: 'clothingShoes',
            supCategory: 'knitted',
            imgName: 'poncho',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.knitwear,
            structure: structures.silk,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.'
        },
        {
            id: 5,
            title: 'Серьги из натуральных камней',
            price: 5000,
            category: 'jewelryAccessories',
            supCategory: 'subcategory1',
            imgName: 'earrings2',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.knitwear,
            structure: structures.silk,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.'
        },
        {
            id: 6,
            title: 'Ожерелье',
            price: 970,
            category: 'jewelryAccessories',
            supCategory: 'subcategory1',
            imgName: 'beads2',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.glass,
            structure: structures.cotton,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.'
        },
        {
            id: 7,
            title: 'Бусы из жемчуга',
            price: 2560,
            category: 'jewelryAccessories',
            supCategory: 'subcategory1',
            imgName: 'beads',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.knitwear,
            structure: structures.silk,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.'
        },
        {
            id: 8,
            title: 'Серьги',
            price: 1800,
            category: 'jewelryAccessories',
            supCategory: 'subcategory2',
            imgName: 'earrings',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.metal,
            structure: structures.wool,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.'
        },
    ],
};
