// app/(tabs)/_layout.tsx
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0000FF",
        tabBarInactiveTintColor: "#0099FF",
        headerStyle: { backgroundColor: "#2222CC" },
        headerTintColor: "#FFFFFF",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Employee Info",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="signIn"
        options={{
          title: "Sign In",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="enter" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="signUp"
        options={{
          title: "Sign Up",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
