import { Text, View, StyleSheet, TextInput, Pressable, Alert } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { SignUpForm, signUpSchema } from "@/schema/signUpSchema";

export default function SignUp() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpForm>({
      resolver: zodResolver(signUpSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      mode: "onChange"
    })

    const onSubmit = (data: SignUpForm) => {
    Alert.alert("You have signed up successfully", JSON.stringify(data, null, 2));
  };
  return (
    <View style={styles.container}>
      <Text>Sign up</Text>
      <Text>First name</Text>
      <Controller control={control} name="firstName" render={({ field: { onChange, value } }) => (
        <TextInput value={value} onChangeText={onChange} placeholder="John" />
  )} />
      {errors.firstName && (
        <Text>{errors.firstName.message}</Text>
      )}
      <Text>Last name</Text>
      <Controller control={control} name="lastName" render={({ field: { onChange, value } }) => (
        <TextInput value={value} onChangeText={onChange} placeholder="Doe" />
  )} />
      {errors.lastName && (
        <Text>{errors.lastName.message}</Text>
      )}
      <Text>Email address</Text>
      <Controller control={control} name="email" render={({ field: { onChange, value } }) => (
        <TextInput value={value} onChangeText={onChange} placeholder="johndoe@example.com" />
  )} />
      {errors.email && (
        <Text>{errors.email.message}</Text>
      )}
      <Text>Password</Text>
      <Controller control={control} name="password" render={({ field: { onChange, value } }) => (
        <TextInput secureTextEntry={true} value={value} onChangeText={onChange} placeholder="Correct-Horse-Battery-Staple" />
  )} />
      {errors.password && (
        <Text>{errors.password.message}</Text>
      )}
      <Text>Confirm Password</Text>
      <Controller control={control} name="confirmPassword" render={({ field: { onChange, value } }) => (
        <TextInput secureTextEntry={true} value={value} onChangeText={onChange} placeholder="Correct-Horse-Battery-Staple" />
  )} />
      {errors.confirmPassword && (
        <Text>{errors.confirmPassword.message}</Text>
      )}
      <Pressable onPress={() => {handleSubmit(onSubmit)}}>
        <Text>Sign up</Text>
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
