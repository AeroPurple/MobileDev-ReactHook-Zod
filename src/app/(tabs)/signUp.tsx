import { SignUpForm, signUpSchema } from "@/schema/signUpSchema";
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
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: SignUpForm) => {
    Alert.alert(
      "You have signed up successfully",
      JSON.stringify(data, null, 2),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.label}>First name</Text>
      <Controller
        control={control}
        name="firstName"
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="John"
            style={styles.field}
          />
        )}
      />
      {errors.firstName && <Text>{errors.firstName.message}</Text>}
      <Text style={styles.label}>Last name</Text>
      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Doe"
            style={styles.field}
          />
        )}
      />
      {errors.lastName && <Text>{errors.lastName.message}</Text>}
      <Text style={styles.label}>Email address</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="johndoe@example.com"
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
            placeholder="Correct-Horse-Battery-Staple"
            style={styles.field}
          />
        )}
      />
      {errors.password && <Text>{errors.password.message}</Text>}
      <Text style={styles.label}>Confirm Password</Text>
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <TextInput
            secureTextEntry={true}
            value={value}
            onChangeText={onChange}
            placeholder="Correct-Horse-Battery-Staple"
            style={styles.field}
          />
        )}
      />
      {errors.confirmPassword && <Text>{errors.confirmPassword.message}</Text>}
      <Pressable
        onPress={() => {
          handleSubmit(onSubmit);
        }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Sign up</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
