import React, {useContext} from 'react'
import { View, Text, SectionList } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/itemSeparator';
import { Casas } from '../interfaces/appInterfaces';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", ]
    }
];

export const SectionListScreen = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <View style={{...styles.globalMargin, flex:1}}>
        <SectionList 
          sections={casas}
          keyExtractor={(item, index)=>item+index}
          ListHeaderComponent={()=> <HeaderTitle title={'Section list'}/>}
          ListFooterComponent={()=> <HeaderTitle title={'Total de generos: '+casas.length}/>}
          renderItem={({item})=> <Text style={{color:theme.colors.text}}>{item}</Text>}
          stickySectionHeadersEnabled
          renderSectionHeader={({section})=>(
            <View style={{backgroundColor:theme.colors.background}}>
              <HeaderTitle title={section.casa}/>
            </View>
          )}
          renderSectionFooter={({section})=>(
            <HeaderTitle title={'Total de peliculas: '+section.data.length}/>
          )}
          SectionSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}
