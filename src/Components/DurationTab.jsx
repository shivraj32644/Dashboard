import React from 'react';
import styles from '../Styles/RightRecentTrans.module.css'
import {
  ChakraProvider,
  Box,
  SimpleGrid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

export default function DurationTab() {
  return (
    <Tabs isFitted>
    <TabList  className={styles.tabList} >
      <Tab>Day</Tab>
      <Tab>Week</Tab>
      <Tab>Month</Tab>
      <Tab>Year</Tab>
    </TabList>
  
    <TabPanels className={styles.tabPanel} >
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
      <TabPanel>
        <p>four!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
  );
}