import React from 'react';
import SaladItem from '../SaladItem/SaladItem';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '2.5rem',
        justifyContent: 'center',
   
    }
});

const ingredients = [
    {
        image: '🍎',
        name: 'apple',
    },
    {
        image: '🥑',
        name: 'avocado',
    },
    {
        image: '🥦',
        name: 'broccoli',
    },
    {
        image: '🥕',
        name: 'carrot'
    },
    {
        image: '🍷',
        name: 'wine',
    },
    {
        image: '🥬',
        name: 'lettuce'
    },
];

export default function SaladBuilder() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            {ingredients.map(ingredient => (
                <SaladItem
                    key={ingredient.name}
                    image={ingredient.image}
                    name={ingredient.name}
                />
            ))
           }
        </div>
    )
}