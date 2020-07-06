import React from 'react';

import { TopNavigation, TopNavigationAction, Icon } from '@ui-kitten/components';
import { StyleSheet, Text, View, FlatList, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

function Item({ item }) {
  return (
    <View style={styles.listItem} key={item.id}>
      <View style={{alignItems:"flex-start",flex:1}}>
        <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 18, marginTop: 10, fontWeight:"bold", color: '#0C1226'}}>{item.name}</Text>
        <Text style={{fontFamily: 'Poppins_300Light', fontSize: 18, color: 'rgba(130, 155, 250, 0.29)'}}>{item.position}</Text>
      </View>
      <Image source={{uri:item.photo}}  style={{width:100, height:100, marginTop: 20}} />
      <View style={{alignItems:"center", alignContent: "space-between", flex:1, position:'absolute', flexDirection: 'row', width: 300}}>
        <Image source={{uri:item.badge1}} style={{width:32, height:32, marginLeft: 30, marginTop: 120}} />
        <Image source={{uri:item.badge2}} style={{width:32, height:32, marginLeft: 10, marginTop: 120}} />
        <Image source={{uri:item.badge3}} style={{width:32, height:32, marginLeft: 10, marginTop: 120}} />
        <Image source={{uri:item.badge4}} style={{width:32, height:32, marginLeft: 10, marginTop: 120}} />
      </View>
    </View>
  );
}

