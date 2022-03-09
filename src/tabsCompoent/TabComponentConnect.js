import React, { useState } from 'react'
import { Box, Typography, Button, FormControl, Grid, MenuItem } from '@mui/material'
import Profile from '../assets/profile.png'
import mediafriends from '../assets/mediafriends.svg'
import { useStyles } from '../constant/customStyle'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { categoryData } from '../constant/dropdown/category'
import loca  from '../assets/loca.svg'
const TabComponentConnect = () => {
    const classes = useStyles()
    const [value, setValue] = useState(1)
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <>
        <Grid item xs={12} sm={12} lg={2} md={5}>
      <Box style={{width:"100%",display:"flex"}}>
                <Button className={classes.socialFriendButton}> <img src={mediafriends} alt=''className={classes.mediafriendsimg}  /></Button>
                <Button className={classes.socialFriendButton}>   <img src={loca} alt=''className={classes.mediafriendsimg}   /></Button>
                </Box>
               </Grid>
        <Box className={classes.tabFeedBox}>
            
            <Grid container spacing={2} className={classes.exploreSpaceSelect}>
            
                {/* <Grid item xs={12} sm={12} lg={3} md={3}>
                    <FormControl fullWidth className={classes.socialFriendDropdown}>
                        <Select value={value} onChange={handleChange} size='small' MenuProps={{ classes: { paper: classes.select } }} inputProps={{ classes: { icon: classes.icon } }} className={classes.root}>
                            {categoryData.map((data, index) => {
                                return (
                                    <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Grid> */}
                {/* <Grid item xs={12} sm={12} lg={1} md={5}>
                   
                    <img src={mediafriends} alt='' className={classes.mediafriendsimg} />
                </Grid> */}
                {/* <Grid item xs={12} sm={12} lg={5} md={5}>
                    <Button variant="contained" fullWidth className={classes.socialFriendButton}>
                    <img src={mediafriends} alt='' className={classes.mediafriendsimg} />Find social media friends</Button>
                </Grid> */}
            </Grid>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {Array.from({ length: 7 }).map((item, index) => (
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '150px', alignItems: 'center', marginBottom: '30px' }}>
                        <Box sx={{ width: '104px', position: 'relative' }}>
                            <img src={Profile} alt='' className={classes.img} />
                            <Box className={classes.online1} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography className={classes.userName}>Black Glass</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ width: '8px', height: '8px', backgroundColor: '#FF1C51', borderRadius: '100%', marginRight: '5px' }}></Box>
                                <Typography sx={{ fontSize: '12px', fontFamily: 'poppins', color: '#FBF7F8', textTransform: 'capitalize' }}>1 new post</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
        </>
    )
}

export default TabComponentConnect;
