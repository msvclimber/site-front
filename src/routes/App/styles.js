import { galleryBlue, white } from 'styles/colors';
import { APP_ZOOM } from 'helpers/appConstants';

import RobotoLightWoff2 from 'assets/fonts/Roboto/RobotoLight/RobotoLight.woff2';
import RobotoRegularWoff2 from 'assets/fonts/Roboto/RobotoRegular/RobotoRegular.woff2';
import RobotoMediumWoff2 from 'assets/fonts/Roboto/RobotoMedium/RobotoMedium.woff2';

import RobotoLightEot from 'assets/fonts/Roboto/RobotoLight/RobotoLight.eot';
import RobotoRegularEot from 'assets/fonts/Roboto/RobotoRegular/RobotoRegular.eot';
import RobotoMediumEot from 'assets/fonts/Roboto/RobotoMedium/RobotoMedium.eot';

import RobotoMonoLightWoff2 from 'assets/fonts/RobotoMono/RobotoMonoLight/RobotoMonoLight.woff2';
import RobotoMonoRegularWoff2 from 'assets/fonts/RobotoMono/RobotoMonoRegular/RobotoMonoRegular.woff2';
import RobotoMonoMediumWoff2 from 'assets/fonts/RobotoMono/RobotoMonoMedium/RobotoMonoMedium.woff2';

import RobotoMonoLightEot from 'assets/fonts/RobotoMono/RobotoMonoLight/RobotoMonoLight.eot';
import RobotoMonoRegularEot from 'assets/fonts/RobotoMono/RobotoMonoRegular/RobotoMonoRegular.eot';
import RobotoMonoMediumEot from 'assets/fonts/RobotoMono/RobotoMonoMedium/RobotoMonoMedium.eot';

export default {
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    'body': {
      overflowY: 'scroll',
    },
    'html,body,#root': {
      height: '100%',
      fontFamily: 'Roboto',
      margin: 0,
      backgroundColor: white,
    },
    // 'input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button': {
    //   '-webkit-appearance': 'none',
    //   margin: 0,
    // },
    // 'input[type=date]::-webkit-clear-button, input[type=date]::-webkit-inner-spin-button': {
    //   '-webkit-appearance': 'none',
    //   display: 'none',
    // },
  },
  routesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minHeight: '100%',
    width: '100%',
    fontSize: `calc(16px * ${APP_ZOOM})`,
  },
  pricingListRoute: {
    backgroundColor: galleryBlue,
  },
  '@font-face': [
    {
      fontFamily: 'Roboto',
      fontWeight: '300',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src: `url(${
        NODE_ENV === 'development' ? '' : '/pricing/'
      }${RobotoLightWoff2}) format("woff2")`,
      fallbacks: [
        {
          src: `url(${
            NODE_ENV === 'development' ? '' : '/pricing/'
          }${RobotoLightEot}) format("embedded-opentype")`,
        },
      ],
    },
    {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src: `url(${
        NODE_ENV === 'development' ? '' : '/pricing/'
      }${RobotoRegularWoff2}) format("woff2")`,
      fallbacks: [
        {
          src: `url(${
            NODE_ENV === 'development' ? '' : '/pricing/'
          }${RobotoRegularEot}) format("embedded-opentype")`,
        },
      ],
    },
    {
      fontFamily: 'Roboto',
      fontWeight: '500',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src: `url(${
        NODE_ENV === 'development' ? '' : '/pricing/'
      }${RobotoMediumWoff2}) format("woff2")`,
      fallbacks: [
        {
          src: `url(${
            NODE_ENV === 'development' ? '' : '/pricing/'
          }${RobotoMediumEot}) format("embedded-opentype")`,
        },
      ],
    },
    {
      fontFamily: 'RobotoMono',
      fontWeight: '300',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src: `url(${
        NODE_ENV === 'development' ? '' : '/pricing/'
      }${RobotoMonoLightWoff2}) format("woff2")`,
      fallbacks: [
        {
          src: `url(${
            NODE_ENV === 'development' ? '' : '/pricing/'
          }${RobotoMonoLightEot}) format("embedded-opentype")`,
        },
      ],
    },
    {
      fontFamily: 'RobotoMono',
      fontWeight: '400',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src: `url(${
        NODE_ENV === 'development' ? '' : '/pricing/'
      }${RobotoMonoRegularWoff2}) format("woff2")`,
      fallbacks: [
        {
          src: `url(${
            NODE_ENV === 'development' ? '' : '/pricing/'
          }${RobotoMonoRegularEot}) format("embedded-opentype")`,
        },
      ],
    },
    {
      fontFamily: 'RobotoMono',
      fontWeight: '500',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src: `url(${
        NODE_ENV === 'development' ? '' : '/pricing/'
      }${RobotoMonoMediumWoff2}) format("woff2")`,
      fallbacks: [
        {
          src: `url(${
            NODE_ENV === 'development' ? '' : '/pricing/'
          }${RobotoMonoMediumEot}) format("embedded-opentype")`,
        },
      ],
    },
  ],
};
