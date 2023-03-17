# fully-customizable-select

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

Пакет с селектом, который вы можете стилизовать в соответствии с вашими потребностями.

[**Live Demo**](https://guvictory.github.io/fully-customizable-select/)

## Как запустить страницу с примером?

В каталоге примера запустите все зависимости:

### `npm install`

### `npm run start`

Откройте [http://localhost:1234](http://localhost:1234)

## Установка:

```bash
npm install fully-customizable-select --save-dev
```

or

```bash
yarn add -D fully-customizable-select
```

## Использование :

```js
import React, { useState } from 'react';
import Select from 'fully-customizable-select';

const options = [
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
    { value: 'yellow', label: 'Yellow' },
    // Will display as a group separator
    { value: 'green', label: 'Green', groupLabel: true },
    {
        value: 'orange',
        label: 'Orange',
        onClick: (val: string) => {
            // Will not call the internal logic of clicking on the select element, only the passed callback
            console.log(val);
        },
    },
    { value: 'pink', label: 'pink' },
    { value: 'purple', label: 'Purple' },
    { value: 'grey', label: 'Grey' },
];

export default function App() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className='App'>
            <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
        </div>
    );
}
```

## Base Props

-   `customInput?` - Компонент, для переопределение базового компонента инпута для селекта
-   `placeholder?` - изменить текст, отображаемый, когда не выбран ни один пункт
-   `options` - пункты для отображения в меню селекта
-   `onChange?` - подписаться на события изменений
-   `className` - передать общий класс на весь контролл
-   `optionsClassName` - передать общий класс на выпадающее меню с пунктами
-   `selectedValue` - изначально выбранное значение, или для реализации кастомной логики `onClick` у элементов списка

## customInput Props

Для того, чтобы переопределить базовый компонент контролла, можно передать свой, но у него должны быть следующие пропсы:

-   `value?` - Строка со значением, которе надо отобразить
-   `onClick?` - обработка логики при нажатии
-   `open?` - статус открыто / закрыто

## options type

Элементы, которые могут быть в `options` имеют следующий тип:

```js
{
    groupLabel?: boolean;
    value: T;
    label: string;
    onClick?: (value: T) => void;
    customOption?: React.FC<SelectOptionProps<T>>;
}
```

-   `groupLabel?` - Если true - то отобразится только `label` в качестве разделителя группы
-   `value` - значение пункта списка
-   `label` - строка для отображения пункта списка
-   `onClick?` - обработка кастомной логики при нажатии, если передана, то нужно выносить `selectedValue` во внешний стейт и изменять в этом обработчике
-   `customOption?` - можно передать кастомный компонент вместо дефолтного элемента списка

## customOption Props

Для того, чтобы переопределить базовый компонент пункта списка, можно передать свой, но у него должны быть пропсы, описанные выше в `options type`:

[npm-url]: https://www.npmjs.com/package/fully-customizable-select
[npm-image]: https://img.shields.io/npm/v/fully-customizable-select
[github-license]: https://img.shields.io/github/license/guvictory/fully-customizable-select
[github-license-url]: https://github.com/guvictory/fully-customizable-select/blob/main/LICENSE
[github-build]: https://github.com/guvictory/fully-customizable-select/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/guvictory/fully-customizable-select/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/fully-customizable-select
