const PRODUCTS = [
    {
        id: 101,
        name: 'Gabinete Gamer AeroCool',
        price: 350,
        image: require('../assets/products/gabinete.jpg'),
        description: 'Um excelente gabinete que visa o custo beneficio, com ele você poderá usar qualquer configuração que desejar sem faltar espaços.'
    },
    {
        id: 102,
        name: 'Headset Logitech G635',
        price: 500,
        image: require('../assets/products/headset.jpg'),
        description: 'Headset da marca logitech sem fio, excelente em nos graves e agudos além de seu incrivel isolamento de sons externos e de ruídos.'
    },
    {
        id: 103,
        name: 'Mouse Logitech G502',
        price: 350,
        image: require('../assets/products/mouse.jpg'),
        description: 'Mouse voltado para a execução de tarefas cotidianas, contém 7 botões, 4000hz de polling rate, também pode ser usado para jogos competitivos.'
    },
    {
        id: 104,
        name: 'Monitor Samsung UltraWide',
        price: 1400,
        image: require('../assets/products/monitor.jpeg'),
        description: 'Monitor samsung curvo com tela IPS, 1ms e que usa das melhores e mais atuais tecnologias do mercado. 27 polegas e FULL HD.'
    },
    {
        id: 105,
        name: 'Notebook Gamer Nitro 5',
        price: 3500,
        image: require('../assets/products/notebook.jpg'),
        description: 'Notebook acer com processador i7 de 13° geração combado com placa de vídeo rtx 3060. Ótimo custo beneficio que você poderá levar para onde quiser.'
    },
    {
        id: 106,
        name: 'Tablet Samsung Tab S6',
        price: 2100,
        image: require('../assets/products/tablet.jpg'),
        description: 'Excelente tablet para estudos e tarefas escolares, além de uso para trabalhos. 8GB de memoria ram, 3mm de largura e excelente câmera.'
    },
    {
        id: 107,
        name: 'Iphone 14 Pro Max',
        price: 7500,
        image: require('../assets/products/celular.jpeg'),
        description: 'O celular mais potente da atualidade, câmera profissional, tela Oled, 550 GB de armazenamento e 8GB de memória ram para uso diário.'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}