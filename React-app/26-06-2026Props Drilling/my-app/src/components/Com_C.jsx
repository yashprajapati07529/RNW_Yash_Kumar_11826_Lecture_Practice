import React from 'react'
import { Name_Context, Age_Context, Course_Context } from '../App'
import { useContext } from 'react'

const Com_C = () => {


    const name = useContext(Name_Context)
    const age = useContext(Age_Context)
    const course = useContext(Course_Context)


    return (
        <div>
            <h1>Com_C : {name} {age} {course}</h1>
            {/* <Name_Context.Consumer>
            {
                (name) => {
                    return(
                        <Age_Context.Consumer>
                            {
                                (age) => {
                                    return(
                                    )
                                }
                            }
                        </Age_Context.Consumer>
                    )
                }
            }
        </Name_Context.Consumer> */}
        </div>
    )
}

export default Com_C