import { SignInForm, signInSchema } from "@/schema/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function signIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = () => {
    Alert.alert("Welcome back!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email address</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="your@email.com"
            style={styles.field}
          />
        )}
      />
      {errors.email && <Text>{errors.email.message}</Text>}
      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            secureTextEntry={true}
            value={value}
            onChangeText={onChange}
            placeholder="Passw0rd"
            style={styles.field}
          />
        )}
      />
      {errors.password && <Text>{errors.password.message}</Text>}
      <Pressable
        onPress={() => void handleSubmit(onSubmit)()}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "15%",
  },
  label: {
    alignSelf: "flex-start",
    marginTop: 12,
  },
  field: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 8,
    borderColor: "lightsteelblue",
    borderWidth: 2,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 8,
    padding: 8,
    marginTop: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: "lightskyblue",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
