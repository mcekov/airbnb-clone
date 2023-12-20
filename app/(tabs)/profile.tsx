import { View, Text, Button, StyleSheet } from "react-native";
import { SignedIn, useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const Page = () => {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Text>Profile</Text>

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
