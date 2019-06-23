export const TYPES = {
  FIND_RESTAURANTS: 'FIND_RESTAURANTS',
  WITH_YOUR_TASTE: 'WITH_YOUR_TASTE',
  CHOOSE_YOUR_MEAL: 'CHOOSE_YOUR_MEAL',
};

export const SCREENS = {
  [TYPES.FIND_RESTAURANTS]: {
    title: 'CARI UMKM',
    description:
      'Cari UMKM Kerajinan yang ingin kamu kunjungi dan lihat - lihat produknya.',
    image: 'findrestaurants',
  },

  [TYPES.WITH_YOUR_TASTE]: {
    title: 'JENIS FAVORITMU',
    description:
      'Kamu hanya perlu menyebutkan jenis produk yang kamu cari, kami akan menunjukkan beberapa rekomendasi produk yang bisa kamu beli.',
    image: 'withyourtaste',
  },

  [TYPES.CHOOSE_YOUR_MEAL]: {
    title: 'PILIH PRODUKMU',
    description:
      'Cari dan pilih produk yang ingin kamu beli dengan melihat rating dan juga review yang sudah diberikan.',
    image: 'chooseyourmeal',
  },
};
