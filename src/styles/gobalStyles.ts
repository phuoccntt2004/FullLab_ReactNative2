import { StyleSheet } from "react-native";
import COLORS from "../assets/colors/Colors";
import { FONTFAMILY } from "../../assets/fonts";

export const gobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        backgroundColor: COLORS.WHITE
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    section:{
        paddingHorizontal:15,
        paddingBottom:15
    },
    button: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryBlackHex,
        paddingHorizontal: 10,
        minHeight: 58,
        flexDirection: 'row'
    },
    shadow: {
        backgroundColor: COLORS.WHITE,
        flex: 1,
        marginRight: 7,
        shadowColor: 'rgba(0, 0, 0.5)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5
    },
    card:{
        borderRadius:25,
        backgroundColor: COLORS.WHITE,
        shadowColor: COLORS.HEX_LIGHT_GRAY,
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontFamily: FONTFAMILY.poppins_regular,
        color:COLORS.HEX_BLACK,

    },
    desciptionText:{
        color:COLORS.HEX_BLACK,
        fontFamily:FONTFAMILY.poppins_bold
    },
    box_100:{
        width:100,
        height:100,
    }
})