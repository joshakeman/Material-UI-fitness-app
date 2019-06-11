import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Footer = ({ muscles, category, onSelect }) => {
    const index = category
        ? muscles.findIndex(group => group === category) + 1
        : 0

        const onIndexSelect = (e, index) => 
            onSelect(index === 0 ? '' : muscles[index - 1]) 

    return (
    <Paper >
        <Tabs
            value={index}
            onChange={onIndexSelect}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="All" />
            {muscles.map(m =>
                <Tab key={m} label={m} />
            )}
        </Tabs>
    </Paper>
    )
}

export default Footer