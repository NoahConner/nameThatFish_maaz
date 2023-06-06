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
  Platform,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  Slider1Svg,
  Slider2Svg,
  Slider3Svg,
  Slider3NewFinalSvg,
} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {WavesAnimated} from '../components';
import {screenHeight} from '../constants/screenResolution';
import Slider4 from '../components/Slider4';
const Slider = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    navigation.navigate('Intro');
  };
  const onSkip = () => {
    navigation.navigate('Intro');
  };

  const renderNextButton = () => {
    return (
      <View style={{padding: moderateScale(20), top: moderateScale(-20)}}>
        <Text style={{...fonts.buttonTextSlide, color: 'white'}}>Next</Text>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={{padding: moderateScale(20), top: moderateScale(-20)}}>
        <Text style={{...fonts.buttonTextSlide, color: 'white'}}>Skip</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <>
        <View style={{padding: moderateScale(20), top: moderateScale(-20)}}>
          <Text style={{...fonts.buttonTextSlide, color: 'white'}}>Finish</Text>
        </View>
      </>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        {item.key === 's4' ? (
          <Slider4 />
        ) : (
          <ImageBackground
            source={require('../assets/images/Rectangle.png')}
            resizeMode="stretch"
            style={{
              flex: 1,

              alignItems: 'center',
              // height: screenHeight
            }}>
            <View style={styles.container}>
              <View style={{marginBottom: moderateScale(20)}}>
                {item.key === 's3' ? (
                  <Image
                    source={require('../assets/images/slider4Image.png')}
                    resizeMode="contain"
                    style={{marginTop: moderateScale(140)}}
                  />
                ) : (
                  <item.image
                    width={moderateScale(332)}
                    height={moderateScale(360)}
                  />
                )}
              </View>
              <Text style={styles.introTextStyle}>{item.text}</Text>
              <Text style={styles.introBodyStyle}>{item.body}</Text>
            </View>
          </ImageBackground>
        )}
      </View>
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
          activeDotStyle={{backgroundColor: colors.white, marginBottom:Platform.OS ==='ios'? moderateScale(220): moderateScale(130) }}
          dotStyle={{backgroundColor: colors.pagination, marginBottom:Platform.OS ==='ios'? moderateScale(220): moderateScale(130) }}
          renderNextButton={renderNextButton}
          renderSkipButton={renderSkipButton}
          renderDoneButton={renderDoneButton}
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
    marginTop: moderateScale(50),
    // marginBottom: moderateScale(70),
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
    marginHorizontal: moderateScale(16),
    textAlign: 'center',
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
    image: Slider3NewFinalSvg,
  },
];
