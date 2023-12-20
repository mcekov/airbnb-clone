import { View, Text, Button } from "react-native";
import { SignedIn, useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const Page = () => {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Text>Profile</Text>

      <Button title="logout" onPress={() => signOut()} />
      {!isSignedIn && <Link href={"/(modals)/login"}> test </Link>}
    </View>
  );
};

export default Page;
