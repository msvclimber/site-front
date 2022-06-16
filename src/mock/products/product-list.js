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
            shopId: 1,
            title: 'Вязанные носки',
            price: 500,
            category: 'clothingShoes',
            subCategory: 'knitted',
            imgName: 'socks',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.knitwear,
            structure: structures.silk,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.'
        },
        {
            id: 2,
            shopId: 1,
            title: 'Вязанные свитер',
            price: 2500,
            category: 'clothingShoes',
            subCategory: 'knitwear',
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
            shopId: 1,
            title: 'Вязанная шапка',
            price: 500,
            category: 'clothingShoes',
            subCategory: 'knitted',
            imgName: 'cap',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.knitwear,
            structure: structures.silk,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и'
        },
        {
            id: 4,
            shopId: 2,
            title: 'Пончо ручной вязки',
            price: 500,
            category: 'clothingShoes',
            subCategory: 'knitted',
            imgName: 'poncho',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.knitwear,
            structure: structures.silk,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.'
        },
        {
            id: 5,
            shopId: 2,
            title: 'Серьги из натуральных камней',
            price: 5000,
            category: 'jewelryAccessories',
            imgName: 'earrings2',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.knitwear,
            structure: structures.silk,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.'
        },
        {
            id: 6,
            shopId: 2,
            title: 'Ожерелье',
            price: 970,
            category: 'jewelryAccessories',
            imgName: 'beads2',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.glass,
            structure: structures.cotton,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.'
        },
        {
            id: 7,
            shopId: 2,
            title: 'Бусы из жемчуга',
            price: 2560,
            category: 'jewelryAccessories',
            imgName: 'beads',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.knitwear,
            structure: structures.silk,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.'
        },
        {
            id: 8,
            shopId: 2,
            title: 'Серьги',
            price: 1800,
            category: 'jewelryAccessories',
            imgName: 'earrings',
            size: '42-46',
            colors: [productColors.red, productColors.yellow, productColors.blue, productColors.pink],
            material: materials.metal,
            structure: structures.wool,
            description: 'Стильный костюм бесспорно добавит вашему образу яркости и индивидуальности. Качественный пошив, максимально утонченный дизайн и соблюдение основного направления моды – все это объединилось в одной модели. Костюм выполнен из мягкого комфортного материала. Отличный вариант для дома, спорта и отдыха на каждый день.'
        },
    ],
};
