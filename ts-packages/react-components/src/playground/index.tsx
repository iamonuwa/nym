import * as React from 'react';
import { PlaygroundButtons } from './buttons';
import { PlaygroundCheckboxes } from './checkboxes';
import { PlaygroundBasicSwitches } from './switches';
import { PlaygroundFonts } from './fonts';

export const Playground: React.FC = () => (
  <>
    <h2>Buttons</h2>
    <PlaygroundButtons />

    <h2>Checkboxes</h2>
    <PlaygroundCheckboxes />

    <h2>Switches</h2>
    <PlaygroundBasicSwitches />

    <h2>Fonts</h2>
    <PlaygroundFonts />
  </>
);
