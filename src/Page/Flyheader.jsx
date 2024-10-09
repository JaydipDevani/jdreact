import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Fly.css';
import Flyfooter from './Flyfooter';

const pages = ['Articles', 'Security', 'Inftra Log', 'Docs', 'Community', 'Status', 'Pricing'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Flyheader() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', color: 'black', position: 'relative', boxShadow: 'none' }}>
            <svg class="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-full min-w-[80rem] h-auto md-center" width="100%" height="241" viewBox="0 0 1171 241" fill="none">
                <g opacity=".175" filter="url(#filter0_f)">
                    <path d="M731.735 -179.55C596.571 -157.762 516.36 -74.1815 552.576 7.13199C588.793 88.4455 727.724 136.701 862.887 114.913C998.051 93.1247 1078.26 9.54454 1042.05 -71.769C1005.83 -153.082 866.898 -201.337 731.735 -179.55Z" fill="url(#paint0_linear)"></path>
                    <path d="M378 114.106C520.489 114.106 636 45.8883 636 -38.2623C636 -122.413 520.489 -190.63 378 -190.63C235.511 -190.63 120 -122.413 120 -38.2623C120 45.8883 235.511 114.106 378 114.106Z" fill="url(#paint1_linear)"></path>
                </g>
                <defs>
                    <filter id="filter0_f" x="0" y="-310.63" width="1170.74" height="550.775" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur"></feGaussianBlur>
                    </filter>
                    <linearGradient id="paint0_linear" x1="567.5" y1="1.03997" x2="1029.02" y2="64.6468" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#001AFF"></stop>
                        <stop offset="1" stop-color="#6EE5C2"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="155" y1="-11.0234" x2="511.855" y2="-162.127" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFC83A"></stop>
                        <stop offset="0.504191" stop-color="#FF008A"></stop>
                        <stop offset="1" stop-color="#6100FF"></stop>
                    </linearGradient>
                </defs>
            </svg>
            <Container maxWidth="xl" sx={{ position: 'absolute', top: 15 }}>
                <Toolbar disableGutters sx={{ padding: '0px 0px' }}>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Fly.io
                    </Typography> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <svg aria-labelledby="title-F_S2W2y_vTtPsP0Bdescription-F_S2W2y_1jNPsP0R" class="" style={{ pointerEvents: 'none', width: 'auto', height: '36px' }} role="img" aria-hidden="true" viewBox="0 0 259 84" fill-rule="evenodd">
                        <title id="title-F_S2W2zAG1pPsP0h">



                        </title>
                        <desc id="description-F_S2W2zAKQ1PsP0x">



                        </desc>

                        <g buffered-rendering="static">

                            <path d="M57.413 10.134h9.454c8.409 0 15.236 6.827 15.236 15.236v33.243c0 8.409-6.827 15.236-15.236 15.236h-.745c-4.328-.677-6.205-1.975-7.655-3.072l-12.02-9.883a1.692 1.692 0 0 0-2.128 0l-3.905 3.211-10.998-9.043a1.688 1.688 0 0 0-2.127 0L12.01 68.503c-3.075 2.501-5.109 2.039-6.428 1.894C2.175 67.601 0 63.359 0 58.613V25.37c0-8.409 6.827-15.236 15.237-15.236h9.433l-.017.038-.318.927-.099.318-.428 1.899-.059.333-.188 1.902-.025.522-.004.183.018.872.043.511.106.8.135.72.16.663.208.718.54 1.52.178.456.94 1.986.332.61 1.087 1.866.416.673 1.517 2.234.219.296 1.974 2.569.638.791 2.254 2.635.463.507 1.858 1.999.736.762 1.216 1.208-.244.204-.152.137c-.413.385-.805.794-1.172 1.224a10.42 10.42 0 0 0-.504.644 8.319 8.319 0 0 0-.651 1.064 6.234 6.234 0 0 0-.261.591 5.47 5.47 0 0 0-.353 1.606l-.007.475a5.64 5.64 0 0 0 .403 1.953 5.44 5.44 0 0 0 1.086 1.703c.338.36.723.674 1.145.932.359.22.742.401 1.14.539a6.39 6.39 0 0 0 2.692.306h.005a6.072 6.072 0 0 0 2.22-.659c.298-.158.582-.341.848-.549a5.438 5.438 0 0 0 1.71-2.274c.28-.699.417-1.446.405-2.198l-.022-.393a5.535 5.535 0 0 0-.368-1.513 6.284 6.284 0 0 0-.285-.618 8.49 8.49 0 0 0-.67-1.061 11.022 11.022 0 0 0-.354-.453 14.594 14.594 0 0 0-1.308-1.37l-.329-.28.557-.55 2.394-2.5.828-.909 1.287-1.448.837-.979 1.194-1.454.808-1.016 1.187-1.587.599-.821.85-1.271.708-1.083 1.334-2.323.763-1.524.022-.047.584-1.414a.531.531 0 0 0 .02-.056l.629-1.962.066-.286.273-1.562.053-.423.016-.259.019-.978-.005-.182-.05-.876-.062-.68-.31-1.961c-.005-.026-.01-.052-.018-.078l-.398-1.45-.137-.403-.179-.446Zm4.494 41.455a3.662 3.662 0 0 0-3.61 3.61 3.663 3.663 0 0 0 3.61 3.609 3.665 3.665 0 0 0 3.611-3.609 3.663 3.663 0 0 0-3.611-3.61Z" fill="url(#srq_Radial1)"></path>

                            <path d="M35.639 72.544l-.637.535a3.332 3.332 0 01-2.09.762H15.235a15.176 15.176 0 01-9.654-3.451c1.319.145 3.353.607 6.428-1.894l15.277-13.44a1.693 1.693 0 012.127 0l10.997 9.042 3.904-3.21c.619-.5 1.51-.5 2.128 0l12.019 9.882c1.45 1.097 3.327 2.394 7.654 3.071H58.12a3.394 3.394 0 01-1.963-.654l-.14-.108-.593-.493a1.247 1.247 0 00-.158-.159c-.672-.563-9.187-7.617-9.187-7.617a1 1 0 00-1.281.002s.021.026-9.038 7.615a1.12 1.12 0 00-.121.117zm26.262-20.96a3.678 3.678 0 00-3.61 3.609 3.68 3.68 0 003.61 3.609 3.68 3.68 0 003.61-3.609 3.678 3.678 0 00-3.61-3.609zM38.566 40.648L37.35 39.44l-.736-.762-1.858-1.999-.463-.507-2.253-2.634-.638-.791-1.974-2.569-.219-.296-1.517-2.234-.416-.673-1.087-1.866-.332-.61-.94-1.985-.178-.456-.539-1.52-.208-.718-.16-.663-.135-.72-.106-.8-.043-.511-.018-.872.004-.183.025-.522.188-1.901.059-.333.428-1.899.098-.318.318-.927.102-.24.506-1.112.351-.662.489-.806.487-.718.347-.456.4-.482.44-.484.377-.378.918-.808.671-.549c.016-.014.033-.026.05-.038l.794-.537.631-.402 1.198-.631c.018-.011.039-.02.058-.029l1.698-.705.157-.059 1.51-.442.638-.143.862-.173.572-.087.877-.109.598-.053 1.187-.063.465-.005.881.018.229.013 1.276.106 1.687.238.195.041 1.668.415.49.146.544.188.663.251.524.222.77.363.485.249.872.512.325.2 1.189.868.341.296.828.754.041.041.703.754.242.273.825 1.096.168.262.655 1.106.197.379.369.825.386.963.137.403.398 1.45a.89.89 0 01.018.078l.31 1.961.062.679.05.876.005.182-.019.978-.016.259-.053.423-.273 1.562-.066.286-.629 1.962a.626.626 0 01-.02.056l-.584 1.414-.022.047-.763 1.523-1.334 2.323-.708 1.083-.849 1.271-.599.821-1.187 1.587-.808 1.016-1.194 1.453-.837.979-1.287 1.448-.828.909-2.394 2.5-.556.55.328.28c.465.428.902.885 1.308 1.37.122.148.24.299.354.453.249.336.473.691.67 1.06.106.2.201.407.285.618.191.484.32.996.368 1.513l.022.393c.012.752-.125 1.5-.405 2.198a5.438 5.438 0 01-1.71 2.274c-.266.208-.55.391-.848.549a6.08 6.08 0 01-2.219.659h-.005a6.403 6.403 0 01-2.692-.306 5.882 5.882 0 01-1.14-.539 5.523 5.523 0 01-1.145-.932 5.458 5.458 0 01-1.086-1.703 5.662 5.662 0 01-.403-1.953l.007-.475a5.47 5.47 0 01.353-1.606c.077-.202.164-.399.261-.591.19-.37.408-.725.651-1.063.159-.221.328-.436.504-.644.367-.43.759-.839 1.172-1.224l.152-.137.244-.204z" class="fill-current"></path>
                            <path d="M35.002 73.079l9.796-8.267a1 1 0 011.281-.002l9.938 8.269c.604.492 1.36.761 2.139.762h-25.28c.776 0 1.527-.269 2.126-.762zM41.1 43.568l.096.028c.031.015.057.036.085.055l.08.071c.198.182.39.373.575.569.13.139.257.282.379.43.155.187.3.383.432.587.057.09.11.181.16.276.043.082.082.167.116.253.06.15.105.308.119.469l-.003.302a1.726 1.726 0 01-.817 1.343 2.333 2.333 0 01-.994.327l-.373.011-.315-.028a2.398 2.398 0 01-.433-.105 2.07 2.07 0 01-.41-.192l-.246-.18a1.685 1.685 0 01-.56-.96 2.418 2.418 0 01-.029-.19l-.009-.288c.005-.078.017-.155.034-.232.043-.168.105-.331.183-.486.101-.194.216-.381.344-.559.213-.288.444-.562.691-.821.159-.168.322-.331.492-.488l.121-.109c.084-.055.085-.055.181-.083h.101zM40.481 3.42l.039-.003v33.665l-.084-.155a94.101 94.101 0 01-3.093-6.267 67.257 67.257 0 01-2.099-5.255 41.665 41.665 0 01-1.265-4.326c-.265-1.163-.469-2.343-.553-3.535a16.923 16.923 0 01-.029-1.528c.008-.444.026-.887.054-1.33.044-.696.115-1.391.217-2.081.081-.543.181-1.084.304-1.619.098-.425.212-.847.342-1.262.188-.6.413-1.186.675-1.758.096-.206.199-.411.307-.612.65-1.204 1.532-2.313 2.687-3.054a5.609 5.609 0 012.498-.88zm4.365.085l2.265.646c1.049.387 2.059.891 2.987 1.521a11.984 11.984 0 013.212 3.204c.502.748.918 1.555 1.243 2.398.471 1.247.763 2.554.866 3.882.03.348.047.697.054 1.046.008.324.006.649-.02.973-.064.725-.2 1.442-.407 2.14a17.03 17.03 0 01-.587 1.684c-.28.685-.591 1.357-.932 2.013-.754 1.457-1.623 2.852-2.553 4.201a65.451 65.451 0 01-3.683 4.806 91.02 91.02 0 01-4.417 4.896 93.66 93.66 0 002.907-5.949c.5-1.124.971-2.26 1.414-3.407.487-1.26.927-2.537 1.317-3.83.29-.969.546-1.948.757-2.938.181-.849.323-1.707.411-2.57.074-.72.101-1.444.083-2.166a30.867 30.867 0 00-.049-1.325c-.106-1.775-.376-3.545-.894-5.248a15.341 15.341 0 00-.714-1.892c-.663-1.444-1.588-2.793-2.84-3.778l-.42-.307z" fill="white"></path>

                            <path d="M179.213 64.297l-10.751-23.015c-.898-1.917-1.433-2.618-2.331-3.431l-.874-.788c-.697-.676-1.155-1.302-1.155-2.045 0-1.064.843-1.96 2.378-1.96h9.334c1.465 0 2.378.762 2.378 1.9 0 .635-.292 1.111-.661 1.578-.438.555-1.008 1.096-1.008 2.082 0 .618.18 1.234.527 2.021l6.416 15.025 5.755-14.647c.354-.974.596-1.832.596-2.519 0-1.069-.581-1.505-1.029-1.983-.39-.415-.702-.854-.702-1.557 0-1.149.935-1.9 2.193-1.9h5.748c1.612 0 2.378.834 2.378 1.9 0 .682-.393 1.314-1.166 1.996l-.813.668c-1.132.925-1.656 2.263-2.251 3.647l-8.716 20.998c-1.03 2.455-2.563 5.863-4.905 8.659-2.379 2.84-5.587 5.048-9.932 5.048-3.638 0-5.84-1.737-5.84-4.24 0-2.293 1.696-4.12 3.924-4.12 1.22 0 1.855.576 2.499 1.169.532.489 1.072.991 2.137.991.988 0 1.908-.418 2.742-1.093 1.274-1.03 2.341-2.652 3.129-4.384zm63.175-.082c4.839 0 8.804-1.658 11.897-4.967 3.09-3.304 4.636-7.281 4.636-11.931 0-4.539-1.469-8.268-4.396-11.191-2.926-2.921-6.723-4.388-11.396-4.388-4.92 0-8.944 1.597-12.077 4.78-3.135 3.186-4.703 7.045-4.703 11.578 0 4.493 1.496 8.301 4.483 11.425 2.99 3.126 6.84 4.694 11.556 4.694zm-40.921-.36c2.798 0 4.788-1.884 4.788-4.6 0-2.652-2.055-4.54-4.788-4.54-2.863 0-4.912 1.891-4.912 4.54 0 2.713 2.05 4.6 4.912 4.6zm9.964-4.305l.681-.72c.81-.787 1.071-1.582 1.071-3.774V42.097c0-1.895-.258-2.741-1.062-3.465l-.801-.718c-.785-.693-1.043-1.124-1.043-1.816 0-.984.763-1.791 1.99-2.071l5.44-1.32c.52-.126 1.107-.249 1.562-.249.626 0 1.138.206 1.497.563.36.358.572.873.572 1.517v20.518c0 2.069.251 3.031 1.115 3.758a.359.359 0 01.039.039l.608.708c.764.743 1.081 1.236 1.081 1.914 0 1.209-.912 1.9-2.377 1.9h-9.211c-1.396 0-2.316-.687-2.316-1.9 0-.681.317-1.178 1.154-1.925zm-61.567.001l.681-.721c.811-.787 1.071-1.582 1.071-3.774V27.999c0-1.835-.194-2.736-1.053-3.459l-.822-.796c-.709-.689-.968-1.116-.968-1.805 0-.985.767-1.789 1.927-2.07l5.378-1.32c.521-.126 1.107-.249 1.563-.249.621 0 1.147.187 1.522.542.376.356.608.885.608 1.598v34.616c0 2.074.258 2.981 1.125 3.766l.694.734c.769.748 1.025 1.238 1.025 1.919 0 .502-.153.907-.426 1.216-.385.435-1.03.684-1.89.684h-9.21c-.86 0-1.505-.249-1.891-.684-.272-.309-.425-.714-.425-1.216 0-.682.253-1.176 1.091-1.924zm-25.079-13.934v9.319c0 1.404.278 2.701 1.435 3.768l.748.726c.838.813 1.093 1.3 1.093 2.045 0 1.138-.913 1.9-2.378 1.9h-10.385c-1.465 0-2.377-.762-2.377-1.9 0-.884.259-1.303 1.097-2.049l.745-.724c.868-.786 1.434-1.857 1.434-3.766V30.039c0-1.517-.336-2.758-1.435-3.769l-.749-.726c-.77-.747-1.092-1.238-1.092-1.985 0-1.206.915-1.96 2.377-1.96h27.817c1.063 0 1.997.237 2.594.822.415.407.68.981.71 1.778l.433 6.421c.043.803-.194 1.472-.657 1.885-.319.284-.748.454-1.288.454-.681 0-1.203-.257-1.669-.701-.419-.399-.792-.959-1.213-1.618-1.016-1.624-1.489-2.208-2.572-2.967-1.507-1.112-3.803-1.494-8.145-1.494-2.505 0-4.086.109-5.082.366-.644.166-1.016.382-1.215.699-.204.324-.226.734-.226 1.235v12.618h6.523c1.561 0 2.659-.282 3.931-2.021l.007-.01c.51-.649.879-1.127 1.23-1.444.409-.37.802-.545 1.323-.545a1.9 1.9 0 011.883 1.901v8.699c0 1.165-.908 1.96-1.883 1.96-.485 0-.879-.173-1.289-.535-.353-.31-.723-.775-1.203-1.396-1.392-1.802-2.375-2.089-3.999-2.089h-6.523zm110.214-.22c0-3.121.68-5.364 2.089-6.713 1.392-1.332 2.888-2.006 4.496-2.006 2.212 0 4.205 1.238 6.003 3.672 1.837 2.489 2.746 5.853 2.746 10.086 0 3.124-.682 5.388-2.093 6.776-1.391 1.369-2.886 2.063-4.493 2.063-2.212 0-4.204-1.248-6.002-3.701-1.838-2.51-2.746-5.904-2.746-10.177zm-18.202-16.878c2.804 0 4.788-1.578 4.788-4.3 0-2.658-1.982-4.24-4.788-4.24-2.871 0-4.851 1.583-4.851 4.24 0 2.656 1.981 4.3 4.851 4.3z" class="fill-current"></path>

                        </g>
                        <defs>
                            <radialGradient id="srq_Radial1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43.593 41.714) scale(59.4764)">
                                <stop offset="0" stop-color="#ba7bf0"></stop>
                                <stop offset=".45" stop-color="#996bec"></stop>
                                <stop offset="1" stop-color="#5046e4"></stop>
                            </radialGradient>
                        </defs>

                    </svg>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Fly.io
                    </Typography> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', border: '1px solid', borderRadius: '35px', backgroundColor: 'rgb(251 207 232 / 0.3)', padding: '0px 5px' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 0, display: 'block', fontFamily: 'monospace', color: 'black' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 0, padding: '0 4px', border: '1px solid black', borderRadius: '40px' }}>
                        <Tooltip title="Buttons">
                            {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton> */}
                            <ButtonGroup
                                disableElevation
                                variant="contained"
                                aria-label="Disabled button group"
                            >
                                <Button sx={{ margin: '4px 0', borderRadius: '30px', fontSize: '13px', color: '#202237', backgroundColor: 'white', border: '1px solid black', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>Sign in</Button>
                                <Button sx={{ margin: '4px 0 4px 5px', borderRadius: '30px', fontSize: '13px', backgroundColor: '#7c3aed', backgroundImage: 'linear-gradient(to bottom right, #A02BE4, transparent, #4f46e5)' }}>Get Started</Button>
                            </ButtonGroup>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
}
export default Flyheader;
