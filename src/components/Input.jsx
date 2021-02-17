import React, { useState, useEffect } from 'react';
import { Card } from './Card';

export const Input = () => {
    const [valueInput, setValueInput] = useState('');
    const [issues, setIssues] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        getIssues();
    }, []);

    const getIssues = async () => {
        const response = await fetch('https://api.github.com/repos/facebook/react/issues')
        const json = await response.json();
        setIssues(json);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setValueInput(value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const issuesFiltered = issues.filter(item => item.labels.name === `type:${valueInput}`)
        setFiltered(issuesFiltered)
    } 

    return(
        <div>
            <form onSubmit={handleSearch}>
                <input value={valueInput} onChange={handleChange} />
            </form>
            { issues.map((item, i) => <Card key={i} 
                                            title={item.title} 
                                            state={item.state} 
                                            labels={item.labels} />) }
        </div>
    );
};