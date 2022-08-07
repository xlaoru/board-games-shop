import React from 'react';

const News = () => {
    return (
        <div className="news">
            <div className='news-cell'>
                v1.1 - Добавлен индикатор активной страницы. Удалены предустановленные файлы React. {<br/>} Изменено иконку и название сайта
            </div>
            <hr className='separator' />
            <div className='news-cell'>
                v2.0 - Добавлена grid сетка для удобного построения товара. {<br/>} Добавлена точная валюта при расчете самого товара и итоговой цены
            </div>
            <hr className='separator' />
            <div className='news-cell'>
                v2.1 - Тест grid системы. Добавление нового товара
            </div>
            <hr className='separator' />
            <div className='news-cell'>
                v3.0 - Приведение хедера в порядок. Подбор иконки для корзины
            </div>
            <hr className='separator' />
            <div className='news-cell'>
                v4.0 - Реализован поиск по названию товара. Все UI атрибутика перенесенна в отдельный файл. {<br/>} Изменен один товар с ошибкой
            </div>
        </div>
    );
};

export default News;