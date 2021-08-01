import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import SearchBar from 'material-ui-search-bar';
import { fetchProductAsync } from '../features/product/productSlice';
import logo from '../logo.svg';
import './style.css'

const Header = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const searchFunction = (value) => {
        dispatch(fetchProductAsync(value));
    }
    const cancelSearch = () => {
        dispatch(fetchProductAsync());
    }
    return (
        <header className={'Header'}>
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Product Hunt</h3>
            <SearchBar
                value={value}
                onChange={(newValue) => setValue(newValue)}
                onRequestSearch={() => searchFunction(value)}
                style={{ marginLeft: '20px', height: '35px' }}
                onCancelSearch={() => cancelSearch()}
            />
        </header>
    )
}

export default Header;