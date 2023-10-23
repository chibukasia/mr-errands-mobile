import { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { View, Text } from "react-native";
import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  useTheme,
} from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({ Inter_500Medium });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack>
        <Stack.Screen options={{headerShown: false}} name="(tabs)" />
      </Stack>
    </ThemeProvider>
  );
}
