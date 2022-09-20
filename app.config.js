import 'dotenv/config'

export default {
  'expo': {
    'name': 'papyro',
    'slug': 'papyro',
    'version': '1.0.0',
    'orientation': 'portrait',
    'icon': './assets/icon.png',
    'splash': {
      'image': './assets/splash.png',
      'resizeMode': 'contain',
      'backgroundColor': '#ffffff'
    },
    'updates': {
      'fallbackToCacheTimeout': 0
    },
    'assetBundlePatterns': [
      '**/*'
    ],
    'ios': {
      'supportsTablet': true
    },
    'android': {
      'package': 'com.papyro',
      'versionCode': 1,
      'adaptiveIcon': {
        'foregroundImage': './assets/adaptive-icon.png',
        'backgroundColor': '#FFFFFF'
      }
    },
    'web': {
      'favicon': './assets/favicon.png'
    },
    'plugins': [
      [
        'expo-image-picker',
        {
          'photosPermission': 'The app accesses your photos to let you share them with your friends.'
        }
      ]
    ],
    extra: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId
    }
  }
}