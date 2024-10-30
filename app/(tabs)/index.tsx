import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Icon from 'react-native-vector-icons/Feather'; // Para el ícono de ocultar/mostrar contraseña

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    // Lógica de inicio de sesión
  };

  const handleGoogleLogin = () => {
    // Lógica de inicio de sesión con Google
  };

  const handleFacebookLogin = () => {
    // Lógica de inicio de sesión con Facebook
  };

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={styles.reactLogo}
      />
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#888" // Color del texto del placeholder
          autoCapitalize="none" // Desactiva la capitalización automática
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            placeholderTextColor="#888" // Color del texto del placeholder
            autoCapitalize="none" // Desactiva la capitalización automática
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeButton}>
            <Icon
              name={passwordVisible ? 'eye-off' : 'eye'}
              color="#000"
              size={20} // Ajusta el tamaño según sea necesario
            />
          </TouchableOpacity>
        </View>
      </ThemedView>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <ThemedText type="defaultSemiBold">Iniciar Sesión</ThemedText>
      </TouchableOpacity>

      <View style={styles.socialButtonContainer}>
        <TouchableOpacity style={styles.fbButton} onPress={handleFacebookLogin}>
          <View style={styles.buttonContent}>
            <Icon name="facebook" color="#fff" size={20} /> {/* Ícono de Facebook */}
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>FB</ThemedText>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <View style={styles.buttonContent}>
            <Icon name="google" color="#fff" size={20} /> {/* Ícono de Google */}
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>Google</ThemedText>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => {/* Lógica para recuperar contraseña */}}>
        <ThemedText type="subtitle">¿Olvidaste tu contraseña?</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ffffff', // Fondo blanco
  },
  reactLogo: {
    height: 178,
    width: 290,
    marginBottom: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc', // Borde gris claro
    backgroundColor: '#ffffff', // Fondo blanco para los campos de entrada
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#000', // Color del texto en los campos
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  button: {
    backgroundColor: '#A1CEDC',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espacio entre los botones
    width: '100%', // Asegúrate de que el contenedor ocupe el ancho completo
    marginBottom: 10,
  },
  fbButton: {
    backgroundColor: '#4267B2', // Color de Facebook
    flex: 1, // Ocupa el 50% del ancho
    padding: 15,
    borderRadius: 5,
    marginRight: 10, // Espacio entre botones
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#DB4437', // Color de Google
    flex: 1, // Ocupa el 50% del ancho
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 10,
    color: '#fff', // Color del texto
  },
});
