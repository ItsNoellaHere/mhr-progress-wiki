import React, { useEffect } from 'react';
import {useColorMode} from '@docusaurus/theme-common';

function ColorModeToggle({className, buttonClassName, value, onChange}) {
  const {colorMode, setColorMode} = useColorMode();

  useEffect(() => {
    setColorMode('dark');
  })

  return (
    <></>
  );
}
export default ColorModeToggle;
