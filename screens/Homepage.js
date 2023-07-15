import React,{useState} from "react";
import { View,Text,StyleSheet,TouchableOpacity,StatusBar,TextInput,Modal } from "react-native";
import { NativeBaseProvider,Input, Button, Icon, Box, AspectRatio, Image } from "native-base";
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function Homepage(){
    const navigation =useNavigation();
    
    return(
        <View style={{backgroundColor:'white',height:'100%'}}>
            <View style={{flexDirection:'row',marginTop:'8%',marginLeft:'4%'}}>
                <StatusBar translucent backgroundColor="transparent" />
                <Ionicons name="add-circle-outline" size={50} style={{color:'#4F617D'}} />
                <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'#4F617D'}}>Mannalal Manaklal</Text>
            </View>
            <View>
                <TextInput style={{backgroundColor:'white',height:40,borderColor:"#ccc",borderWidth:1,marginLeft:'13%',marginRight:'13%',marginTop:'5%',borderRadius:7,paddingLeft:'5%'}}
                placeholder="Search Karigar" />
            </View>
            <View style={{flexDirection:'row',marginTop:'3%',marginLeft:'13%',marginRight:"13%"}}>
                <TouchableOpacity style={{backgroundColor:'#7F90AB',borderRadius:10,borderWidth:1,borderColor:'#7F90AB',marginRight:'2%'}}><Text style={{fontSize:12,paddingVertical:5,paddingHorizontal:15,color:'white'}}>Both</Text></TouchableOpacity>
                <TouchableOpacity style={{borderColor:'#7F90AB',borderWidth:1,borderRadius:10,marginRight:'2%'}}><Text style={{fontSize:12,paddingVertical:5,paddingHorizontal:15,color:'#7F90AB'}}>Gold</Text></TouchableOpacity>
                <TouchableOpacity style={{borderColor:'#7F90AB',borderWidth:1,borderRadius:10}}><Text style={{fontSize:12,paddingVertical:5,paddingHorizontal:15,color:'#7F90AB'}}>Silver</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{width:'74%',height:100,elevation:10,borderColor:'#ccc',borderWidth:2,borderRadius:10,marginHorizontal:'13%',backgroundColor:'white',marginTop:'3%'}}>
                    <Text style={{color:'#7F90AB',fontWeight:'bold',marginLeft:10,marginTop:10,fontSize:15}}>Total</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                        <Text style={{color:'#7F90AB',marginLeft:'-10%',fontSize:12}}>Silver</Text>
                        <Text style={{color:'#7F90AB',fontSize:12}}>Gold</Text>
                        <Text style={{color:'#7F90AB',fontSize:12}}>Amount</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={{color:'red',fontSize:12,fontWeight:'bold',marginLeft:'-1%'}}>-14500.00 Gms</Text>
                        <Text style={{color:'green',fontSize:12,fontWeight:'bold',marginLeft:'-2%'}}>+133.500 Gms</Text>
                        <Text style={{color:'green',fontSize:12,fontWeight:'bold',marginRight:'3%'}}>+₹6,76,000</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'74%',height:100,elevation:10,borderColor:'#ccc',borderWidth:2,borderRadius:10,marginHorizontal:'13%',backgroundColor:'white',marginTop:'3%'}}>
                    <Text style={{color:'#7F90AB',fontWeight:'bold',marginLeft:10,marginTop:10,fontSize:15}}>Stock</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                        <Text style={{color:'#7F90AB',marginLeft:'-10%',fontSize:12}}>Silver</Text>
                        <Text style={{color:'#7F90AB',fontSize:12}}>Gold</Text>
                        <Text style={{color:'#7F90AB',fontSize:12}}>Amount</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={{color:'red',fontSize:12,fontWeight:'bold',marginLeft:'-1%'}}>-14500.00 Gms</Text>
                        <Text style={{color:'green',fontSize:12,fontWeight:'bold',marginLeft:'-2%'}}>+133.500 Gms</Text>
                        <Text style={{color:'green',fontSize:12,fontWeight:'bold',marginRight:'3%'}}>+₹6,76,000</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'72%',height:84,elevation:1,borderColor:'#fff',borderWidth:1,borderRadius:10,marginHorizontal:'13%',backgroundColor:'white',marginTop:'3%'}}>
                    <Text style={{color:'#7F90AB',fontWeight:'bold',marginLeft:10,marginTop:10,fontSize:15}}>Karigar</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'3.5%'}}>
                        <Text style={{color:'#7F90AB',marginLeft:'-10%',fontSize:12}}>Silver</Text>
                        <Text style={{color:'#7F90AB',fontSize:12}}>Gold</Text>
                        <Text style={{color:'#7F90AB',fontSize:12}}>Amount</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={{color:'red',fontSize:12,fontWeight:'bold',marginLeft:'-1%'}}>-14500.00 Gms</Text>
                        <Text style={{color:'green',fontSize:12,fontWeight:'bold',marginLeft:'-2%'}}>+133.500 Gms</Text>
                        <Text style={{color:'green',fontSize:12,fontWeight:'bold',marginRight:'3%'}}>+₹6,76,000</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'72%',height:84,elevation:1,borderColor:'#fff',borderWidth:1,borderRadius:10,marginHorizontal:'13%',backgroundColor:'white',marginTop:'3%'}}>
                    <Text style={{color:'#7F90AB',fontWeight:'bold',marginLeft:10,marginTop:10,fontSize:15}}>Supplier</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'3.5%'}}>
                        <Text style={{color:'#7F90AB',marginLeft:'-10%',fontSize:12}}>Silver</Text>
                        <Text style={{color:'#7F90AB',fontSize:12}}>Gold</Text>
                        <Text style={{color:'#7F90AB',fontSize:12}}>Amount</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={{color:'red',fontSize:12,fontWeight:'bold',marginLeft:'-1%'}}>-14500.00 Gms</Text>
                        <Text style={{color:'green',fontSize:12,fontWeight:'bold',marginLeft:'-2%'}}>+133.500 Gms</Text>
                        <Text style={{color:'green',fontSize:12,fontWeight:'bold',marginRight:'3%'}}>+₹6,76,000</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'72%',height:84,elevation:1,borderColor:'#fff',borderWidth:1,borderRadius:10,marginHorizontal:'13%',backgroundColor:'white',marginTop:'3%'}}>
                    <Text style={{color:'#7F90AB',fontWeight:'bold',marginLeft:10,marginTop:10,fontSize:15}}>Bullion</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'3.5%'}}>
                        <Text style={{color:'#7F90AB',marginLeft:'-10%',fontSize:12}}>Silver</Text>
                        <Text style={{color:'#7F90AB',fontSize:12}}>Gold</Text>
                        <Text style={{color:'#7F90AB',fontSize:12}}>Amount</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={{color:'red',fontSize:12,fontWeight:'bold',marginLeft:'-1%'}}>-14500.00 Gms</Text>
                        <Text style={{color:'green',fontSize:12,fontWeight:'bold',marginLeft:'-2%'}}>+133.500 Gms</Text>
                        <Text style={{color:'green',fontSize:12,fontWeight:'bold',marginRight:'3%'}}>+₹6,76,000</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'72%',height:84,elevation:1,borderColor:'#fff',borderWidth:1,borderRadius:10,marginHorizontal:'13%',backgroundColor:'white',marginTop:'3%'}}>
                    <Text style={{color:'#7F90AB',fontWeight:'bold',marginLeft:10,marginTop:10,fontSize:15}}>Customer</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'3.5%'}}>
                        <Text style={{color:'#7F90AB',marginLeft:'-10%',fontSize:12}}>Silver</Text>
                        <Text style={{color:'#7F90AB',fontSize:12}}>Gold</Text>
                        <Text style={{color:'#7F90AB',fontSize:12}}>Amount</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={{color:'red',fontSize:12,fontWeight:'bold',marginLeft:'-1%'}}>-14500.00 Gms</Text>
                        <Text style={{color:'green',fontSize:12,fontWeight:'bold',marginLeft:'-2%'}}>+133.500 Gms</Text>
                        <Text style={{color:'green',fontSize:12,fontWeight:'bold',marginRight:'3%'}}>+₹6,76,000</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
  

export default Homepage;