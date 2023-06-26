// https://www.youtube.com/watch?v=h_qq1Gv09ZE

import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

// server Id : AAAAhQuWyok:APA91bEpRB9MyqgixB5R8ACVxVabIitHloaJS0h-pOBW_G36wlvaE2T1bAo8ZASp3hWXg2GXtgOfsC6UPxcpt_KqZypwBsZubn5dYuN2SehSQh15Gf_UYRT2PZ-41brdpTmSfM_UCBCd
// fcm token : fvIgffUjTYKn73v0PNJlQo:APA91bE3YKqKpO9Zzo5W5bgdPam03vz-qc2uNxXvksVP80KIVZGvbPvHvBeYvyr7eQVZAB-4YuyI3kcqEqxe0DDixH_YaUlbFstFQVePPgTGbmaaq4r78uE6vVhBKPKolAG9XSij2wmL
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken()
  }
}

const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log('Old fcm Token:', fcmToken);
  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('new generated fcm Token', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } catch (error) {
      console.log(error, 'Error');
    }
  }
};

export const notificationService=()=>{

  // Assume a message-notification contains a "type" property in the data payload of the screen to open

   messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    
  });
// foreGround

messaging().onMessage(async remoteMessage => {
  console.log('Foreground Notification',remoteMessage);
});
  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
      
    });
}