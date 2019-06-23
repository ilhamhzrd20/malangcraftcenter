// flow

export const TYPES = {
  ERROR_SERVER_CONNECTION: 'ERROR_SERVER_CONNECTION',
  YOU_MIGHT_LIKE_EMPTY: 'YOU_MIGHT_LIKE_EMPTY',
  SEARCH_NOT_FOUND: 'SEARCH_NOT_FOUND',
  INITIAL_SEARCH: 'INITIAL_SEARCH',
  POPULAR_EMPTY: 'POPULAR_EMPTY',
  SEARCH_EMPTY: 'SEARCH_EMPTY',
  BORING_CITY: 'BORING_CITY',
  HOME_EMPTY: 'HOME_EMPTY',
};

const CONFIGS = {
  [TYPES.ERROR_SERVER_CONNECTION]: {
    middleText:
      'Sepertinya server nya sedang bermasalah.',
    bottomText: 'Coba lagi nanti.',
    iconName: 'server-network-off',
    topText: 'Oops...',
  },

  [TYPES.INITIAL_SEARCH]: {
    middleText: 'Cari UMKM yang menjual produk yang kamu inginkan',
    bottomText: '',
    iconName: 'room-service',
    topText: 'Cari UMKM',
  },

  [TYPES.SEARCH_EMPTY]: {
    middleText: "Tidak ada UMKM yang cocok dengan apa yang kamu cari.",
    bottomText: 'Bagaimana kalau mencari yang lain?',
    iconName: 'food-off',
    topText: 'Tidak ada',
  },

  [TYPES.BORING_CITY]: {
    middleText: "Sayangnya, tidak ada event di Malang hari ini.",
    bottomText: 'Semoga besok ada',
    iconName: 'city',
    topText: 'Hmmm...',
  },

  [TYPES.YOU_MIGHT_LIKE_EMPTY]: {
    middleText:
      "Sepertinya tidak ada yang cocok.",
    bottomText: 'Mohon maaf.',
    iconName: 'food-off',
    topText: 'Hmmm...',
  },

  [TYPES.POPULAR_EMPTY]: {
    middleText: 'Sepertinya toko - toko sedang sepi hari ini.',
    bottomText: 'Mohon maaf.',
    iconName: 'food-off',
    topText: 'Hmmm...',
  },

  [TYPES.HOME_EMPTY]: {
    middleText:
      "Aneh...\n\nSepertinya tidak ada yang bisa kami rekomendasikan.",
    bottomText: 'Mohon maaf.',
    iconName: 'alert-decagram',
    topText: "Hmmm...",
  },
};

export const getAlertConfig = (type: string): Object => CONFIGS[type];
