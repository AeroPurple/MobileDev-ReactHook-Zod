import { Text, View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
