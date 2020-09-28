import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };

  sendMail(){
    MailComposer.composeAsync({
      recipients: ['campsites@nucamp.co'],
      subject: 'Inquiry',
      body: 'To whom it may concern: '
    })
  }

  render() {
    return (
      <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
        <ScrollView>
          <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
            <Text> 1 Nucamp Way</Text>
            <Text> Seattle, WA 98001</Text>
            <Text style={{ marginBottom: 10 }}> U.S.A.</Text>
            <Text> Phone: 1-206-555-1234</Text>
            <Text> Email: campsites@nucamp.co</Text>
            <Button
              title="Send email"
              buttonStyle={{ backgroundColor: "#5637DD", margin: 40 }}
              icon={
                <Icon
                  name="envelope-o"
                  type="font-awesome"
                  color="#fff"
                  iconStyle={{ marginRight: 10 }}
                />}
                onPress={()=> this.sendMail()}
              
            />
          </Card>
        </ScrollView>
      </Animatable.View>
    );
  }
}

export default Contact;
