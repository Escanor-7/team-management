import { ActivityIndicator, StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Groups } from '@screens/Groups';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme} >
      {fontsLoaded ? <Groups /> : <ActivityIndicator size={50} style={secundaryStyles.loading} />}
    </ThemeProvider>
  );
}

const secundaryStyles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#202024',
    alignItems: 'center',
    justifyContent: 'center'
  }
})