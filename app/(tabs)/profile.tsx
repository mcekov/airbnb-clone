import { View, Text, Button, StyleSheet } from "react-native";
import { SignedIn, useAuth } from "@clerk/clerk-expo";
import { Link, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";

const Page = () => {
  const { signOut, isSignedIn } = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({});
  }, []);

  return (
    <View style={defaultStyles.centerElement}>
      <Button title="logout" onPress={() => signOut()} />
      {!isSignedIn && (
        <Link href={"/(modals)/login"}>
          <Text>Login</Text>
        </Link>
      )}
    </View>
  );
};

export default Page;
