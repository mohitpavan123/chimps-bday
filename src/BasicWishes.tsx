import React from 'react';
import { PrimaryButton, Text, Stack, Image } from '@fluentui/react'

const BasicWishes: React.FC = () => {
  return (
    <Stack horizontalAlign="center" verticalAlign="center" styles={{ root: { height : '1000px', paddingBottom: '20px', backgroundColor: '#f3f3f3', alignItems : 'center' } }}>
      <Text variant="xxLargePlus" styles={{ root: { color: '#0078d4', marginBottom: '20px' } }}>
        Happy Birthday, Kothiiii!! 🎂🎉
      </Text>
      <Text variant="xxLarge" styles={{ root: { alignItems : 'center', justifyContent : 'center' } }}>
        Happy Birthday Chimpuuu!!🐒 🎉<br />
      </Text>
      <Text variant="xxLarge" styles={{ root: { marginBottom: '100px', alignItems : 'center', justifyContent : 'center' } }}>
        Best of luck frend, Nv ilane kothi kothi ga mammalni andarni entertain cheyyali ani korukuntunnam🐒<br />
      </Text>
      <Image
        src="chimps-bday-home-page.jpeg"
        alt="Happy Birthday"
        width={600}
        height={600}
        styles={{ root: { borderRadius: '50%', marginBottom: '20px' } }}
      />
    </Stack>
  );
};

export default BasicWishes;
