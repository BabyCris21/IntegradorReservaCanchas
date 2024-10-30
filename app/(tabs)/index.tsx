import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ImageBackground } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Campos incompletos', 'Por favor, ingresa tu correo electrónico y contraseña.');
      return;
    }
    // Lógica de inicio de sesión
  };

  const handleGoogleLogin = () => {
    // Lógica de inicio de sesión con Google
  };

  const handleFacebookLogin = () => {
    // Lógica de inicio de sesión con Facebook
  };

  const handleRegister = () => {
    // Lógica de navegación a la pantalla de registro
  };

  return (
    <ImageBackground
      source={require('@/assets/images/background-image.jpg')}
      style={styles.background}
    >
      <ThemedView style={styles.container}>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#888"
            autoCapitalize="none"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible}
              placeholderTextColor="#888"
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeButton}>
              <Icon name={passwordVisible ? 'eye-off' : 'eye'} color="#000" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <ThemedText type="defaultSemiBold">Iniciar Sesión</ThemedText>
        </TouchableOpacity>

        <View style={styles.socialButtonContainer}>
          <TouchableOpacity style={styles.fbButton} onPress={handleFacebookLogin}>
            <View style={styles.buttonContent}>
              <Icon name="facebook" color="#fff" size={20} />
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>FB</ThemedText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
            <View style={styles.buttonContent}>
              <MaterialIcons name="google" color="#fff" size={20} />
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>Google</ThemedText>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => { /* Lógica para recuperar contraseña */ }}>
          <ThemedText type="subtitle">¿Olvidaste tu contraseña?</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister}>
          <ThemedText type="subtitle" style={styles.registerText}>¿No tienes cuenta? Regístrate</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semi-transparente
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
    borderColor: '#ccc',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#000',
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
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  fbButton: {
    backgroundColor: '#4267B2',
    flex: 1,
    padding: 15,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#DB4437',
    flex: 1,
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
    color: '#fff',
  },
  registerText: {
    color: '#007AFF',
    marginTop: 15,
    textAlign: 'center',
  },
});
