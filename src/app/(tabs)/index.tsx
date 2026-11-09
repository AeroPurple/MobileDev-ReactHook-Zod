import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
 
import { employeeSchema, EmployeeFormData } from '@/schemas/employee';
 
export default function EmployeeScreen() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
    mode: 'onBlur', // validate when the user leaves a field
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
    },
  });
 
  // Only runs when all fields are valid
  const onSubmit = (data: EmployeeFormData) => {
    Alert.alert('Employee Saved', `${data.firstName} ${data.lastName}`);
    reset();
  };
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Employee Information</Text>
 
      <Text style={styles.label}>First Name</Text>
      <Controller
        control={control}
        name="firstName"
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            style={[styles.input, errors.firstName && styles.inputError]}
            placeholder="Jane"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.firstName && <Text style={styles.error}>{errors.firstName.message}</Text>}
 
      <Text style={styles.label}>Last Name</Text>
      <Controller
        control={control}
        name="lastName"
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            style={[styles.input, errors.lastName && styles.inputError]}
            placeholder="Doe"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.lastName && <Text style={styles.error}>{errors.lastName.message}</Text>}
 
      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="jane@company.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
 
      {/* Phone */}
      <Text style={styles.label}>Phone</Text>
      <Controller
        control={control}
        name="phone"
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            style={[styles.input, errors.phone && styles.inputError]}
            placeholder="4035551234"
            keyboardType="phone-pad"
            maxLength={10}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.phone && <Text style={styles.error}>{errors.phone.message}</Text>}
 
      {/* Position */}
      <Text style={styles.label}>Position</Text>
      <Controller
        control={control}
        name="position"
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            style={[styles.input, errors.position && styles.inputError]}
            placeholder="Software Developer"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.position && <Text style={styles.error}>{errors.position.message}</Text>}
 
      <Pressable
        style={[styles.button, !isValid && styles.buttonDisabled]}
        disabled={!isValid}
        onPress={() => handleSubmit(onSubmit)()}
      >
        <Text style={styles.buttonText}>Save Employee</Text>
      </Pressable>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 100 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, fontWeight: '600', marginTop: 12, marginBottom: 4 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, fontSize: 16 },
  inputError: { borderColor: 'red' },
  error: { color: 'red', marginTop: 4 },
  button: { backgroundColor: '#2563EB', padding: 14, borderRadius: 8, marginTop: 24, alignItems: 'center' },
  buttonDisabled: { backgroundColor: '#9CA3AF' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});