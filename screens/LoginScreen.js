

export default class login extends React.Component {

	constructor(props) {
		super(props);
		this.state = { userInfo: null };
	}

	_renderUserInfo = () => {
    render (
      <View style={{ alignItems = 'center' }}>
        <Image
          source = {{ uri: this.state.userInfo.picture.data.url }}
          style = {{ width: 100, height: 100, borderRadius: 50}}
        />

        <Text style={{ fontSize: 20 }}> {this.state.userInfo.name} </Text>
      </View>

      {}
      );
  };



	render() {
		return (
			<View>

				<FormLabel>Email</FormLabel>
                <FormInput
                 value = {this.state.email} 
                 onChangeText={email => this.setState({ email })}
                 placeholder='john@icloud.com'
                 />
                <FormLabel>Password</FormLabel>
                <FormInput 
                value = {this.state.password}
                secureTextEntry
                placeholder='*******'
                onChangeText={password => this.setState({ password })}
                />

				<Button
				  onPress={logIn}
				  title="Facebook Login"
				  color="#841584"
				  accessibilityLabel="Learn more about this purple button"
				/>

				{!this.state.userInfo? 
					(<<Button
					  onPress={logIn}
					  title="Facebook Login"
					  color="#841584"
					  accessibilityLabel="Learn more about this purple button"
					/>) : 

					(this.renderUserInfo())}

			</View>
		
	    
	    );
	  }
	}

	async logIn() {
	  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('130142711018493', {
	      permissions: ['public_profile'],
	    });
	  if (type === 'success') {
	    // Get the user's name using Facebook's Graph API
	    const response = await fetch(
	      `https://graph.facebook.com/me?access_token=${token}&fields=id.name.picture.type(large)`);
	    const userInfo = await response.json();
	    this.setState({ userInfo })
	    Alert.alert(
	      'Logged in!',
	      `Hi ${(await response.json()).name}!`,
	    );
	  }
	}
}