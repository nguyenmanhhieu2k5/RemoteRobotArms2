import React from "react";
import {Text,View } from "react-native";
import { Activity,Robot } from "lucide-react-native";

export default function SplashScreen(){
    return (
        <View>
            style={{
                flex:1,
                justifyContent:"center",
                alignItem:"center",
                backgroundColor:"#f8fafc",

            }}
            <Robot size={64}></Robot>
        </View>
    )

}
