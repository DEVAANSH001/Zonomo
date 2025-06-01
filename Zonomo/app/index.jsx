
import styles from './AuthScreen.styles';

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function AuthScreen({ type = 'login' }) {
  const isLogin = type === 'login';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>
          {isLogin ? 'Welcome back,' : "Let's create your account"}
        </Text>

        {isLogin ? <LoginForm /> : <SignupForm />}
      </ScrollView>
    </SafeAreaView>
  );
}

const LoginForm = () => (
  <>
    <Text style={styles.subtitle}>
      Discover Limitless Choices and Unmatched Convenience
    </Text>

    <InputWithIcon icon={<Ionicons name="mail-outline" size={20} color="gray" />} placeholder="Email" />
    <InputWithIcon icon={<Feather name="lock" size={20} color="gray" />} placeholder="Password" secure />

    <View style={styles.rowBetween}>
      <View style={styles.rowCenter}>
        <TouchableOpacity style={styles.checkbox} />
        <Text style={styles.label}>Remember Me</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.link}>Forget Password</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.primaryBtn}>
      <Text style={styles.primaryBtnText}>Sign In</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.secondaryBtn}>
      <Text style={styles.secondaryBtnText}>Create Account</Text>
    </TouchableOpacity>
  </>
);


const InputWithIcon = ({ icon, placeholder, secure }) => (
  <View style={styles.inputContainer}>
    {icon}
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="gray"
      secureTextEntry={secure}
      style={styles.input}
    />
  </View>
);
