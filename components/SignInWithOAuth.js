// import React from "react";
// import * as WebBrowser from "expo-web-browser";
// import { Text, TouchableOpacity } from "react-native";
// import { useOAuth } from "@clerk/clerk-expo";
// import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
// import * as Linking from "expo-linking";

// WebBrowser.maybeCompleteAuthSession();

// const SignInWithOAuth = () => {
//   useWarmUpBrowser();

//   const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

//   const handleOAuthFlow = React.useCallback(async () => {
//     try {
//       const { createdSessionId, signIn, signUp, setActive } =
//         await startOAuthFlow();

//       if (createdSessionId) {
//         setActive({ session: createdSessionId });
//       } else {
//         signIn(); // or signUp()
//       }
//     } catch (err) {
//       console.error("OAuth error", err);
//     }
//   }, [startOAuthFlow]);

//   React.useEffect(() => {
//     const handleDeepLink = async (event) => {
//       if (event.url) {
//         const { path } = Linking.parse(event.url);

//         if (path === "oauth/redirect") {
//           await handleOAuthFlow();
//         }
//       }
//     };

//     const subscription = Linking.addEventListener("url", handleDeepLink);

//     return () => {
//       subscription.remove();
//     };
//   }, [handleOAuthFlow]);

//   const handleSignInWithOAuth = async () => {
//     const redirectUrl = Linking.createURL("oauth/redirect");
//     await WebBrowser.openAuthSessionAsync(
//       "https://your-clerk-domain.clerk.app/signin/oauth/google", // Replace with your Clerk domain and OAuth provider
//       redirectUrl
//     );
//   };

//   return (
//     <TouchableOpacity
//       className={`px-5 py-4 bg-blue-700 my-6 w-4/5 rounded-full`}
//       onPress={handleSignInWithOAuth}
//     >
//       <Text className={`text-center font-bold text-white text-lg`}>
//         Login With Google
//       </Text>
//     </TouchableOpacity>
//   );
// };

// export default SignInWithOAuth;

import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { Text, TouchableOpacity } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <TouchableOpacity
      className={`px-5 py-4 bg-blue-700 my-6 w-4/5 rounded-full`}
      onPress={onPress}
    >
      <Text className={`text-center font-bold text-white text-lg`}>
        Login With Google
      </Text>
    </TouchableOpacity>
  );
};
export default SignInWithOAuth;
