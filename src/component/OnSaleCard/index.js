import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import profile from '../../assets/profile.png';
import Group from "../../assets//Group 65.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const CustomOnSaleCard = () => {
    const classes = useStyles();
    return (
        <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'} sx={{ backgroundColor: '#707070', borderRadius: "19px", padding: '4px', }}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', marginBottom: '0px', columnGap: '7px', }}>
                {Array.from({ length: 4 }).map((item, index) => (
                    <Box sx={{ width: '25px' }}>
                        <img src={profile} style={{ width: '100%' }} />
                    </Box>
                ))}
                <Box>
                    <IconButton aria-label="settings" sx={{ paddingRight: 0 }}>
                        <MoreVertIcon sx={{
                            color: "#F0F3F6 !important",
                            fontSize: "30px !important"
                        }} />
                    </IconButton>
                </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} className={classes.img} sx={{ position: 'relative' }}>
                <img src={Group} alt='' className={classes.imgex} />
                <Box sx={{ position: 'absolute', bottom: '8px', left: '16px' }}>
                    <Typography sx={{ color: '#fff', fontSize: '10px', fontFamily: 'inter', fontWeight: '500' }}>Abstract smoke Red blue</Typography>
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', columnGap: '57px' }}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Typography sx={{ fontWeight: '900', color: '#fff' }}>$ 2.05</Typography>
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <IconButton aria-label="settings">
                        <FavoriteIcon sx={{ color: '#fff' }} />
                    </IconButton>
                    <Typography sx={{ fontWeight: '900', color: '#fff' }}>22</Typography>
                </Box>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    medcardheader: {
        // width: "100%",
        display: 'flex',
        paddingTop: 5,
        paddingLeft: 13,
        paddingRight: 13,
        paddingBottom: 10,
        justifyContent: 'space-between',
        alignItems: "center"

    },
    mediaimage: {
        width: "30px",
        marginRight: 5,
    },
    mediacard: {
        // width: "50%",
        padding: "15px",
        borderRadius: 15,

        background: "#707070"
    },
    mediaitem: {
        flex: 0.9,
    },
    icon: {
        color: "#F0F3F6",
        fontSize: "3.59px"
    },
    cardFooter: {
        display: "flex",
        justifyContent: 'space-between',
        paddingTop: 7,

    },
    iconchild: {
        display: "flex",
        fontSize: "14px"

    },
    spna: {
        marginLeft: 7
    },
    bodyimage: {
        width: "100%"
    },
    h1: {
        borderBottom: "1px solid"
    },
    img: {
        width: '100%'
    }
});

export default CustomOnSaleCard;
