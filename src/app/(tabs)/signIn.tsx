import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SignInForm, signInSchema } from "@/schema/signInSchema";

export default function signIn() {
  const {
      control,
      handleSubmit,
      formState: { errors },
  }=useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onChange"
  })

  const onSubmit = () => {
    Alert.alert("Welcome back!");
  }

  return (
    <View style={styles.container}>
      <Text>Email address</Text>
      <Controller control={control} name="email" render={({ field: { onChange, value } }) => (
        <TextInput value={value} onChangeText={onChange} placeholder="your@email.com" />
      )} />
      {errors.email && (
        <Text>{errors.email.message}</Text>
      )}
      <Text>Password</Text>
      <Controller control={control} name="password" render={({ field: { onChange, value } }) => (
        <TextInput secureTextEntry={true} value={value} onChangeText={onChange} placeholder="Passw0rd" />
      )} />
      {errors.password && (
        <Text>{errors.password.message}</Text>
      )}
      <Pressable onPress={() => void handleSubmit(onSubmit)()}>
        <Text>Sign in</Text>
      </Pressable>
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
