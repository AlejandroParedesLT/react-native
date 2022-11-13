import ImageColors from 'react-native-image-colors';


export const getPosterColors = async ( uri: string) => {
    const result = await ImageColors.getColors(uri, {
        fallback: 'white',
        cache: true,
        //key: 'unique_key',
    });
    let primary;
    let secondary;

    switch (result.platform) {
        case 'android':
          // android result properties
          primary = result.dominant;
          secondary = result.average;
          //const vibrantColor = result.vibrant;
          break;
        case 'web':
          // web result properties
          const lightVibrantColor = result.lightVibrant;
          break;
        case 'ios':
          // iOS result properties
          primary = result.primary;
          secondary = result.secondary;
          break;
        default:
          throw new Error('Unexpected platform key');
    }
    return [primary, secondary];
};
//console.log(peliculaEnCine[0].title)