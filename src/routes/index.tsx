import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import AppRoutes from "./app.routes";
import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");

const linking = {
  prefixes: [prefix],
  config: {
    screens: {
      home: {
        path: "home",
      },
      about: {
        path: "about",
      },
      task: {
        path: "task/:id",
        // parse: {
        //   id: (id: string) => `task-${id}`,
        // },
      },
    },
  },
};

const fallback = (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 24 }}>Loading...</Text>
  </View>
);

const Routes = () => {
  return (
    <NavigationContainer linking={linking} fallback={fallback}>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;
