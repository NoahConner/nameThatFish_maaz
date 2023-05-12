import React, {useState} from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ImageBackground,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  Slider1Svg,
  Slider2Svg,
  Slider3Svg,
  Slider4Svg,
  BackgroundeSvg,
} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';

const Slider = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderNextButton = () => {
    return (
      <View
        style={{
          
          position: 'absolute',
          right: moderateScale(0),
          bottom: moderateScale(20),
        }}>
        <Text
          style={{
            color: colors.white,
            ...fonts.buttonText,
          }}>
          Next
        </Text>
      </View>
    );
  };
  const renderSkipButton = () => {
    return (
      <View
      style={{
        borderBottomWidth: 2,
        borderColor: colors.white,
        position: 'absolute',
        left: moderateScale(0),
        bottom: moderateScale(17),
        
      }}>
      <Text
        style={{
          color: colors.white,
          ...fonts.buttonText,
          
        }}>
        Skip
      </Text>
    </View>
    );
  };
  const renderFinishButton = () => {
    return (
      <View
        style={{
          
          position: 'absolute',
          right: moderateScale(0),
          bottom: moderateScale(20),
        }}>
        <Text
          style={{
            color: colors.white,
            ...fonts.buttonText,
          }}>
          Next
        </Text>
      </View>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <ImageBackground
        source={require('../assets/images/Rectangle.png')}
        resizeMode="cover"
        style={{
          flex: 1,
          alignItems: 'center',
          
        }}>
        <View style={styles.container}>
          <View style={{marginBottom: moderateScale(20)}}>
            <item.image
              width={moderateScale(280)}
              height={moderateScale(321)}
            />
          </View>
          <Text style={styles.introTextStyle}>{item.text}</Text>
          <Text style={styles.introBodyStyle}>{item.body}</Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          activeDotStyle={{
            backgroundColor: colors.white,
            marginBottom: moderateScale(100),
          }}
          dotStyle={{
            backgroundColor: colors.pagination,
            marginBottom: moderateScale(100),
          }}
          renderNextButton={RenderNextButton}
          renderSkipButton={renderSkipButton}
          renderDoneButton={renderFinishButton}
          doneLabel="Finish"
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showNextButton={true}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(70),
  },
  introTextStyle: {
    ...fonts.subHead,
    color: colors.gray,
    marginTop: moderateScale(6),
  },
  introBodyStyle: {
    ...fonts.text,
    letterSpacing: 0.05,
    color: colors.gray,
    marginTop: moderateScale(10),
    marginHorizontal:moderateScale(16),
    textAlign:'center'
  },
});

const slides = [
  {
    key: 's1',
    text: 'Lorem ipsum dolor sit amet',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    image: Slider1Svg,
  },
  {
    key: 's2',
    text: 'Lorem ipsum dolor sit amet',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    image: Slider2Svg,
  },
  {
    key: 's3',
    text: 'Lorem ipsum dolor sit amet',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    image: Slider3Svg,
  },
  {
    key: 's4',
    text: 'Lorem ipsum dolor sit amet',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    image: Slider4Svg,
  },
];
