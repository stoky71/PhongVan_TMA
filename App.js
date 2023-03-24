import { StatusBar } from 'expo-status-bar';
import { FlatList,Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const listCategories = [
    { id:1, name:'All', image: require('./images/all.png')},
    { id:2, name:'Clothing', image: require('./images/dress.png')},
    { id:3, name:'Shoes', image: require('./images/shoes.png')},
    { id:4, name:'Accessories', image: require('./images/accessories.png')},
    { id:5, name:'Bags', image: require('./images/bags.png')},
  ]
  const listItems =[
    { id:1, name: 'Áo dài thướt tha', price:'72', imgae: require('./images/whiteShirt.jpeg')},
    { id:2, name: 'Áo bà ba', price:'87', imgae: require('./images/whiteShirt2.jpeg')},
    { id:3, name: 'Áo dài nữ', price:'90', imgae: require('./images/aodai.jpg')},
    { id:4, name: 'Áo dài thanh lịch', price:'95', imgae: require('./images/aodai1.jpg')},
    { id:5, name: 'Áo cổ cao', price:'65', imgae: require('./images/aoLen.jpg')}
  ]
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.SearchRow}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <TextInput placeholder="     Search" style={styles.SearchBox}></TextInput>
          <Icon name='search' size={20} style={{marginLeft: '-10%',}}/>
        </View>
        <TouchableOpacity style={{alignSelf:'center'}}>
          <Icon name='filter' size={30}/>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.13, alignSelf:'center',marginTop:-50}}>
        <FlatList key={'#'}
          horizontal
          data={listCategories}
          renderItem= {({item, index}) =>{
            return(
              <View style={{margin:12, alignItems:'center'}}>
                <TouchableOpacity>
                  <View style={{backgroundColor:'white', borderRadius:75, height:55, width:50, alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                    <Image source={item.image} style={styles.ImgageItem}/>
                  </View>
                  <Text style={{alignSelf:'center',textAlign:'center',margin:5,fontWeight:'bold',}}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>
      <TouchableOpacity style={styles.SalesBox}>
          <View style={styles.ContentBox}>
            <View style={styles.BoxIcon}>
              <Image source={require('./images/sales.png')} style={styles.IconSales} />
            </View>
            <View style={styles.InfoBox}> 
              <View style={styles.InfoRow}>
                <Text style={styles.TextSales1}> 50% OFF</Text>
              </View>
              <View style={styles.InfoRow}>
                <Text style={styles.TextSales2}> on all women's shoes</Text>
              </View>
            </View>
          </View>
      </TouchableOpacity>
      <View style={{flex: 0.35, alignSelf:'center', justifyContent:'center', margin: 10}}>
        <Text style={styles.TextNewItems}>New Items</Text>
        <FlatList data={listItems}
                key={'#'}
                numColumns={2}
                renderItem = {({item, index}) => {
                  return(
                    <View style={{padding:5}}>
                      <Image source={item.imgae} style={{height:150, width:150, borderRadius:15, margin:5}}/>
                      <Text style={{marginLeft:5, fontWeight:'700', fontSize:20, color:'#2C5784'}}>{item.name}</Text>
                      <Text style={{margin:5, fontWeight:'700',fontSize:18}}>$ {item.price}.00</Text>
                      <TouchableOpacity 
                        style={{
                                borderRadius: 15,
                                height:40,
                                width:40,
                                alignSelf:'center',
                                marginTop:-35,
                                marginLeft:110}}>
                        <Text style={{color:'black',
                                      textDecorationStyle: 'solid',
                                      fontSize:30,
                                      fontVariant: ['proportional-nums'],
                                      textAlign:'center',
                                      margin:7}}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }}>
              </FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-evenly',
  },
  SearchRow:{
    flex: 0.15,
    justifyContent: 'space-around',
    flexDirection: 'row',
    // alignItems:'center'
  },
  SearchBox:{
    height: '40%',
    width: '95%',
    borderRadius: 15,
    borderWidth: 1.2,
    borderColor: 'black'
  },
  ImgageItem:{
    height:35,
    width:35, 
    borderRadius:15
  },
  SalesBox:{
    width: '90%',
    flexDirection:'row',
    backgroundColor: 'white',
    flex: 0.2,
    borderRadius: 15,
    alignSelf: 'center',
  },
  ContentBox:{
    marginLeft:25,
    flex: 0.5,
    height: '60%',
    width: '60%',
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between'
  },
  BoxIcon:{
    height: '100%',
    width: '70%',
    backgroundColor: '#F5F5F5',
    flexDirection:'column',
    borderRadius: 15,
    alignItems:'center',
    justifyContent:'center',
  },
  IconSales:{
    height: 50,
    width: 50,
  },
  InfoBox:{
    flexDirection:'column',
    borderRadius: 15,
    alignItems:'flex-start',
    justifyContent:'center',
  },
  InfoRow:{
    marginLeft:20,
    flexDirection:'row',
    width: '100%'
  },
  TextSales1:{
    fontWeight:'bold',
    fontSize: 30,
    textAlign:'left'
  },
  TextSales2:{
    fontWeight:'700',
    fontSize: 15,
    textAlign:'left',
  },
  TextNewItems:{
    marginLeft:10,
    textDecorationStyle: 'solid',
    fontSize:28,
    fontVariant: ['proportional-nums'],
  },
});
