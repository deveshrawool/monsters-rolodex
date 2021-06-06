import React from 'react'
import './Card_List_Styles.css'
import {Card} from '../card/Card.component'

export const CardList = props => {
    console.log(props)
    return (
        <div className ="card-list">
            
           {
            props.monsters.map(monster => (

                <Card  key={monster.id} monster={monster}></Card>
            ))
          }
        </div>
    )
}


