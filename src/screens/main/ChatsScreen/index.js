import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../components/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontsComponent from '../../../components/FontsComponent';
import SearchComponent from '../../../components/SearchComponent';

const ChatsScreen = props => {
  const Chats = [
    {
      id: '1',
      image: require('../../../assets/Brian.png'),
      name: 'Brian Chesky',
      msg: 'What are your primary goals?',
      noOfMsgs: '2',
      time: '20.00',
    },
    {
      id: '2',
      image: require('../../../assets/Warren.png'),
      name: 'Warren Buffett',
      msg: ' Wow, this is really epic 👍',
      noOfMsgs: '3',
      time: '18:39',
    },
    {
      id: '3',
      image: require('../../../assets/Mary.png'),
      name: 'Mary Barra',
      msg: '  Thank you so much andrew 🔥',
    },
    {
      id: '4',
      image: require('../../../assets/Sanjuanita.png'),
      name: 'Sanjuanita Ordonez',
      msg: 'Hi! Thanks for connecting.',
    },
    {
      id: '5',
      image: require('../../../assets/Tim.png'),
      name: 'Tim Cook',
      msg: ' I know... I’m trying to get the ...',
    },
    {
      id: '6',
      image: require('../../../assets/Maryland.png'),
      name: 'Maryland Winkles',
      msg: ' I appreciate your guidance.',
    },
  ];
  const [chatsData, setChatsData] = useState(Chats);
  const [searchData, setSearchData] = useState('');
  const handleFilter = text => {
    if (text) {
      let filteredData = Chats.filter(item =>
        item.name.toLowerCase().trim().includes(text.toLowerCase()),
      );
      setChatsData(filteredData);
    } else {
      setChatsData(Chats);
    }
  };

  return (
    <View style={styles.screenVw}>
      <View style={styles.contentVw}>
        {/* .............................heading........................ */}
        <View style={styles.headerVw}>
          <View style={styles.headerLeftVw}>
            <Text style={styles.heading}>Chats</Text>
          </View>
          <View style={styles.headerRightVw}>
            <Feather name={'search'} size={28} />
            <Ionicons name={'ellipsis-horizontal-circle-outline'} size={28} />
          </View>
        </View>
        {/* ..............SearchComponent.................... */}
        <SearchComponent
          onChangeText={text => {
            setSearchData(text);
            handleFilter(text);
          }}
          value={searchData}
          onPress={() => {
            setSearchData('');
            handleFilter('');
          }}
        />
        {/* ...................profile Pic.................................. */}
        <View style={styles.heading2Vw}>
          <Text style={styles.nowActive}>Now Active</Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FontsComponent.bold,
                color: Colors.orange,
                fontWeight: '700',
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        {/* ................Now Active...image scroll.................................. */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: 15,
          }}>
          <Image
            source={require('../../../assets/Tim.png')}
            style={styles.activeImage}
          />
          <Image
            source={require('../../../assets/Brian.png')}
            style={styles.activeImage}
          />
          <Image
            source={require('../../../assets/Mary.png')}
            style={styles.activeImage}
          />
          <Image
            source={require('../../../assets/Warren.png')}
            style={styles.activeImage}
          />
          <Image
            source={require('../../../assets/Maryland.png')}
            style={styles.activeImage}
          />
          <Image
            source={require('../../../assets/Sanjuanita.png')}
            style={styles.activeImage}
          />
        </ScrollView>
        {/* ...................line.................................. */}
        <View style={styles.line} />
        <View style={styles.mentors}>
          {/* .......................map......................... */}
          <View>
            {chatsData.map(item => (
              <ScrollView key={item.id}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image source={item.image} style={styles.mentor} />
                    <View
                      style={{
                        marginLeft: 10,
                      }}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.discription}>{item.msg}</Text>
                    </View>
                  </View>
                  {item.noOfMsgs && (
                    <View style={{justifyContent: 'space-between'}}>
                      <View style={styles.circle}>
                        <Text style={{color: '#FFFFFF', fontSize: 10}}>
                          {item.noOfMsgs}
                        </Text>
                      </View>
                      <Text>{item.time}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </ScrollView>
            ))}
          </View>
        </View>
        {/* ...................end.................................. */}
      </View>
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  screenVw: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentVw: {
    marginVertical: 20,
  },
  headerVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  headerRightVw: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  headerLeftVw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 130,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: FontsComponent.bold,
    color: Colors.black,
  },
  nowActive: {
    fontFamily: FontsComponent.bold,
    fontWeight: '700',
    fontSize: 20,
    color: Colors.black,
  },
  heading2Vw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 24,
  },
  activeImage: {
    width: 80,
    height: 80,
    margin: 5,
  },
  mentor: {
    width: 60,
    height: 60,
  },
  name: {
    fontFamily: FontsComponent.bold,
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  discription: {
    fontFamily: FontsComponent.medium,
    fontSize: 14,
    color: '#616161',
    fontWeight: '500',
  },
  circle: {
    height: 25,
    width: 25,
    backgroundColor: Colors.orange,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  mentors: {
    marginHorizontal: 24,
  },
  searchBar: {
    borderColor: '#0B0B0BFF',
    width: '95%',
    marginLeft: 10,
  },
});
