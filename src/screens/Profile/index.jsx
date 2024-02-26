import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Inicio")}>
      <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

