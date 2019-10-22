import React from 'react';
import '../css/Display.css'

const Display = (props) => {
    return (
        <>
            <div className="display">
                <table>
                    <tbody>
                        <tr className="display__header">
                            <th className="display__header-item">City</th>
                            <th className="display__header-item">Time</th>
                            <th className="display__header-item">Humidity</th>
                            <th className="display__header-item">Temp</th>
                        </tr>
                        {props.results.map(item => <tr key={item.key} className="display__data">
                            <td className="display__data-item" >{item.city}</td>
                            <td className="display__data-item" >{item.time}</td>
                            <td className="display__data-item" >{item.humidity}</td>
                            <td className="display__data-item" >{item.temp}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Display;