import React from 'react'

const Tabel = ({ data }) => {
    return (
        <div className='table-container'>
            <table >
                <tbody>
                    {data.map(item => (
                        <tr>
                            {(Object.entries(item).map(
                                ([key, value]) => {
                                    return (

                                        <td key={key} >{JSON.stringify(value)}</td>

                                    )

                                }
                            ))}
                        </tr>

                    )
                    )}
                </tbody>
            </table>


        </div>
    )
}

export default Tabel