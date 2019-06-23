// @flow

export const TYPES = {
  INSTAGRAM: 'INSTAGRAM',
  LINKEDIN: 'LINKEDIN',
  GITHUB: 'GITHUB',
};

export const SOCIAL_BUTTONS = {
  [TYPES.INSTAGRAM]: {
    colors: ['#8a3ab9', '#bc2a8d', '#fbad50', '#cd486b'],
    url: 'https://www.instagram.com/ilham_hzrd20/',
    iconName: 'instagram',
    withMarginTop: true,
  },

  [TYPES.LINKEDIN]: {
    colors: ['#0077B5', '#0077B5'],
    url: 'https://www.linkedin.com/in/ilhammaulana20',
    iconName: 'linkedin',
    withMarginTop: false,
  },

  [TYPES.GITHUB]: {
    colors: ['#333333', '#333333'],
    url: 'https://github.com/fadli7',
    iconName: 'github-circle',
    withMarginTop: true,
  },
};
