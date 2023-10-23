import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

export { ErrorBoundary } from 'expo-router';

export default function Index(){
    return(
        <ScrollView>
            <Text>Index here</Text>
            <Link href={'/nowehre'} style={{color: '#fff'}}>To Nowhere</Link>
        </ScrollView>
    )
}