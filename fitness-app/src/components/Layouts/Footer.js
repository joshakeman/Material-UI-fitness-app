import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar'
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
    <AppBar position='static' >
        <Tabs
            value={index}
            onChange={onIndexSelect}
            indicatorColor="secondary"
            textColor="secondary"
            centered={width !== 'xs'}
            scrollable={width === 'xs'}
        >
            <Tab label="All" />
            {muscles.map(m =>
                <Tab key={m} label={m} />
            )}
        </Tabs>
    </AppBar>
    )
}

export default withWidth()(Footer)