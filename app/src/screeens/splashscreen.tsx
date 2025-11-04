import React from "react";
import {Text,View } from "react-native";
import { Activity,Bot } from "lucide-react-native";

export default function SplashScreen(){
    return (
        <View>
            <style>={{
                flex:1,
                justifyContent:"center",
                alignItem:"center",
                backgroundColor:"#f8fafc",

            }}
            </style>
            <Bot size={64}></Bot>
        </View>
    )

}
