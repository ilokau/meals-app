import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress }) {
    return <Pressable onPress={onPress}>
        <Ionicons name="heart" size={24} color="white" />
    </Pressable>
};

export default IconButton;