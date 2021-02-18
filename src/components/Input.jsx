import React, { useState, useEffect } from 'react';
import { Card } from './Card';

export const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const [issues, setIssues] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        getIssues();
    }, []);

    const getIssues = async () => {
        const response = await fetch('https://api.github.com/repos/facebook/react/issues')
        const json = await response.json();
        //console.log(json)
        setIssues(json);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        var regex = new RegExp(inputValue,'i')
        const issuesFiltered = issues.filter(item => item.title.match(regex))
        //console.log(issuesFiltered)
        setFiltered(issuesFiltered)
    } 

    return(
        <div>
            <form onSubmit={handleSearch}>
                <input  value={inputValue} 
                        onChange={handleChange} 
                        placeholder="Search" 
                        className="form-control" />
            </form>
            <hr />
            { filtered.map((item, i) => <Card key={i} 
                                            title={item.title} 
                                            state={item.state} 
                                            labels={item.labels} />) }
        </div>
    );
};