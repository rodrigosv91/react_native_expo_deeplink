import { View, Text } from "react-native";

const Task = ({ route }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 32 }}>Task ID: {route.params?.id}</Text>
    </View>
  );
};

export default Task;
