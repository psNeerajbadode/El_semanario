import {DefaultTheme} from 'react-native-paper';

// import { useDispatch, useSelector } from 'react-redux';
// const ThemeMode = useSelector(state => state.Theme);
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primaryOn: ['#EA4A5A', '#F27380'],
    // primaryOff: ['#F5F3F3', '#F5F3F3'],
    primary: '#120D26',
    secondary: '#01A3CF',
    //primaryBlack: '#1A1D25',
    Black: '#000000',
    white: '#FFFFFF',
    OtherText: '#686868',
    softGrey: '#9D9898',
    searchbar_text: '#768EFF',
    disable_text: '#C1C1C1',
    text_color: '#263238',
    // darkGrey: '#8490AE',
    // btnoff: '#A3ABBE',

    // heading_Text: '#AFB1B0',
    // lenear_first: '#8A53FE',
    // lenear_second: '#BB9BFF',
    // another_lenear_first: '#EAEAEA',
    // another_lenear_second: '#B2D0CE',
    // C4C4C4: '#c4c4c4',

    // searchbar: '#7676801F',

    // online: '#42FFB4',
    // Get_Verified: '#8FB61C',
    // red: '#EA4A5A',
    // red_light: '#EC678C',
    // graph_color: '#AE7D00',

    // Like: '#1deb5c',
  },
  dark: true,
};
