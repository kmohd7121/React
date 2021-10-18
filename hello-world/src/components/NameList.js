import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruse','Clark','Diana','Bruse']
    const persons = [
        {
            id:1,
            name:'Bruse',
            age:30,
            skill:'react'
        },
        {
            id:2,
            name:'Cleark',
            age:24,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:31,
            skill:'Python'
        },
        {
            id:4,
            name:'Kalam',
            age:32,
            skill:'Full Stack developer'
        },
        {
            id:5,
            name:'Mangesh',
            age:22,
            skill:'Angular And Python'
        }
    ]
    // const personList = persons.map(person => <Person key={person.name} person={person} />
    // <h2>I am {person.name}. I am {person.age} years. My skill is {person.skill}</h2>
    // eslint-disable-next-line no-undef
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>
   
   
    )
    return <div>{nameList}</div>

}

export default NameList
