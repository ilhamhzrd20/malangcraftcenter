// @flow

export const TYPES = {
  RECEIVE_ALL_NOTIFICATIONS: 'RECEIVE_ALL_NOTIFICATIONS',
  WHEN_ABOUT_DISCOUNTS: 'WHEN_ABOUT_DISCOUNTS',
  NOTIFICATIONS_SOUND: 'NOTIFICATIONS_SOUND',
  PROMOTIONS_NEAR_ME: 'PROMOTIONS_NEAR_ME',
  WHEN_PAST_SEARCH: 'WHEN_PAST_SEARCH',
};

export const SWITCH_STATE_REFS = {
  RECEIVE_ALL_NOTIFICATIONS: 'receiveAllNotifications',
  WHEN_ABOUT_DISCOUNTS: 'whenIsAboutPromotions',
  NOTIFICATIONS_SOUND: 'notificationsSound',
  PROMOTIONS_NEAR_ME: 'promotionsNearMe',
  WHEN_PAST_SEARCH: 'whenPastSearch',
};

const CONFIG = {
  [TYPES.PROMOTIONS_NEAR_ME]: {
    switchId: SWITCH_STATE_REFS.PROMOTIONS_NEAR_ME,
    text:
      'Dengan mengaktifkan opsi ini, kamu akan mendapatkan notifikasi ketika ada promosi yang berada di dekat lokasi kamu.',
    title: 'Mendapatkan Promosi dekat saya',
  },
  [TYPES.NOTIFICATIONS_SOUND]: {
    switchId: SWITCH_STATE_REFS.NOTIFICATIONS_SOUND,
    text: 'Menghidupkan suara notifikasi',
    title: 'Suara Notifikasi',
  },
  [TYPES.RECEIVE_ALL_NOTIFICATIONS]: {
    switchId: SWITCH_STATE_REFS.RECEIVE_ALL_NOTIFICATIONS,
    title: 'Menerima semua pemberitahuan',
  },
  [TYPES.WHEN_PAST_SEARCH]: {
    switchId: SWITCH_STATE_REFS.WHEN_PAST_SEARCH,
    title: 'Hanya terkait pencarian terakhir saya',
  },
  [TYPES.WHEN_ABOUT_DISCOUNTS]: {
    switchId: SWITCH_STATE_REFS.WHEN_ABOUT_DISCOUNTS,
    title: 'Hanya terkait diskon',
  },
};

export const getItemConfig = (type: string): Object => CONFIG[type];
