import type { Preview } from "@storybook/react";
import "../src/index.css";
import { Background } from "./Background";
import { Font } from "./Font";
import { DocumentationContainer } from './DocumentationContainer';
import { FigmaLink } from './FigmaLink';
import { BADGE } from './constants';
import './main.css';

const preview: Preview = {
  parameters: {
    docs: {
      // @ts-ignore
      container: (props: any) => ((<DocumentationContainer {...props} />)),
    },
    badgesConfig: {
      [BADGE.CUSTOM]: {
        styles: {
          backgroundColor: '#DC2626',
          color: '#fff',
        },
        title: 'CUSTOM',
      },
    },
    layout: 'centered',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  }
};

export const globalTypes = {
  scheme: {
    name: 'Scheme',
    description: 'Select theme',
    defaultValue: 'dark',
    toolbar: {
      items: [
        { value: 'dark', icon: 'circle', title: 'Dark' },
        { value: 'light', icon: 'circlehollow', title: 'Light' },
      ],
      dynamicTitle: true
    }
  },
  accent: {
    name: 'Accent',
    description: 'Select accent',
    defaultValue: 'accent-blue',
    toolbar: {
      items: [
        { value: 'accent-blue', title: 'Blue' },
        { value: 'accent-green', title: 'Green' },
        { value: 'accent-violet', title: 'Violet' },
        { value: 'accent-pink', title: 'Pink' },
        { value: 'accent-yellow', title: 'Yellow' },
        { value: 'accent-orange', title: 'Orange' },
        { value: 'accent-salmon', title: 'Salmon' },
      ],
      dynamicTitle: true
    }
  },
}

export const decorators = [
  Background,
  Font,
  FigmaLink
];

export default preview;
