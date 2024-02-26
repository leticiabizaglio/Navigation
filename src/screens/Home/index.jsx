import { View, Text, TouchableOpacity } from 'react-native'
import  styles from './styles'

import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Perfil")}>
      <Text>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Contato")}>
      <Text>Contato</Text>
      </TouchableOpacity>
    </View>
  )
}
