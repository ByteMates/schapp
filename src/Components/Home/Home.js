import React from 'react';
import { ActivityIndicator, Dimensions, View ,FlatList } from 'react-native';
import { WebView } from 'react-native-webview';
import { List, ListItem ,SearchBar} from "react-native-elements"


let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height


var data = [{
    name:"Taha",
    email:"taha@gmail.com"
},{
    name:"Ovais",
    email:"ovais@gmail.com"
},
{
    name:"Shc",
    email:"shc@gmail.com"
},{
    name:"Taha",
    email:"taha2@gmail.com"
},{
    name:"Ovais",
    email:"ovais2@gmail.com"
},
{
    name:"Shc",
    email:"shc2@gmail.com"
},{
    name:"Taha",
    email:"taha3@gmail.com"
},{
    name:"Ovais",
    email:"ovais3@gmail.com"
},
{
    name:"Shc",
    email:"shc3@gmail.com"
},{
    name:"Taha",
    email:"taha4@gmail.com"
},{
    name:"Ovais",
    email:"ovais4@gmail.com"
},
{
    name:"Shc",
    email:"shc4@gmail.com"
},{
    name:"Taha",
    email:"taha5@gmail.com"
},{
    name:"Ovais",
    email:"ovais5@gmail.com"
},
{
    name:"Shc",
    email:"shc5@gmail.com"
}];

renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };
function HomeScreen({ navigation }) {
    var [visible,setVisible] = React.useState(true);
    
    return (
       <FlatList data={data}  renderItem={({ item }) => (
        <ListItem
          roundAvatar
          title={`${item.name}`}
          subtitle={item.email}
         
        />
        
      )}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={item => item.email}
      ListHeaderComponent={this.renderHeader}
      />


  
    );

    
  }
  export default HomeScreen