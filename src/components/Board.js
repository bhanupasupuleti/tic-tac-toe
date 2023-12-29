import React, { useState } from 'react';

import Square from './Square';

import './board.scss';

const calculateWinner = (squares) => {
	const winningLines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for(let i = 0; i< winningLines.length; i++) {
		const [a, b, c] = winningLines[i];
		if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a]
		}
	}
	return null;
}

const Board = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isxNext, setIsxNext] = useState(true);

	function handleClick (i) {
		if(squares[i] || calculateWinner(squares)) {
			return;
		}
		const nextSquares  = [...squares];
		if(isxNext) {
			nextSquares[i] = 'X';
		} else {
			nextSquares[i] = 'O';
		}
		setIsxNext(!isxNext);
		setSquares(nextSquares);
	}
	
	const winner = calculateWinner(squares);
	let status;
	if(winner) {
		status = 'Winner: ' + winner;
	} else {
		status = 'Next Player: ' + (isxNext ? 'X' : 'O')
	}

    return(
    <>
		<div className='status'>	
			{status}		
		</div>
		<div className='board-row'>
			<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
			<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
			<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
		</div>
		<div className='board-row'>
			<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
			<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
			<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
		</div>
		<div className='board-row'>
			<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
			<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
			<Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
		</div>
    </>
    )
}

export default Board;