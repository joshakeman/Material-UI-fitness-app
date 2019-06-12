import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withWidth from '@material-ui/core/withWidth';

const Footer = ({ muscles, category, onSelect, width }) => {
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
            centered={width !== 'xs'}
            scrollable={width === 'xs'}
        >
            <Tab label="All" />
            {muscles.map(m =>
                <Tab key={m} label={m} />
            )}
        </Tabs>
    </Paper>
    )
}

export default withWidth()(Footer)