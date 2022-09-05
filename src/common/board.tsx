import React, { Fragment } from 'react';


const Board = () => {
    return <div className="board">
        {
            [...Array(9).keys()].map(n => {
                if (n === 2 || n === 5) {
                    return <Fragment>
                            <span className="board__node">X</span><br />
                        </Fragment>
                }
                return <span>X</span>
            })   
        }    
    </div>
}

export default Board;