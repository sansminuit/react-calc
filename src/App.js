import React, {useState} from 'react'
import Button from './components/Button'
import './css/style.css'

const App = () => {
    const [current, setCurrent] = useState('0')
    const [previous, setPrevious] = useState([])
    const [reset, setReset] = useState(false)

    const clearAll = () => {
        setCurrent('0')
        setPrevious([])
        setReset(false)
    }

    const addToCurrent = (symbol) => {
        if ([' / ', ' x ', ' - ', ' + '].includes(symbol)) {
            let prev = previous
            prev.push(current + symbol)

            setPrevious(prev)
            setReset(true)
        } else {
            if ((current === '0' && symbol !== '.') || reset) {
                setCurrent(symbol)
                setReset(false)
            } else {
                setCurrent(current + symbol)
            }
        }
    }

    const calculate = (symbol) => {
        let prev = previous
        prev.push(current)
        let res = eval(prev.join('').replace('x', '*'))
        prev.push(symbol)
        setPrevious([])
        setCurrent(res)
        setReset(true)
    }
    
    const buttons = [
        {symbol: 'C', column: 3, action: clearAll},
        {symbol: ' / ', column: 1, action: addToCurrent},
        {symbol: '7', column: 1, action: addToCurrent},
        {symbol: '8', column: 1, action: addToCurrent},
        {symbol: '9', column: 1, action: addToCurrent},
        {symbol: ' x ', column: 1, action: addToCurrent},
        {symbol: '4', column: 1, action: addToCurrent},
        {symbol: '5', column: 1, action: addToCurrent},
        {symbol: '6', column: 1, action: addToCurrent},
        {symbol: ' - ', column: 1, action: addToCurrent},
        {symbol: '1', column: 1, action: addToCurrent},
        {symbol: '2', column: 1, action: addToCurrent},
        {symbol: '3', column: 1, action: addToCurrent},
        {symbol: ' + ', column: 1, action: addToCurrent},
        {symbol: '0', column: 2, action: addToCurrent},
        {symbol: '.', column: 1, action: addToCurrent},
        {symbol: ' = ', column: 1, action: calculate},
    ]
    
    return (
        <div className='App'>
            {previous.length > 0 ?
                <div className='float-operation'>{previous.join('')}</div>
            : null}
            <input className='result' type='text' value={current}/>
            {buttons.map((btn, i) => <Button key={i} symbol={btn.symbol} column={btn.column} action={(symbol) => btn.action(symbol)} />)}
        </div>
    )
}

export default App