const Badges: React.FC = ({ navigation } : any) => {
  const handlerPressBack = () => {
    navigation.goBack()
  };
  
  const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
  );
  
  const BackAction = () => (
    <TopNavigationAction onPress={handlerPressBack} icon={BackIcon} />
  );

  const state = {
    data:[
        {   
            "id": 1,
            "name": "Devoradora de Quizes",
            "position": "100% Completo",
            "photo": "https://lh3.googleusercontent.com/TZAgTKEIEgtps1tDGMPWoEcM75zFzWsRPYBcoDsz9s0Ok7KcWJPlH5ystmpd6hYz93VUiToXUH5pEwnQm9dn3gKl6ylEZjjyLTB4UOpqA7uBCN2mMIgqLBm14wO0xc1rSk-zREVoZpyyWJOJLLCH-F6EcWMDwnQhbOyicBfivGkEY6Z2fyHNXs6JPd_9MVXyrcNJq5mpnfgITL8_GU3v1mE6p4eXtLkWmIT1bldg-e6ZVNTGCx6k55r7TDpWE8przE97CidJDCj-DyLml8CK3I2bChRBXJ022GoDIizuISv_Nl0AkQfiPwP9K27jvCLRcz-E8-ArwNKsG4fCTZnT1LUvA_Lt1KfP4PMBWuYj_uPq0mxDe7EBN1p2_CeECSeYb5TDpsnAVWRlJ_arM4zf22lOsEqzq_Vg4ETXTG8Ubty8NqzFytQoO2YeDJ0Qjekk2MHpkeGDVtZIhGj7RXthUuAdA1kGbmEwGcUEvEwcPZnTxBivVKaT9jMoRfo-ZNAQ6yHREIL8oOzda_FFmn5-McghkiYVYAm4rI0YoqpuPzh4frI_Q9GXCeYTiHvaJiowy6-uI0gP8PYk2EHSVzMkOAiodYLu_XCuElwLiBJaHfbq7NtYHpMk9EQAFzGjki7DVzQxxOitHdSMxFa-PorpYycdv2Rl3CAguYdKzhexkiWVzoowzAyNSfAwzIX59cFPe3qA=w1920-h882-ft",
            "badge1": "https://lh3.googleusercontent.com/0LUx77bETRNHTGU1ZtToRVG-BlltaMDSZW9BYJrxO1hjiXdNrvSvknQhOs9eQG2ys6XhBrD0CZSQXy2gAG2iXELRzrTRQ4qhmoTiiwS-opOvECV02rElLGkg63jKgmR7gVtHiV7Ce5TAKjTXn2u_mdgjmqUdyDqeqWti63JdFAxwQD1EQegEwxw95j_QoQW4t_uYw8pFu16D4WGFB7MmzsuYPV6qzY1wreJ7BkqakP8c-PZxzIUDC7apTcAsVLA1W90U29R79jVjG2JJY20-IMk7pbWwh8PBdjfyVnCMzNEhfhk4KAFGCIWcEIKSlj4BWL53AX7XbVk2QVszoBJ9pvUZthznq3oXG1vvMwrtBxzg1fcjKjbluqAxLGqxUCw9mDn27aD-g8VRH2bGSX5chzRjIOKnoKCW4JS7rZ5XVYTSD5DmAe4scbbcSX2GwjnMSeyHsPmlCQWS6x_7is0a53c55kwed1TSt1aXhzO59w4N59Z1xL23K6ESOy5mCtWShV2BtxQID4B-87AiExJbjaOJReUzAM8eplhrem3xWTNKDmQFXKop5-BJJI4XPDs1BJqs8Si9DZacHXSvqox7Kin4UnALZRvm89qljHOOUT7-Gl7MCaikekCHI_S9I7WitiZxGFbmydwTKe9ol5aILbWpzGwT5zxd2v-OAyNHIvysSzcy2p4MHJNPZXwLksR0R7V2=w1378-h882-ft",
            "badge2": "https://lh3.googleusercontent.com/rHZlO-ed0jhH1FGHWBWBL_AftD1TJieIu2RN4Xxp31i0Z_ngVovvKGHbrd-vVz30uroIpHbg4EfbTuHpEspQx39Q8bNwVN0YXwi5xd48N4YiRFh7m6Frc1wBX2Y50Pa2WE-r7NplF9ywqK9U3979f19Mv-9Nnqs2Q1XRkD8D3V0vJZuGnxD1ymMGTz24eo1Q9yzNUYKLwzP2KzOG3uH2Ow_FowWkIs6mP4QtOfwVqhkUE25Tbxw83VPB1lUyT7WlWrwPEP1WBZDXvPxlrJ5fvwXTHDTEaAi6YyGIodEPZrvtnqazp7uIjPEzXCyuKT-uJ0t6Sy6061hZdFdYbM0IaphQd9AkiEqwkxqTOKRHn7hqTuZJd47L6Y9K54vWJZloPQZ0m42GCp-GAPd6VemBm-vnuqAZ5aP0DeclAbuBJjmzmUkyJ0lE6ZJVkl2Ec5smLRdGqxesdNdAKFHFdvPUFOCWrsBv84iH4lp2i11_3ZZJjkWrb9jAtq7yOeyDY7i9kQiIKFlxXr9SrJIvEpI_P-tYW5Y5-4dWLdBhTAfyXehZhHy9jh2G1GAm-Rx5KBCdnxaZtWOcX_-EE2-XegQZQotfeIQgJrm2-Zw5i7nn7KomezVwEgj0NwAc7NPkWUFE41hakl9r_1oI95sUz1jvCG60lVvbMibQxJrIr0AHJrURs_FCyZXg4cj_IjTq7M4frokQ=w1378-h882-ft",
            "badge3": "https://lh3.googleusercontent.com/aS75zsjICNWozFAJTMBv6qLpZkSSeHHxrFqPLEoc-tp6niNsZKldA0XcJ2Id3di7LRP8j-tlpdYnxX7gGfymlaxPsU3qH6OO2Mtmjblg6IWOsjMbLYCQiSZL5j8Kgmf4JgfkHY-oaNU-9n1dJy_y0VEC59H51GB_U2EOO3cC3pvJ1Et9jePwqwx6UG4Rpghc-O1c-qA5Vpx45jHG4-rJ2WjFnIjFiXd56H0D6roNrELIC-OHnl4zvnipDc65pKxGjqjiGe6EOmn4ufn_lr659xlWXfbXCdywr24IR_E868pMbZol5xynLZIlGMC96gwbNuK0IH-ra13LTD_1BaWaagx6tjyeBV7pxFCHGPSRzIiObn99kw8qvIh-ei04vLZ6PX0guHDnlwlXGerJdt6z9byQlzC3dkJhN31Sl8Uoe6aovuSV2pz3v_HtGslDuz6aN4-_CniEnX1kPH_ePrjcK0Qstyiogy7YFjlnYEUcW3OSB1gnmitXKHt7wio4L5P-pl0SE9ZN2M3-rMGHh-RJx1p95a9QksLQdmf8HeqT63VOgpWNmBd_H89_8vD2dZQHdf8xNm-NY0HhVUVqkcib9-SyvrCdjywtHu2e1m-v-X_0Omh4hrDVrRCAm1D__j82QOJufhOtXmHagn0LNv2iBzVKPaL3vn-7hjbfINOtw5LoNpJqDZ_j6yimRgGyT8o2PazR=w1378-h882-ft",
            "badge4": "https://lh3.googleusercontent.com/UGC4P3UTzH8L99NHD6XAcGQGud2kI6z0eUlo7ZtBZAbbtv55Mn7PSMdDxdSsmPZJe-bVkBEmsaw84U8Qeofs09s7MZ3Iaan73KfFRZNsdAASgbtiopLyIDO9ZcN883hkZFIXV_-faZ8LZfiJrifRFKnf8j3619M2dmz7oDrorgY-EeI12-TasvuGdIo4C9pboR75pPu4FyPMqfiEX61Q0VvEmM-SqqScXm_jYW4JQhs-FsWLP42EmpvvRH_Vw-8Kmg_qhG6VXH2AKIZAxJEaDW2K0d8Np0FRfzwB6z2fBZnGxMUuKBLitpnZXnaamxSj9boMHfwf_qSMP4dZUrZCTSCURXGp45oQT19dG5hSdlces4YHfPUvwOQ4F4MSwU2agSUDIqUo9TIAAKaJybLWhS7qebVdd3YsXe3bzkZLmgsOpvE7lo2MLaqXdV-jqLgcIHhkzHFY1oEaP7GPNUKZ2JzN0ymdXz_t6k-xudI3REtgfPMXyeZiNsbHqTh7T0cephIdHK9425iKXv6XkbEx5rwWOzonVL64QS94IP6VHiObLLFtgjDOuYM4eANb7ZZa3oc6dumkDx9pM0NsXkLmqemyN_hmZsA8KArye9SIk6LHM9Lih5Qa0Rh6CWlusUpOix8pyjse_8c3ZMu2qvcmu_yN-cT5-Q6i2urnLk_WwPRE9Xbcr-I3Arac9atnMCZ7Rtfq=w1378-h882-ft",
        },
        {
            "id": 2,
            "name": "Máquina de Leitura",
            "position": "60% Completo",
            "photo": "https://lh3.googleusercontent.com/jLG-42tjkVwQm1ST3m7sQaGcYBUBS7wy3NIOy0ti2q1ekQZl0_Xrf39Efu7HKywZ3RvYYlvcSxBlfcwARTEWxOA6u6c0o7pfgJ-nxyVTPl_AtBFQ4mYHXCZZ9aUHbkfP1DrKgVNstFUVFIqIm_uHLai3L9XUNXiFEqmToDY9UkLe-mnSS-A9I-fVa0VOCMsKOhpyvMwIoVYWeUbNkQ5j_FComvhYSBKTGqrAoyPObgQK0mPN-jYzXAiNzvvviryxDGpd0zG_rXC5luTO1TCnY_NsIBXcCTm33ZjzJH-1RR60krc6vN-BRG6tIJQxDpKLY29WvcF2WHDi5oj4JDyCbesDcm0k5N7_ulztDKx3NnsGkL-yQFifJWvL9fcl-npGO5uVU7gzb3DAt-HRZjbGk4tn7dmHDlg1MWnGeuweSv_s-FaxPUHI3KZs6amsfEjxT-xauTY_YeiSAdHSvcop9iXqM-kgSST4tyZlE0PvS_Q04hDGFibsfnMhwj179nQViJ_0_BuWndhgSx4LWkFMFs59e0WE7PAnVuQRD3kUFTza2gG7Y4UTwWN5-frnllvs5cA5hPUu0Ue-MpHE2J-kHUAxYqqUDWP8VoITGe8xGHPwW0_99BsDHQQq7LhxHCu5EQAeawbh5w3fNXpU7kXHibyfDq5cab5RtNe9yMSXSuyknzDG0WwWkVPyQ59zgP98jSIa=w1378-h882-ft",
            "badge1": "https://lh3.googleusercontent.com/0LUx77bETRNHTGU1ZtToRVG-BlltaMDSZW9BYJrxO1hjiXdNrvSvknQhOs9eQG2ys6XhBrD0CZSQXy2gAG2iXELRzrTRQ4qhmoTiiwS-opOvECV02rElLGkg63jKgmR7gVtHiV7Ce5TAKjTXn2u_mdgjmqUdyDqeqWti63JdFAxwQD1EQegEwxw95j_QoQW4t_uYw8pFu16D4WGFB7MmzsuYPV6qzY1wreJ7BkqakP8c-PZxzIUDC7apTcAsVLA1W90U29R79jVjG2JJY20-IMk7pbWwh8PBdjfyVnCMzNEhfhk4KAFGCIWcEIKSlj4BWL53AX7XbVk2QVszoBJ9pvUZthznq3oXG1vvMwrtBxzg1fcjKjbluqAxLGqxUCw9mDn27aD-g8VRH2bGSX5chzRjIOKnoKCW4JS7rZ5XVYTSD5DmAe4scbbcSX2GwjnMSeyHsPmlCQWS6x_7is0a53c55kwed1TSt1aXhzO59w4N59Z1xL23K6ESOy5mCtWShV2BtxQID4B-87AiExJbjaOJReUzAM8eplhrem3xWTNKDmQFXKop5-BJJI4XPDs1BJqs8Si9DZacHXSvqox7Kin4UnALZRvm89qljHOOUT7-Gl7MCaikekCHI_S9I7WitiZxGFbmydwTKe9ol5aILbWpzGwT5zxd2v-OAyNHIvysSzcy2p4MHJNPZXwLksR0R7V2=w1378-h882-ft",
            "badge2": "https://lh3.googleusercontent.com/rHZlO-ed0jhH1FGHWBWBL_AftD1TJieIu2RN4Xxp31i0Z_ngVovvKGHbrd-vVz30uroIpHbg4EfbTuHpEspQx39Q8bNwVN0YXwi5xd48N4YiRFh7m6Frc1wBX2Y50Pa2WE-r7NplF9ywqK9U3979f19Mv-9Nnqs2Q1XRkD8D3V0vJZuGnxD1ymMGTz24eo1Q9yzNUYKLwzP2KzOG3uH2Ow_FowWkIs6mP4QtOfwVqhkUE25Tbxw83VPB1lUyT7WlWrwPEP1WBZDXvPxlrJ5fvwXTHDTEaAi6YyGIodEPZrvtnqazp7uIjPEzXCyuKT-uJ0t6Sy6061hZdFdYbM0IaphQd9AkiEqwkxqTOKRHn7hqTuZJd47L6Y9K54vWJZloPQZ0m42GCp-GAPd6VemBm-vnuqAZ5aP0DeclAbuBJjmzmUkyJ0lE6ZJVkl2Ec5smLRdGqxesdNdAKFHFdvPUFOCWrsBv84iH4lp2i11_3ZZJjkWrb9jAtq7yOeyDY7i9kQiIKFlxXr9SrJIvEpI_P-tYW5Y5-4dWLdBhTAfyXehZhHy9jh2G1GAm-Rx5KBCdnxaZtWOcX_-EE2-XegQZQotfeIQgJrm2-Zw5i7nn7KomezVwEgj0NwAc7NPkWUFE41hakl9r_1oI95sUz1jvCG60lVvbMibQxJrIr0AHJrURs_FCyZXg4cj_IjTq7M4frokQ=w1378-h882-ft",
            "badge3": "https://lh3.googleusercontent.com/aS75zsjICNWozFAJTMBv6qLpZkSSeHHxrFqPLEoc-tp6niNsZKldA0XcJ2Id3di7LRP8j-tlpdYnxX7gGfymlaxPsU3qH6OO2Mtmjblg6IWOsjMbLYCQiSZL5j8Kgmf4JgfkHY-oaNU-9n1dJy_y0VEC59H51GB_U2EOO3cC3pvJ1Et9jePwqwx6UG4Rpghc-O1c-qA5Vpx45jHG4-rJ2WjFnIjFiXd56H0D6roNrELIC-OHnl4zvnipDc65pKxGjqjiGe6EOmn4ufn_lr659xlWXfbXCdywr24IR_E868pMbZol5xynLZIlGMC96gwbNuK0IH-ra13LTD_1BaWaagx6tjyeBV7pxFCHGPSRzIiObn99kw8qvIh-ei04vLZ6PX0guHDnlwlXGerJdt6z9byQlzC3dkJhN31Sl8Uoe6aovuSV2pz3v_HtGslDuz6aN4-_CniEnX1kPH_ePrjcK0Qstyiogy7YFjlnYEUcW3OSB1gnmitXKHt7wio4L5P-pl0SE9ZN2M3-rMGHh-RJx1p95a9QksLQdmf8HeqT63VOgpWNmBd_H89_8vD2dZQHdf8xNm-NY0HhVUVqkcib9-SyvrCdjywtHu2e1m-v-X_0Omh4hrDVrRCAm1D__j82QOJufhOtXmHagn0LNv2iBzVKPaL3vn-7hjbfINOtw5LoNpJqDZ_j6yimRgGyT8o2PazR=w1378-h882-ft",
        },
        {
            "id": 3,
            "name": "Amante da Literatura",
            "position": "20% Completo",
            "photo": "https://lh3.googleusercontent.com/LaudvVQJE1he92-RqXxOWO7afpmLvJtZYVdM3zz9vgOmXg9M3eM5uaDBIdo-A-tyZIoDtcpW67dbMFUdQF9adye1LdYFCOLqnEJcCIziZygRAhzORLkRMdMQwj0pt5r_ZQ83t1HwxmfR0rE7SoG1QmW3_Lqi8pCdoMKQHKqDiRYLrVPn0tSax_p72CxcGttUuaXZC2FYLqfyJjGtJ4ooWEULg_o-YOfDK8QOoaFiRCb9MxYgnlTj0fX4bhMDsmU4ZnhKxxqO4LmwCauBTw9jwSx5wTZHunJO0waRytgOSQzhzCoash6fBaimSDaeYme1dkDMYWxmAV2TZ_57MpEg2RXfqT7H4GXId2uZ4Ty2sOOqa01iJCVKY6RZIyBSZjZzOu1s6O-xfWTPOZlqkIbN6Bvp-ihrzd0GranjntBdPi4prp8XsN4UijE4iQVs2oB--uxRt3ID0qGjQBP1YEqw52YOOYr3hUyTPhvdqwsQGqd7crGkHh3b86MsqdV4wO2vCRkm2BfCD1K-o7z-2M5XMeCaa3zF6TdE6uVxjAo3hZfSTjfcemsUIEMAMZLdKfbXpdCrxuXkRCzqLvdYb25iTPQuLcYv3mvYPhROVrO_RCbH5daxYkb8C6ZcMR42jkZrj64U9UUPCIc51PUTlfUw4LQs6a-NZ2JzjLLjScjFy9FbHWkdD7awek0eJZ27IfMQsmNF=w1378-h882-ft",
            "badge1": "https://lh3.googleusercontent.com/0LUx77bETRNHTGU1ZtToRVG-BlltaMDSZW9BYJrxO1hjiXdNrvSvknQhOs9eQG2ys6XhBrD0CZSQXy2gAG2iXELRzrTRQ4qhmoTiiwS-opOvECV02rElLGkg63jKgmR7gVtHiV7Ce5TAKjTXn2u_mdgjmqUdyDqeqWti63JdFAxwQD1EQegEwxw95j_QoQW4t_uYw8pFu16D4WGFB7MmzsuYPV6qzY1wreJ7BkqakP8c-PZxzIUDC7apTcAsVLA1W90U29R79jVjG2JJY20-IMk7pbWwh8PBdjfyVnCMzNEhfhk4KAFGCIWcEIKSlj4BWL53AX7XbVk2QVszoBJ9pvUZthznq3oXG1vvMwrtBxzg1fcjKjbluqAxLGqxUCw9mDn27aD-g8VRH2bGSX5chzRjIOKnoKCW4JS7rZ5XVYTSD5DmAe4scbbcSX2GwjnMSeyHsPmlCQWS6x_7is0a53c55kwed1TSt1aXhzO59w4N59Z1xL23K6ESOy5mCtWShV2BtxQID4B-87AiExJbjaOJReUzAM8eplhrem3xWTNKDmQFXKop5-BJJI4XPDs1BJqs8Si9DZacHXSvqox7Kin4UnALZRvm89qljHOOUT7-Gl7MCaikekCHI_S9I7WitiZxGFbmydwTKe9ol5aILbWpzGwT5zxd2v-OAyNHIvysSzcy2p4MHJNPZXwLksR0R7V2=w1378-h882-ft",
        }
    ]
  }

  return (
    <View style={styles.container}>
      <TopNavigation
      accessoryLeft={BackAction}
      style={{marginTop: 30, backgroundColor: "transparent"}}
      title={<Text style={styles.topText}>Conquistas</Text>}
    />
      <FlatList
        style={{flex:1}}
        data={state.data}
        renderItem={({ item }) => <Item item={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 0,
    backgroundColor: '#F7F7F7',

  },
  topText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#515C6F',
    fontWeight: 'bold',
    fontFamily: 'Poppins_400Regular',
  },
  listItem:{
    margin:10,
    padding:30,
    backgroundColor:"#FFF",
    width:"85%",
    height: 200,
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});

export default Badges;